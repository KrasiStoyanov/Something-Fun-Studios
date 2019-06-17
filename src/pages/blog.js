import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { Button, Input } from "reactstrap";

import Layout from "../components/layout";
import Head from "../components/head";

class DevLogPage extends React.PureComponent {
    constructor(props) {
        super(props);

        let tags = this.saveTags(props.data);
        this.state = {
            data: this.props.data,
            copyOfFilteredData: this.props.data,
            tags: tags,
            activeTagFilters: [],
        };
    }

    saveTags(data) {
        let tags = [];
        data.forEach(d => {
            if (tags.indexOf(d.node.tag) === -1) {
                tags.push(d.node.tag);
            }
        });

        return tags;
    }

    filterTag(tag, isButtonPressed) {
        // If the provided tag is none - clear all filters.
        if (tag === "none") {
            let filterButtons = document.getElementsByClassName(
                "filter-button"
            );

            // Go through all filter buttons and remove their active class.
            for (let index = 0; index < filterButtons.length; index += 1) {
                filterButtons[index].classList.remove("active");
            }

            this.setState({
                data: this.props.data,
                activeTagFilters: [],
            });
        } else {
            // Update the list containing all active tags based on the currently selected tag and if the button has already been pressed.
            this.updateActiveTagsList(tag, isButtonPressed);

            // Go through all the active tag filters and through all the data and find the appropriate data.
            let newData = [];
            this.state.activeTagFilters.forEach(t => {
                this.props.data.forEach(i => {
                    if (i.node.tag === t) {
                        newData.push(i);
                    }
                });
            });

            // If there are currently no active tag filters - return the original data.
            if (this.state.activeTagFilters.length === 0) {
                newData = this.props.data;
            }

            // Sort the filtered data by published date.
            newData.sort(this.sortByPublishedDate);

            this.setState({
                data: newData,
                copyOfFilteredData: newData,
            });
        }
    }

    updateActiveTagsList(tag, isButtonPressed) {
        let indexOfTag = this.state.activeTagFilters.indexOf(tag);
        if (indexOfTag === -1) {
            this.state.activeTagFilters.push(tag);
        } else if (indexOfTag > -1 && isButtonPressed) {
            this.state.activeTagFilters.splice(indexOfTag, 1);
        }
    }

    sortByPublishedDate(a, b) {
        if (a.node.publishedDate > b.node.publishedDate) {
            return -1;
        }

        if (a.node.publishedDate < b.node.publishedDate) {
            return 1;
        }

        return 0;
    }

    search(e) {
        const phrase = e.target.value;
        let newData = this.state.data.filter(
            item => item.node.title.indexOf(phrase) !== -1
        );

        // If the provided search options do not find anything in the currently filtered data, try and find it in the original one.
        if (newData.length === 0) {
            newData = this.state.copyOfFilteredData.filter(
                item => item.node.title.indexOf(phrase) !== -1
            );
        }

        // If the user deletes everything from the searchbar it should show all the filtered data.
        if (phrase.length === 0) {
            newData = this.state.copyOfFilteredData;
        }

        this.setState({
            data: newData,
        });
    }

    render() {
        return (
            <Layout>
                <Head title="Dev Log" />
                <h1>Dev Log</h1>
                <Button
                    onClick={e => this.filterTag("none")}
                    className="btn btn-md"
                    outline
                    color="secondary"
                >
                    Clear all filters
                </Button>
                {this.state.tags.map((t, i) => {
                    return (
                        <Button
                            key={t}
                            onClick={e => {
                                let isFilterActive = false;
                                let classNames = e.target.className;
                                let indexOfActiveClass = classNames.indexOf(
                                    "active"
                                );
                                if (indexOfActiveClass > -1) {
                                    isFilterActive = true;
                                    e.target.className = classNames.replace(
                                        " active",
                                        ""
                                    );
                                } else {
                                    isFilterActive = false;
                                    e.target.className += " active";
                                }

                                this.filterTag(t, isFilterActive);
                            }}
                            className="btn btn-md filter-button"
                            outline
                            color="secondary"
                        >
                            {t}
                        </Button>
                    );
                })}
                <Input
                    type="text"
                    onChange={e => this.search(e)}
                    onKeyDown={e => this.search(e)}
                />
                <ol>
                    {this.state.data.map((e, i) => {
                        return (
                            <li key={`${i}: ${e.node.title}`}>
                                <Link to={`/blog/${e.node.slug}`}>
                                    <h2>{e.node.title}</h2>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </Layout>
        );
    }
}

export default () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allContentfulBlogPost(
                        sort: { fields: publishedDate, order: DESC }
                    ) {
                        edges {
                            node {
                                title
                                slug
                                publishedDate(formatString: "MMMM Do, YYYY")
                                tag
                            }
                        }
                    }
                }
            `}
            render={data => (
                <DevLogPage data={data.allContentfulBlogPost.edges} />
            )}
        />
    );
};

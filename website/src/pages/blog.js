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
            tags: tags,
        };
    }

    saveTags(data) {
        let tags = [];
        data.forEach(d => {
            if (tags.indexOf(d.tag) === -1) {
                tags.push(d.tag);
            }
        });

        return tags;
    }

    filterTag(tag) {
        // TODO: Save the state of the pressed button.
        // TODO: Every time a button is pressed, consider the previously active tag filters and add the filtered items based on all tags, not only the one pressed.
        // TODO: If a button is pressed and the user presses it again - the filter is deactivated and the button changes its state to normal.

        // If the tag equals "none" - all filters applied are removed and the original data is being shown.
        if (tag === "none") {
            this.setState({
                data: this.props.data,
            });
        } else {
            this.setState({
                data: this.props.data.filter(item => item.tag === tag),
            });
        }
    }

    search(e) {
        const phrase = e.target.value;
        this.setState({
            data: this.props.data.filter(
                item => item.title.indexOf(phrase) !== -1
            ),
        });
    }

    render() {
        return (
            <Layout>
                <Head title="Dev Log" />
                <h1>Dev Log</h1>
                <Button
                    onClick={(e) => {
                        console.log(e.target.className += " active");
                        this.filterTag("none")
                    }}
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
                            onClick={() => this.filterTag(t)}
                            className="btn btn-md"
                            outline
                            color="secondary"
                        >
                            {t}
                        </Button>
                    );
                })}
                <Input type="text" onKeyUp={e => this.search(e)} />
                <ol>
                    {this.state.data.map(edge => {
                        return (
                            <li>
                                <Link to={`/blog/#`}>
                                    <h2>{edge.title}</h2>
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
                            }
                        }
                    }
                }
            `}
            render={data => (
                <DevLogPage
                    data={[
                        {
                            tag: "tag1",
                            title: "Post from tag1 1",
                        },
                        {
                            tag: "tag1",
                            title: "Post from tag1 2",
                        },
                        {
                            tag: "tag2",
                            title: "Post from tag2 1",
                        },
                        {
                            tag: "tag3",
                            title: "Post from tag3 1",
                        },
                        {
                            tag: "tag3",
                            title: "Post from tag3 2",
                        },
                        {
                            tag: "tag3",
                            title: "Post from tag3 3",
                        },
                    ]}
                />
            )}
        />
    );
};

import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { graphql, StaticQuery } from "gatsby";

import highlightsThumbnail from "../../images/highlights-thumbnail.jpg";

class BestHighlightsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggleVideo = this.toggleVideo.bind(this);
        this.scrollToGames = this.scrollToGames.bind(this);
    }

    toggleVideo() {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    scrollToGames(section) {
        document.querySelector(`.${section}`).scrollIntoView({
            behavior: "smooth",
        });
    }

    render() {
        const closeButton = (
            <Button
                id="close-button"
                className="btn-icon btn-icon-sm"
                color="secondary"
                onClick={this.toggleVideo}
            >
                <i className="icon-x" />
            </Button>
        );

        return (
            <section className="section highlights bg-dark text-white py-5">
                <div className="container py-5">
                    <div className="row py-4 align-items-center">
                        <div className="description offset-lg-1 col-md-6 offset-md-1 col-sm-12 position-absolute">
                            <p className="sub-title text-light m-0">
                                Demonstration Day Block 3
                            </p>
                            <h4 className="title">
                                Best Highlights of the Demonstration
                            </h4>
                            <Button
                                className="btn-md mt-4"
                                color="secondary"
                                onClick={() =>
                                    this.scrollToGames("featured-games")
                                }
                            >
                                <i className="icon-games mr-2" />
                                Our Games
                            </Button>
                        </div>
                        <div className="col-md-7 offset-md-4 col-sm-12">
                            <div
                                className="video-wrapper position-relative d-flex flex-column align-items-end"
                                onClick={this.toggleVideo}
                            >
                                <div className="overlay overlay-dark" />
                                <div className="shadow" />
                                <div className="play-button d-flex align-items-center justify-content-center">
                                    <i className="icon-play" />
                                </div>
                                <img
                                    className="image"
                                    src={highlightsThumbnail}
                                    alt="Video"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleVideo}
                    className="modal-xl"
                    centered={true}
                    external={closeButton}
                >
                    <ModalBody>
                        {this.props.data.map(e => {
                            if (
                                e.node.frontmatter.title === "Best Highlights"
                            ) {
                                return (
                                    <div
                                        key={e.node.frontmatter.title}
                                        dangerouslySetInnerHTML={{
                                            __html: e.node.html,
                                        }}
                                    />
                                );
                            }

                            return null;
                        })}
                    </ModalBody>
                </Modal>
            </section>
        );
    }
}

export default () => {
    return (
        <StaticQuery
            query={graphql`
                {
                    allMarkdownRemark {
                        edges {
                            node {
                                html
                                frontmatter {
                                    title
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <BestHighlightsSection data={data.allMarkdownRemark.edges} />
            )}
        />
    );
};

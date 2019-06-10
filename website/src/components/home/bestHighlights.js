import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
        return (
            <section className="section highlights bg-dark text-white py-5">
                <div className="container py-5">
                    <div className="row py-4 align-items-center">
                        <div className="description col-md-6 offset-md-1 col-sm-12 position-absolute">
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
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggleVideo}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleVideo}>
                            Do Something
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggleVideo}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </section>
        );
    }
}

export default BestHighlightsSection;

import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import Masonry from "./Masonry";

import image1Small from "../../images/captures/1.jpg";
import image2Small from "../../images/captures/2.jpg";
import image3Small from "../../images/captures/3.jpg";
import image4Small from "../../images/captures/4.jpg";
import image5Small from "../../images/captures/5.jpg";
import image6Small from "../../images/captures/6.jpg";
import image7Small from "../../images/captures/7.jpg";
import image8Small from "../../images/captures/8.jpg";
import image9Small from "../../images/captures/9.jpg";

import image1Large from "../../images/captures/1_Large.jpg";
import image2Large from "../../images/captures/2_Large.jpg";
import image3Large from "../../images/captures/3_Large.jpg";
import image4Large from "../../images/captures/4_Large.jpg";
import image5Large from "../../images/captures/5_Large.jpg";
import image6Large from "../../images/captures/6_Large.jpg";
import image7Large from "../../images/captures/7_Large.jpg";
import image8Large from "../../images/captures/8_Large.jpg";
import image9Large from "../../images/captures/9_Large.jpg";

const breakPoints = [576, 768, 992, 1200];

class BestCapturesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            smallImages: [
                { src: image1Small, id: 1 },
                { src: image2Small, id: 2 },
                { src: image3Small, id: 3 },
                { src: image4Small, id: 4 },
                { src: image5Small, id: 5 },
                { src: image6Small, id: 6 },
                { src: image7Small, id: 7 },
                { src: image8Small, id: 8 },
                { src: image9Small, id: 9 },
            ],
            bigImages: [
                { src: image1Large, id: 1 },
                { src: image2Large, id: 2 },
                { src: image3Large, id: 3 },
                { src: image4Large, id: 4 },
                { src: image5Large, id: 5 },
                { src: image6Large, id: 6 },
                { src: image7Large, id: 7 },
                { src: image8Large, id: 8 },
                { src: image9Large, id: 9 },
            ],
            breakPoints,
            activeImage: null,
        };

        this.scrollToTeam = this.scrollToTeam.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    scrollToTeam(section) {
        document.querySelector(`.${section}`).scrollIntoView({
            behavior: "smooth",
        });
    }

    toggleModal(image = null) {
        let bigImage = null;
        if (image) {
            bigImage = this.state.bigImages.filter(i => i.id === image.id)[0]
                .src;
        }

        this.setState(prevState => ({
            modal: !prevState.modal,
            activeImage: bigImage,
        }));
    }

    render() {
        const closeButton = (
            <Button
                id="close-button"
                className="btn-icon btn-icon-sm position-fixed"
                color="secondary"
                onClick={() => this.toggleModal()}
            >
                <i className="icon-x" />
            </Button>
        );

        return (
            <section className="section captures bg-dark text-white py-5">
                <div className="container py-5">
                    <div className="row py-4">
                        <div className="description col-md-5 col-sm-12 position-absolute">
                            <h2 className="heading font-weight-semi-bold">
                                Explore our best captures.
                            </h2>
                            <Button
                                className="btn-md mt-4"
                                color="secondary"
                                // onClick={() => this.scrollToTeam("team")}
                            >
                                <i className="icon-users mr-2" />
                                The Team
                            </Button>
                        </div>
                        <div className="col-md-9 offset-md-3 col-sm-12 mt-4 pt-1">
                            <Masonry breakPoints={this.state.breakPoints}>
                                {this.state.smallImages.map(i => {
                                    return (
                                        <div
                                            key={i.id}
                                            className="tile position-relative"
                                            onClick={() => this.toggleModal(i)}
                                        >
                                            <div className="overlay overlay-dark" />
                                            <img
                                                className="w-100"
                                                alt={i.id}
                                                src={i.src}
                                            />
                                        </div>
                                    );
                                })}
                            </Masonry>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={() => this.toggleModal()}
                    className="modal-xl my-4"
                    centered={true}
                    external={closeButton}
                >
                    <ModalBody className="py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 offset-md-1 col-sm-12">
                                    <img
                                        alt=""
                                        src={this.state.activeImage}
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </section>
        );
    }
}

export default BestCapturesSection;

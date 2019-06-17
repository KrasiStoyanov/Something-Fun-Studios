import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";

import image1Small from "../../images/team/1.jpg";
import image2Small from "../../images/team/2.jpg";
import image3Small from "../../images/team/3.jpg";
import image4Small from "../../images/team/4.jpg";
import image5Small from "../../images/team/5.jpg";
import image6Small from "../../images/team/6.jpg";

import image1Large from "../../images/team/1_Large.jpg";
import image2Large from "../../images/team/2_Large.jpg";
import image3Large from "../../images/team/3_Large.jpg";
import image4Large from "../../images/team/4_Large.jpg";
import image5Large from "../../images/team/5_Large.jpg";
import image6Large from "../../images/team/6_Large.jpg";

class TheTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            people: [
                {
                    id: 1,
                    occupation: "Programmer & Artist",
                    name: "Krasimir Stoyanov",
                    bio:
                        "A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team player, who will never leave you on your own. Extremely diligent, lifetime learner, with the intention to become a Front End grandmaster and an ultimate Game Developer.",
                    dateOfBirth: "January 19, 1999",
                    email: "krasimir641@gmail.com",
                    location: "Groningen, The Netherlands",
                    mobile: "+31 6 15 95 15 69",
                    smallImage: image1Small,
                    largeImage: image1Large,
                },
                {
                    id: 2,
                    occupation: "Programmer & Artist",
                    name: "Hugo Weichert",
                    bio:
                        "A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team player, who will never leave you on your own. Extremely diligent, lifetime learner, with the intention to become a Front End grandmaster and an ultimate Game Developer.",
                    dateOfBirth: "January 19, 1999",
                    email: "krasimir641@gmail.com",
                    location: "Groningen, The Netherlands",
                    mobile: "+31 6 15 95 15 69",
                    smallImage: image2Small,
                    largeImage: image2Large,
                },
                {
                    id: 3,
                    occupation: "Programmer & Artist",
                    name: "Patricia Plaja",
                    bio:
                        "A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team player, who will never leave you on your own. Extremely diligent, lifetime learner, with the intention to become a Front End grandmaster and an ultimate Game Developer.",
                    dateOfBirth: "January 19, 1999",
                    email: "krasimir641@gmail.com",
                    location: "Groningen, The Netherlands",
                    mobile: "+31 6 15 95 15 69",
                    smallImage: image3Small,
                    largeImage: image3Large,
                },
                {
                    id: 4,
                    occupation: "Programmer & Artist",
                    name: "Andrea Fernandez",
                    bio:
                        "A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team player, who will never leave you on your own. Extremely diligent, lifetime learner, with the intention to become a Front End grandmaster and an ultimate Game Developer.",
                    dateOfBirth: "June 18, 1999",
                    email: "andreafernandezmoros@gmail.com",
                    location: "Groningen, The Netherlands",
                    mobile: "+31 6 55 52 97 40",
                    smallImage: image4Small,
                    largeImage: image4Large,
                },
                {
                    id: 5,
                    occupation: "Programmer & Artist",
                    name: "Jeff Lenane",
                    bio:
                        "A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team player, who will never leave you on your own. Extremely diligent, lifetime learner, with the intention to become a Front End grandmaster and an ultimate Game Developer.",
                    dateOfBirth: "January 19, 1999",
                    email: "krasimir641@gmail.com",
                    location: "Groningen, The Netherlands",
                    mobile: "+31 6 15 95 15 69",
                    smallImage: image5Small,
                    largeImage: image5Large,
                },
                {
                    id: 6,
                    occupation: "Programmer & Artist",
                    name: "Mihail Karagyozov",
                    bio:
                        "A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team player, who will never leave you on your own. Extremely diligent, lifetime learner, with the intention to become a Front End grandmaster and an ultimate Game Developer.",
                    dateOfBirth: "January 19, 1999",
                    email: "krasimir641@gmail.com",
                    location: "Groningen, The Netherlands",
                    mobile: "+31 6 15 95 15 69",
                    smallImage: image6Small,
                    largeImage: image6Large,
                },
            ],
            activePerson: null,
        };

        this.scrollToTeam = this.scrollToTeam.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    scrollToTeam(section) {
        document.querySelector(`.${section}`).scrollIntoView({
            behavior: "smooth",
        });
    }

    toggleModal(activePerson = null) {
        this.setState(prevState => ({
            modal: !prevState.modal,
            activePerson: activePerson,
        }));
    }

    render() {
        const closeButton = (
            <Button
                id="close-button"
                className="btn-icon btn-icon-sm position-fixed"
                color="secondary"
                onClick={() => this.toggleModal()}
                style={{ zIndex: 1 }}
            >
                <i className="icon-x" />
            </Button>
        );

        return (
            <section className="section the-team overflow-hidden">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-sm-12 col-md-10 offset-md-1 mb-5 position-static">
                            <h2 className="text-uppercase mb-2">
                                <span className="offset-title dark text-uppercase">
                                    Team
                                </span>
                                <span className="heading">Meet the team</span>
                            </h2>
                        </div>
                        <div className="col-sm-12 mt-4 pt-1">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    {this.state.people.map(p => {
                                        return (
                                            <div
                                                className="col-sm-12 col-md-6 col-lg-4 mb-4"
                                                onClick={() =>
                                                    this.toggleModal(p)
                                                }
                                                key={p.id}
                                            >
                                                <div
                                                    className="member"
                                                    style={{
                                                        backgroundImage: `url(${
                                                            p.smallImage
                                                        })`,
                                                    }}
                                                />
                                                <div className="shadow" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={() => this.toggleModal()}
                    className="team-modal modal-xl m-0 p-0"
                    centered={true}
                    external={closeButton}
                >
                    <ModalBody className="p-0 m-0">
                        <div className="container-fluid px-0 h-100">
                            <div className="row h-100">
                                <div
                                    className="d-none d-md-block col-md-6 h-100"
                                    onClick={() => this.toggleModal()}
                                />
                                <div className="col-md-6 bg-white col-sm-12 px-0 h-100">
                                    <div
                                        className="header"
                                        style={{
                                            backgroundImage: `url(${
                                                this.state.activePerson
                                                    ? this.state.activePerson
                                                          .largeImage
                                                    : ""
                                            })`,
                                        }}
                                    />
                                    <div className="content">
                                        <div className="p-2">
                                            <p className="sub-title m-0 text-secondary">
                                                {this.state.activePerson
                                                    ? this.state.activePerson
                                                          .occupation
                                                    : ""}
                                            </p>
                                            <h4 className="title font-weight-bold">
                                                {this.state.activePerson
                                                    ? this.state.activePerson
                                                          .name
                                                    : ""}
                                            </h4>
                                            <p className="description text-light pt-2 mb-1">
                                                {this.state.activePerson
                                                    ? this.state.activePerson
                                                          .bio
                                                    : ""}
                                            </p>
                                            <div className="demographics pt-4 mt-2 container-fluid px-0 text-light">
                                                <div className="row">
                                                    <div className="col-sm-6 mb-2 mt-1">
                                                        <i className="icon-calendar text-secondary mr-2" />
                                                        {this.state.activePerson
                                                            ? this.state
                                                                  .activePerson
                                                                  .dateOfBirth
                                                            : ""}
                                                    </div>
                                                    <div className="col-sm-6 mb-2 mt-1">
                                                        <i className="icon-mail text-secondary mr-2" />
                                                        {this.state.activePerson
                                                            ? this.state
                                                                  .activePerson
                                                                  .email
                                                            : ""}
                                                    </div>
                                                    <div className="col-sm-6 mb-2 mt-1">
                                                        <i className="icon-map text-secondary mr-2" />
                                                        {this.state.activePerson
                                                            ? this.state
                                                                  .activePerson
                                                                  .location
                                                            : ""}
                                                    </div>
                                                    <div className="col-sm-6 mb-2 mt-1">
                                                        <i className="icon-tablet text-secondary mr-2" />
                                                        {this.state.activePerson
                                                            ? this.state
                                                                  .activePerson
                                                                  .mobile
                                                            : ""}
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="font-weight-bold pt-3 mt-3 mb-2 pb-1">
                                                Follow Me
                                            </h6>
                                            <Button
                                                className="btn-icon btn-icon-sm mr-2"
                                                color="secondary"
                                            >
                                                <i className="icon-instagram" />
                                            </Button>
                                            <Button
                                                className="btn-icon btn-icon-sm mr-2"
                                                color="secondary"
                                            >
                                                <i className="icon-facebook" />
                                            </Button>
                                            <Button
                                                className="btn-icon btn-icon-sm mr-2"
                                                color="secondary"
                                            >
                                                <i className="icon-github" />
                                            </Button>
                                            <Button
                                                className="btn-icon btn-icon-sm mr-2"
                                                color="secondary"
                                            >
                                                <i className="icon-dribbble" />
                                            </Button>
                                            <Button
                                                className="btn-icon btn-icon-sm mr-2"
                                                color="secondary"
                                            >
                                                <i className="icon-linkedin" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </section>
        );
    }
}

export default TheTeam;

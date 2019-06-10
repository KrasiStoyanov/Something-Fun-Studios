import React from "react";

import aboutUs from "../../images/about-us.jpg";
import aboutUsTitle from "../../images/about-us-top.jpg";

class AboutUsSection extends React.Component {
    render() {
        return (
            <section className="section pt-3 about-us">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-lg-5 offset-lg-1 col-md-8 offset-md-1 col-sm-12 top-card-wrapper">
                            <div className="top-card-shadow" />
                            <div
                                className="picture-card top-card text-uppercase d-flex flex-column position-relative text-white"
                                style={{
                                    backgroundImage: `url(${aboutUsTitle})`,
                                }}
                            >
                                <div className="overlay overlay-secondary" />
                                <p className="sub-title font-weight-bold m-0">
                                    Something Fun Studios
                                </p>
                                <h2 className="title m-0 position-relative">
                                    Who we are
                                </h2>
                            </div>
                        </div>
                        <div className="caption col-sm-12">
                            <img
                                className="w-100"
                                src={aboutUs}
                                alt="About us"
                            />
                        </div>
                        <div className="col-lg-7 offset-lg-4 col-md-9 offset-md-2 col-sm-12 bottom-card-wrapper">
                            <div className="bottom-card-shadow" />
                            <div
                                className="picture-card bottom-card d-flex flex-column position-relative text-white"
                                style={{
                                    backgroundImage: `url(${aboutUsTitle})`,
                                }}
                            >
                                <div className="overlay overlay-primary" />
                                <p className="description position-relative m-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut non sapien sed diam
                                    vulputate luctus. Fusce vulputate ligula
                                    vitae nunc venenatis, non semper sapien
                                    auctor. Donec sit amet ante vehicula,
                                    viverra ligula et, posuere augue. Cras
                                    lobortis purus sed arcu sollicitudin, a
                                    congue ipsum cursus. Fusce eu ante sit amet
                                    purus eleifend tempus. Aenean facilisis diam
                                    eget quam auctor molestie. Phasellus non
                                    velit quam. Fusce vitae venenatis libero.
                                    Sed pulvinar metus est, quis mattis libero
                                    mattis quis. Orci varius natoque penatibus
                                    et magnis dis parturient montes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsSection;

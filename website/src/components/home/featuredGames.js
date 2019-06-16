import React from "react";
import { Button } from "reactstrap";

class FeaturedGamesSection extends React.Component {
    render() {
        return (
            <section className="section featured-games overflow-hidden">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-sm-12 col-md-10 offset-md-1 mb-5 position-static">
                            <h2 className="text-uppercase mb-2">
                                <span className="offset-title dark text-uppercase">
                                    Games
                                </span>
                                <span className="heading">Featured Games</span>
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-10 offset-md-1 px-0 mt-4 games-wrapper">
                            <div className="container-fluid h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-sm-12 col-md-4 h-100">
                                        <div className="game-thumbnail h-100 w-100"></div>
                                    </div>
                                    <div className="col-sm-12 col-md-8">
                                        <h5 className="text-uppercase text-light mb-4 font-weight-normal">
                                            Astro
                                            <span className="font-weight-extra-bold text-secondary">
                                                Trip
                                            </span>
                                        </h5>
                                        <p className="text-light game-description mb-3">
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt
                                            ut laoreet dolore magna aliquam erat
                                            volutpat. Ut wisi enim ad minim
                                            veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl
                                            ut aliquip ex ea commodo consequat.
                                            Duis autem vel eum iriure dolor in
                                            hendrerit in vulputate velit esse
                                            molestie consequat, vel illum dolore
                                            eu feugiat nulla facilisis at vero
                                            eros et accumsan et iusto odio
                                            dignissim qui blandit praesent.
                                        </p>
                                        <Button
                                            className="btn-md mt-4 mr-3"
                                            color="secondary"
                                        >
                                            <i className="icon-buy mr-2" />
                                            Buy Now
                                        </Button>
                                        <Button
                                            className="btn-md mt-4"
                                            color="secondary"
                                            outline
                                        >
                                            Discover More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedGamesSection;

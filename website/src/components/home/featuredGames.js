import React from "react";
import { Button } from "reactstrap";

class FeaturedGamesSection extends React.Component {
    render() {
        return (
            <section className="section featured-games py-5">
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
                                onClick={() => this.scrollToGames("our-games")}
                            >
                                <i className="icon-games mr-2" />
                                Our Games
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedGamesSection;

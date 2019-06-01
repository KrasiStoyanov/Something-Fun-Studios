import React from "react";
import { Button } from "reactstrap";

class HeaderHome extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row flex-column">
                    <h1 className="text-uppercase col-lg-7 offset-lg-1">
                        Reporting for duty
                    </h1>
                    <Button className="btn-lg" color="secondary">
                        Discover More
                    </Button>
                </div>
            </div>
        );
    }
}

export default HeaderHome;

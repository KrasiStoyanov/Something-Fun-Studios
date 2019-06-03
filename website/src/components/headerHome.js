import React from "react";
import { Button } from "reactstrap";

class HeaderHome extends React.Component {
    render() {
        return (
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-7 offset-lg-1">
                        <h1 className="text-uppercase">
                            Reporting for duty
                        </h1>
                        <Button className="btn-lg" color="secondary">
                            Discover More
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderHome;

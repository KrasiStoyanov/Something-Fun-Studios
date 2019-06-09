import React from "react";
import { Button } from "reactstrap";

import "../styles/index.scss";
import ScrollToTopStyles from "./scrollToTop.module.scss";

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    render() {
        return (
            <Button
                className={`${
                    ScrollToTopStyles.button
                } btn-icon btn-icon-sm ml-2`}
                color="secondary"
                onClick={this.scrollToTop}
            >
                
            </Button>
        );
    }
}

export default ScrollToTop;

import React from "react";

import NormalNavbar from "./normalNavbar";
import StickyNavbar from "./stickyNavbar";
import HeaderHome from "./headerHome";

class Header extends React.Component {
    render() {
        return (
            <header
                id="header"
                className={`${this.props.headerClass} overflow-hidden`}
            >
                <NormalNavbar />
                <StickyNavbar />

                {this.props.isHome ? <HeaderHome /> : ""}
            </header>
        );
    }
}

export default Header;

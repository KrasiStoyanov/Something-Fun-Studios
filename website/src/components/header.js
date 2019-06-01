import React from "react";

import NormalNavbar from "./normalNavbar";
import StickyNavbar from "./stickyNavbar";
import HeaderHome from "./headerHome";

class Header extends React.Component {
    render() {
        return (
            <header className={this.props.headerClass}>
                <NormalNavbar />
                <StickyNavbar />

				{this.props.isHome ? <HeaderHome /> : ''}
            </header>
        );
    }
}

export default Header;
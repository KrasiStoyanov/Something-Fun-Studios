import React from "react";

import Header from "./header";
import Footer from "./footer";

import "../styles/index.scss";
import layoutStyles from "../styles/layout.module.scss";

class Layout extends React.Component {
    render() {
        return (
            <div className={layoutStyles.mainContainer}>
                <div className={layoutStyles.mainContent}>
                    <Header
                        headerClass={this.props.headerClass}
                        isHome={this.props.isHome}
                    />
                    <main>{this.props.children}</main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;

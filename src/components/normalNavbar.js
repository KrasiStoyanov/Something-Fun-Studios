import React from "react";
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

import logo from "../images/logo.svg";
import NormalNavbarStyles from "../styles/_normalNavbar.module.scss";

class NormalNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar
                            className={`${
                                NormalNavbarStyles.navbar
                            } position-absolute pt-4 pr-0 pb-4 pl-0 w-100`}
                            expand="md"
                        >
                            <NavbarBrand href="/">
                                <img
                                    className={NormalNavbarStyles.navbarBrand}
                                    src={logo}
                                    alt="Logo"
                                />
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className={
                                                NormalNavbarStyles.navLink
                                            }
                                            href="/"
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={
                                                NormalNavbarStyles.navLink
                                            }
                                            href="/blog/"
                                        >
                                            Dev Log
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={
                                                NormalNavbarStyles.navLink
                                            }
                                            href="/contact/"
                                        >
                                            Contact us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="ml-1">
                                        <Button
                                            className="btn-icon btn-icon-md ml-2"
                                            color="secondary"
                                        >
                                            <i className="icon-star" />
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default NormalNavbar;

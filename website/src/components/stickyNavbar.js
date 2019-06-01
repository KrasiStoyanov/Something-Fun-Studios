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
import StickyNavbarStyles from "../styles/_stickyNavbar.module.scss";

class StickyNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onScroll = this.onScroll.bind(this);

        this.state = {
            isOpen: false,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);

        let isVisible = false;
        let prevScrollpos = window.pageYOffset;

        // On page load detect if the navbar should be hidden or not.
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 &&
                prevScrollpos > currentScrollPos &&
                prevScrollpos <= maxScroll) ||
            (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
            (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
            isVisible = false;
        } else {
            isVisible = true;
        }

        this.setState({
            isVisible: isVisible,
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll() {
        let isVisible = false;
        let prevScrollpos = window.pageYOffset;
        let that = this;

        window.onscroll = function() {
            const maxScroll = document.body.clientHeight - window.innerHeight;
            let currentScrollPos = window.pageYOffset;
            if (
                (maxScroll > 0 &&
                    prevScrollpos > currentScrollPos &&
                    prevScrollpos <= maxScroll) ||
                (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
                (prevScrollpos <= 0 && currentScrollPos <= 0)
            ) {
                isVisible = false;
            } else {
                isVisible = true;
            }

            prevScrollpos = currentScrollPos;

            that.setState({
                isVisible: isVisible,
            });
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <div
                id="sticky-navbar"
                className={`fixed-top ${StickyNavbarStyles.stickyNavbar} ${
                    this.state.isVisible
                        ? `${StickyNavbarStyles.visible}`
                        : `${StickyNavbarStyles.hidden}`
                }`}
            >
                <div className={StickyNavbarStyles.navbarShadow} />
                <Navbar className={StickyNavbarStyles.navbar} expand="md">
                    <NavbarBrand href="/">
                        <img
                            className={StickyNavbarStyles.navbarBrand}
                            src={logo}
                            alt="Logo"
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    className={StickyNavbarStyles.navLink}
                                    href="/"
                                >
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={StickyNavbarStyles.navLink}
                                    href="/blog/"
                                >
                                    Dev Log
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={StickyNavbarStyles.navLink}
                                    href="/contact/"
                                >
                                    Contact us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Button
                                    className="btn-icon btn-icon-md"
                                    color="secondary"
                                >
                                    
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default StickyNavbar;

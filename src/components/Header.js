import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import "./Header.css";
import Favicon from "../images/favicon.png";
// import { Link } from "react-router-dom";


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Navbar
                className="navigation"
                light 
                expand="lg">
                <NavbarBrand 
                    className="mr-auto"
                >
                    <img 
                        src={Favicon}
                        alt="logo"
                        style={{
                            width: "27.5px",
                            height: "27.5px",
                            marginLeft: "10px"
                        }}
                    />
                    {/* RaissaDesyandita */}
                </NavbarBrand>
                <NavbarToggler 
                    onClick={toggle} 
                />
                <Collapse 
                    isOpen={isOpen} navbar>
                    <Nav
                        className="ml-auto" 
                        style={{marginRight: "10px"}} 
                        navbar
                    >
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/about"
                            >
                                {/* <Link to="/about"> */}
                                Profile
                                {/* </Link> */}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/work"
                            >
                                {/* <Link to="/work"> */}
                                Work
                                {/* </Link> */}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/contact"
                            >
                                {/* <Link to="/contact"> */}
                                Contact
                                {/* </Link> */}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}


export default Header;
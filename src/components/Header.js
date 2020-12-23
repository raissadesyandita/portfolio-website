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
                                href="/">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/">Work</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/"
                            >
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}


export default Header;
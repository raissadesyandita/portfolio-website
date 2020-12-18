import React from "react";
import { Container } from "reactstrap";
import "./Footer.css";


const Footer = () => {
    return (
        <>
        <Container
            className="ending"
        >
        <hr color="white" />
            <h6
                className="copyright"
            >
            <p
                className="font-name">
                RAISSA DESYANDITA
            </p>
            <i>
                &copy; Copyright - {new Date().getFullYear()}.
            </i>
            <br />
                All right reserved.
            </h6>
        </Container>
        </>
    )
}


export default Footer;
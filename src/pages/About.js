import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Profile.css";


const About = () => {
    return (
        <>
        <Container className="themed-container" fluid="lg">
            <Row>
                <Col lg={7}>
                    <h1 
                        className="about-me">
                        Raissa is a Junior FrontEnd Developer,
                        <br />
                        who always be curious learning many new things, especially on programming and design.
                    </h1>
                    <h3
                        className="about-me-">
                        Currently based in Indonesia.
                    </h3>
                </Col>
                <Col lg={5}>
                    {/* <img src="../images/favicon.png rounded" /> */}
                    <p
                        className="about-me--">
                        Raissa Desyandita
                    </p>
                    <button
                        onClick
                        className="clicked"
                        href="mailto:raissadesyandita@gmail.com" >
                        Contact Me
                    </button>
                    <a
                        className="clicked btn btn-lg"
                        href="mailto:raissadesyandita@gmail.com"
                        role="button" 
                    >
                        Contact Me
                    </a>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default About;
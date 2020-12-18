import React from "react";
import { Container, 
    // Row, Col 
} from "reactstrap";
import "./Profile.css";
import Photo from "../images/photo.jpeg";


const About = () => {
    return (
        <>
        <Container             
            className="themed-container" 
            fluid={true}
            style={{
                height: "1000px",
                backgroundColor: "black",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"
                // transform: "translateY(50%)"
            }}
        >
            {/* <Row>
                <Col lg={7}> */}
                    <h1 
                        className="about-me">
                        Raissa Desyandita,
                        <br />
                        who always be curious learning many new things, especially on programming and design.
                    </h1>
                    <h3
                        className="about-me-">
                        Experienced with ReactJS, HTML, CSS, Bootstrap, Git. 
                    </h3>
                {/* </Col>
                <Col lg={5}> */}
                    <img
                        className="profile-pic" 
                        src={Photo}
                        alt="profile-pic"
                    />
                    <p
                        className="about-me--">
                        Currently based in Surabaya, Indonesia.
                    </p>
                    {/* <button
                        onClick
                        className="clicked"
                        href="mailto:raissadesyandita@gmail.com" >
                        Contact Me
                    </button> */}
                    <a
                        className="clicked btn btn-lg"
                        href="mailto:raissadesyandita@gmail.com"
                        role="button" 
                    >
                        Contact Me
                    </a>
                {/* </Col>
            </Row> */}
        </Container>
        </>
    )
}


export default About;
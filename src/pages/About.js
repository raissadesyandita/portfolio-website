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
                        className="about-me"
                    >
                        Raissa Desyandita,
                        <br />
                        who always be curious learning many new things, especially on web development programming.
                    </h1>
                    <h3
                        className="about-me-"
                    >
                        Experienced with ReactJS, HTML, CSS, Bootstrap, Git. 
                    </h3>
                    <p
                        className="about-me--"
                    >
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My full resume
                        </a>
                    </p>
                    <img
                        className="profile-pic" 
                        src={Photo}
                        alt="profile-pic"
                    />
                    <p
                        className="about-me--"
                    >
                        Currently based in Surabaya, Indonesia.
                    </p>
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
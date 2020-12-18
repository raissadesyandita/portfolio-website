import React from "react";
import { Container } from "reactstrap";
import Contact1 from "../images/linkedin.png";
import Contact2 from "../images/github.png";
import Contact3 from "../images/telegram.png";


const Contact = () => {
    return (
        <>
            <Container 
                className="themed-container" 
                fluid="lg"
            >
                <h5
                    className="socmed-text">
                        Find me on:
                </h5>
                <a
                    href="https://www.linkedin.com/in/raissa-desyandita/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="socmed-icon"
                        src={Contact1}
                        alt="linkedin"
                    />
                </a>
                <a
                    href="https://www.github.com/raissadesyandita/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="socmed-icon"
                        src={Contact2}
                        alt="github"
                    />
                </a>
                <a
                    href="https://t.me/@raissadt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="socmed-icon"
                        src={Contact3}
                        alt="telegram"
                    />
                </a>
            </Container>
        </>
    )
}


export default Contact;
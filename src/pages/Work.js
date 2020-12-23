import React from "react";
import { Container } from "reactstrap";


const Work = () => {
    return (
        <>
        <Container
            className="themed-container" 
            fluid={true}
            style={{
                height: "1000px",
                backgroundColor: "lightgray",
            }}
        >
            <h2
                className="project-title"
            >
                Latest Project :
            </h2>
            <h2
                className="project-video"
            >
                Video
            </h2>
        </Container>
        </>
    )
}


export default Work;
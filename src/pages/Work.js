import React from "react";
import { Container } from "reactstrap";


const Work = () => {
    return (
        <>
        <Container
            className="themed-container" 
            fluid={true}
            style={{
                height: "1500px",
                backgroundColor: "lightgray",
            }}
        >
            <br />
            <br />
            <hr 
                style={{
                    borderColor: "50px solid lightgray"
                }}
            />
            <h2
                className="work-sub"
            >
                Latest Project :
            </h2>
            <h2
                className="project-title"
            >
                FunD
            </h2>
            <h3
                className="project-description"
            >
                A solution for funding expense
            </h3>
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
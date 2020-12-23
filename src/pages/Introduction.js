import React from "react";
import {
    Container
} from "reactstrap";
import "./Profile.css";


const Introduction = () => {
    return (
        <>
        <Container 
            className="themed-container" 
            fluid={true}
            style={{
                height: "875px",
                backgroundColor: "lightgray",
                // justifyContent: "center",
                // alignItems: "center",
                // bottom: "50%",
                // transform: "translateY(50%)"
            }}
        >
            <h1 className="intro">
                Hello
            </h1>
            <h3 className="name-and-title">
                i'm raissa, junior front end developer
            </h3>
            <br />
            <br />
            <hr 
                style={{
                    borderColor: "50px solid lightgray"
                }}
            />
        </Container>
        </>
    )
}


export default Introduction;
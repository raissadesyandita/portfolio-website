import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
import UpArrow from "../images/up-arrow.png";
import Header from "../components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "../components/Footer";
import "./Profile.css";


class Landing extends Component {
    render() {
        return (
            <>
            <BackToTop
                showOnScrollUp
                showAt={0}
                speed={1000}
                easing="easeInOutSine"
            >
                <img 
                    src={UpArrow}
                    alt="back-to-top"
                    style={{
                        height: "50px",
                        width: "50px"
                    }}
                />
                {/* <span
                    style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        fontStyle: "italic"
                    }}
                >
                    Back to Top
                </span> */}
            </BackToTop>
            <Header />
            <Introduction />
            <About />
            <Work />
            <Contact />
            <Footer />
            </>
        )
    }
}


export default Landing;
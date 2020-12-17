import React from "react";
import "./Profile.css";
import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";


const Landing = () => {

    return (
        <>
        <Header />
        <About />
        {/* <Work> */}
        <Contact />
        <Footer />
        </>
    )
}


export default Landing;
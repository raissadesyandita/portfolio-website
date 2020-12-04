import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <>
        <div>
            <span>
                ::before
                ::after
            </span>
            <span>
                ::before
                ::after
            </span>
        </div>
        <hr color="white" />
        <div className="row">
            <h6 className="col-sm">
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
        </div>
        {/* <div className="contact-modal-content">
            <h4 className="no-line">Contact</h4>
            <a href="mailto:raissadesyandita@gmail.com" className="huge-text underline-link js-cursor-follower-active">
            <span>hello@raissadesyandita</span>
            </a>
        </div> */}
        </>
    )
}


export default Footer;
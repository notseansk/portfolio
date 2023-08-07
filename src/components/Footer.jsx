import React from "react";
import "../styles/Footer.scss";
import logoMain from "../assets/logo-light.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-contents">
          <div className="footer-left">
            <a href="#homescreen">
              <img src={logoMain} alt="logo" />
            </a>
          </div>
          <div className="footer-middle">
            <p>
              Copyright &copy; Shaun Pant{" "}
              <i className="fa-solid fa-signature"></i>
            </p>
          </div>
          <div className="footer-right">
            <h5>Thanks for Stopping by.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

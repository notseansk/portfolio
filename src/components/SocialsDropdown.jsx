import React from "react";
import "../styles/SocialsDropdown.scss";
import { motion } from "framer-motion";
const SocialsDropdown = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="socials-dropdown"
    >
      <ul className="dropdown-ul">
        <li className="list-item">
          <i className="fa fa-brands fa-github"></i>
          <a
            href="https://github.com/notseansk"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="list-item">
          <i className="fa fa-brands fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/shaun-pant-624179229/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="list-item">
          <i className="fa fa-brands fa-instagram"></i>
          <a
            href="http://www.instagram.com/notseansk"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li className="list-item">
          <i className="fa-brands fa-square-facebook"></i>
          <a
            href="https://www.facebook.com/notseansk/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SocialsDropdown;

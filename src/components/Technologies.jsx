import React from "react";
import "../styles/Technologies.scss";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="container">
        <div className="technologies-heading">
          <p>Technologies used on following projects.</p>
        </div>
        <div className="technologies-icons">
          <a
            href="https://webplatform.github.io/docs/html/html5/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={html} alt="/" />
            <p>HTML</p>
          </a>
          <a
            href="https://webplatform.github.io/docs/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={css} alt="/" />
            <p>CSS</p>
          </a>
          <a
            href="https://sass-lang.com/documentation/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sass} alt="/" />
            <p>SASS</p>
          </a>
          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
            <img src={tailwind} alt="/" />
            <p>Tailwind CSS</p>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img src={js} alt="/" />
            <p>JavaScript</p>
          </a>
          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
            <img src={react} alt="/" />
            <p>React JS</p>
          </a>

          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
            <img src={firebase} alt="/" />
            <p>Firebase</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

import React, { useEffect, useState } from "react";
import "../styles/Home.scss";
import { motion } from "framer-motion";

import user from "../assets/user.jpg";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const Home = () => {
  const handleScroll = () => {
    const position = window.scrollY;
    setYPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [yPosition, setYPosition] = useState(0);
  return (
    <div className="home" id="homescreen">
      <div
        className="parallax"
        style={{ transform: `translateY(-${yPosition * 0.24}px)` }}
      ></div>
      <div className="container">
        <div className="hero">
          <div
            className="hero-text"
            style={{ transform: `translateY(${yPosition * 1.2}px)` }}
          >
            <motion.h1
              initial={{ x: "-100%", opacity: "0" }}
              whileInView={{ x: "0", opacity: "1" }}
            >
              Hello There,
              <br /> I am Shaun Pant.
            </motion.h1>
            <p>
              I am a{" "}
              <span
                className="typewriter-text"
                style={{ fontWeight: "bold", color: "#002a2e" }}
              >
                <Typewriter
                  words={["Developer.", "Designer.", "Photographer."]}
                  loop={Infinity}
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
              <span style={{ color: "#002a2e" }}>
                <Cursor />
              </span>
            </p>
          </div>
          <Tilt
            // tiltMaxAngleY={30}
            // tiltMaxAngleX={30}
            scale="1.1"
            transitionSpeed={2000}
            perspective="1000"
          >
            {/* glareEnable="true" glareColor="white" */}
            <div className="hero-img">
              <img
                src={user}
                alt="shaun"
                style={{
                  transform: `translateY(-${yPosition * 1.3}px)`,
                  // transform: `translateX(-${yPosition * 4}px)`,
                  // transform: `translate(-${yPosition * 0.5}px,${
                  //   yPosition * 0.89
                  // }px)`,
                }}
              />
            </div>
          </Tilt>
          <a
            href="#aboutme"
            className="arrow-div"
            style={{ display: `${yPosition > 100 ? "none" : "block"}` }}
            // style={{
            //   transform: `translate(-${yPosition * 0.4}px,-${
            //     yPosition * 0.4
            //   }px)`,
            // }}
          >
            .
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

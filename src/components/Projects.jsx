import React from "react";
import "../styles/Projects.scss";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

// import Carousel from "react-elastic-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/image1.jpeg";

const Projects = () => {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 640, itemsToShow: 2 },
  //   { width: 1000, itemsToShow: 3 },
  // ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="projects" id="projectsection">
      <div className="container">
        <div className="carousel">
          <Carousel
            responsive={responsive}
            // enableAutoPlay={true}
            // autoPlaySpeed={3000}
            // breakPoints={breakPoints}
            // disableArrowsOnEnd={false}
          >
            {/* --------first box------------ */}

            <div className="each-image-div ">
              <a
                href="https://react-router-implementation.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-1 "
              >
                <img src={project1} alt="" />
              </a>
              <div className="carousel-text carousel-text-1">
                <p className="legend">This is image one.</p>
              </div>
            </div>
            {/* --------second box------------ */}

            <div className="each-image-div ">
              <a
                href="https://react-tailwind-roan-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-2 "
              >
                <img src={project2} alt="" />
              </a>
              <div className="carousel-text carousel-text-2">
                <p className="legend">This is image two.</p>
              </div>
            </div>
            {/* --------third box------------ */}
            <div className="each-image-div ">
              <a
                href="https://tic-tac-toe-six-blond.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={project3} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image three.</p>
              </div>
            </div>
            {/* --------fourth box------------ */}

            <div className="each-image-div ">
              <a
                href="https://rock-paper-scissor-five-ecru.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={project4} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image four.</p>
              </div>
            </div>
            {/* --------fifth box------------ */}

            <div className="each-image-div ">
              <a
                href="https://bmi-calc-taupe.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={project5} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image five.</p>
              </div>
            </div>
            {/* --------sixth box------------ */}

            <div className="each-image-div ">
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={image1} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image five.</p>
              </div>
            </div>
            {/* --------seventh box------------ */}

            <div className="each-image-div ">
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={image1} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image five.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;

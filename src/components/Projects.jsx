import React from "react";
import "../styles/Projects.scss";
// react-responsive-carousel couldn't customise
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from "react-elastic-carousel";
import image1 from "../assets/image1.jpeg";
// import image2 from "../assets/image2.jpeg";
// import image3 from "../assets/image3.jpeg";

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ];
  return (
    <div className="projects" id="projectsection">
      <div className="container">
        <div className="carousel">
          <Carousel
            // enableAutoPlay={true}
            // autoPlaySpeed={3000}
            breakPoints={breakPoints}
            disableArrowsOnEnd={false}
          >
            {/* --------first box------------ */}

            <div className="each-image-div ">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-1 "
              >
                <img src={image1} alt="" />
              </a>
              <div className="carousel-text carousel-text-1">
                <p className="legend">This is image one.</p>
              </div>
            </div>
            {/* --------second box------------ */}

            <div className="each-image-div ">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-2 "
              >
                <img src={image1} alt="" />
              </a>
              <div className="carousel-text carousel-text-2">
                <p className="legend">This is image two.</p>
              </div>
            </div>
            {/* --------third box------------ */}
            <div className="each-image-div ">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={image1} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image three.</p>
              </div>
            </div>
            {/* --------fourth box------------ */}

            <div className="each-image-div ">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="carousel-image carousel-image-3 "
              >
                <img src={image1} alt="" />
              </a>
              <div className="carousel-text carousel-text-3">
                <p className="legend">This is image four.</p>
              </div>
            </div>
            {/* --------fifth box------------ */}

            <div className="each-image-div ">
              <a
                href="https://www.google.com"
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

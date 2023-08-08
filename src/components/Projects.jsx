import React from "react";
import "../styles/Projects.scss";

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

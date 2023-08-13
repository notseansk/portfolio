import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
import logoMain from "../assets/logo-3.svg";
import "../styles/Navbar.scss";
import SocialsDropdown from "./SocialsDropdown";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("click", handleClicked);
    // window.addEventListener("resize", (e) => {
    //   console.log(e);
    // });
    return () => window.removeEventListener("click", handleClicked);
  }, []);
  const [activeTab, setActiveTab] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
    setActiveTab(e.target.id);
  };
  const handleClicked = (e) => {
    if (e.target.id !== "socials") setClicked(false);
  };

  const resetActive = () => {
    setActiveTab(null);
  };
  return (
    <nav className="nav">
      <div className="container">
        <div onClick={resetActive} className="logo-div">
          <a href="#homescreen">
            <img src={logoMain} alt="logo" />
          </a>
        </div>
        <main className={menuIconClicked ? "active-menu" : null}>
          <a
            onClick={handleClick}
            id="about"
            className={
              activeTab === "about"
                ? "nav-links active-tab"
                : "nav-links nav-underline "
            }
            href="#aboutme"
          >
            About Me
          </a>
          <a
            onClick={handleClick}
            id="projects"
            className={
              activeTab === "projects"
                ? "nav-links  active-tab"
                : "nav-links nav-underline "
            }
            href="#projectsection"
          >
            Projects
          </a>
          <div
            className={
              activeTab === "socials"
                ? "nav-links  active-tab"
                : "nav-links nav-underline "
            }
          >
            <a
              className="nav-socials"
              onClick={handleClick}
              id="socials"
              href="#socialssection"
            >
              Socials
            </a>
            {activeTab === "socials" && clicked === true ? (
              <SocialsDropdown />
            ) : null}
          </div>

          <a
            className={
              activeTab === "socials" && clicked && menuIconClicked
                ? "push-down nav-links nav-email"
                : "nav-links nav-email"
            }
            href="mailto:shaunpant@gmail.com"
          >
            Email
          </a>
        </main>
        <div
          onClick={() => {
            setMenuIconClicked(!menuIconClicked);
          }}
          className="menu-icon"
        >
          <i
            className={
              menuIconClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Toaster } from "react-hot-toast";
import "../styles/App.css";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technologies from "./Technologies";
import { useEffect, useState } from "react";
function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const handlePageLoad = () => {
    setPageLoaded(true);
  };
  useEffect(() => {
    window.onload = () => {
      handlePageLoad();
    };
  }, []);
  return (
    <div className="App">
      {/* --------this doesnot work---------- */}
      {/* <div style={pageLoaded && { display: "none" }} id="preloader"></div> */}
      {/* --------but this works---------- */}
      <div style={pageLoaded ? { display: "none" } : null} id="preloader"></div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

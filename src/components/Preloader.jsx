import React from "react";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const handlePageLoad = () => {
    setPageLoaded(!pageLoaded);
  };
  useEffect(() => {
    // document.ready = () => {
    //   handlePageLoad();
    // };
    window.onload = () => {
      setTimeout(() => {
        handlePageLoad();
      }, 1000);
    };
  }, []);
  return (
    <div>
      {/* --------this doesnot work---------- */}
      {/* <div style={pageLoaded && { display: "none" }} id="preloader"></div> */}
      {/* --------but this works---------- */}
      {/* <div style={pageLoaded ? { display: "none" } : null} id="preloader"></div> */}
      {/* --------new--------- */}
      {pageLoaded ? null : <div className="preloader"></div>}
    </div>
  );
};

export default Preloader;

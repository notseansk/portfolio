import React from "react";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [pageLoaded, setPageLoaded] = useState();
  // const handlePageLoad = () => {
  //   setPageLoaded(!pageLoaded);
  // };
  useEffect(() => {
    // document.readyState = () => {
    //   handlePageLoad();
    // };

    window.onload = () => {
      loadNow();
    };
    // document.addEventListener("DOMContentLoaded", function () {
    //   setInterval(() => {
    //     setPageLoaded(true);
    //   }, 1000);
    // });
    // document.onreadystatechange = function () {
    //   if (document.readyState == "complete") {
    //     setPageLoaded(true);
    //   }
    // };
  }, []);
  function loadNow() {
    setTimeout(() => {
      setPageLoaded(true);
      console.log("inside loadnow");
    }, 500);
  }

  return (
    <div>
      {/* --------this doesnot work---------- */}
      {/* <div style={pageLoaded && { display: "none" }} id="preloader"></div> */}
      {/* --------but this works---------- */}
      {/* {setInterval(() => {
        setPageLoaded(true);
      }, 500)} */}
      {/* <div
        style={pageLoaded ? { display: "none" } : null}
        className="preloader"
      ></div> */}
      {/* --------Couldn't make onload work--------- */}
      {/* --------settled for code below--------- */}
      <div
        onLoad={setTimeout(() => loadNow(), 900)}
        style={pageLoaded === true ? { opacity: "0", zIndex: "-1" } : null}
        className="preloader"
      ></div>
    </div>
  );
};

export default Preloader;

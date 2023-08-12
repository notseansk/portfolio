import React from "react";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const handlePageLoad = () => {
    setPageLoaded(!pageLoaded);
  };
  useEffect(() => {
    // document.readyState = () => {
    //   handlePageLoad();
    // };
    window.onload = () => {
      loadNow();
    };
  }, []);
  const loadNow = () => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 500);
  };

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
      {/* --------new--------- */}

      <div
        style={pageLoaded ? { opacity: "0", zIndex: "-1" } : null}
        className="preloader"
      ></div>
    </div>
  );
};

export default Preloader;

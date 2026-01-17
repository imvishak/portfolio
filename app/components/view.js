"use client";

import React, { useState, useEffect } from "react";
import PageMain from "./main";
import PageAbout from "./about";
import PageService from "./services";
import PageContact from "./contact";
import PageExp from "./exp";
import PageHeader from "./header";
import PageFooter from "./footer";

function ComponentUIView() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setViews(true);
    }, 12000);
  }, []);

  function setViewClicked(hash) {
    try {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn("Element not found for hash:", hash);
      }
    } catch (error) {
      console.error("Error during setViewClicked:", error);
    }
  }

  return (
    <>
      <PageHeader view={setViewClicked} />
      <div id="main" className="wrapper-section">
        <PageMain view={setViewClicked} />
      </div>
      <div id="about" className="wrapper-section">
        <PageAbout className={views === true ? "" : "hidden"} />
      </div>
      <div id="service" className="wrapper-section">
        <PageService className={views === true ? "" : "hidden"} />
      </div>
      <div id="experience" className="wrapper-section">
        <PageExp className={views === true ? "" : "hidden"} />
      </div>
      <div id="contact" className="wrapper-section">
        <PageContact className={views === true ? "" : "hidden"} />
      </div>
      <PageFooter />
    </>
  );
}

export default ComponentUIView;

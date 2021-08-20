import React from "react";
import "../stylesheets/Home.css";

function Home() {
  return (
    <>
      <div id="home" className="home">
        <div className="home-text">
          <h1 className="title">I am Zawwar Ahmed</h1>
          <p className="role">Front-end Developer</p>
          <a href="/#" className="resume">
            View Resume
          </a>
        <div className="sidebar"></div>
        </div>
        <h1 className="watermark">web developer</h1>
      </div>
    </>
  );
}

export default Home;

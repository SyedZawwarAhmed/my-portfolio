import React from "react";
import "../stylesheets/About.css";
import htmlLogo from "../assets/images/html-logo.png";
import cssLogo from "../assets/images/css-logo.png";
import jsLogo from "../assets/images/javascript-logo.png";
import reactLogo from "../assets/images/react-logo.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-text">
        <h1 className="about-title">About me</h1>
        <p className="about-para">
          I am a front-end web developer having skills in HTML, CSS, JavaScript,
          and React. I am currently a student of Computer Science and I aim to
          become a Full-Stack web developer. I am very pro-efficient at
          converting designs to websites but I create my own designs as well. I
          have made multiple projects which include landing pages, website
          integrating with an API, and some applications including a lot of
          logic.
        </p>
      </div>

      <div className="skills">
        <h1 className="skills-title">My skills</h1>
        <div className="logos">
          <img src={htmlLogo} alt="" className="skill-logo" />
          <img src={cssLogo} alt="" className="skill-logo" />
          <img src={jsLogo} alt="" className="skill-logo" />
          <img src={reactLogo} alt="" className="skill-logo" />
        </div>
      </div>
    </div>
  );
}

export default About;

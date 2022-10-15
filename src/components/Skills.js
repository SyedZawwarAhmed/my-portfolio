import React from "react";
import { useInView } from "react-intersection-observer";
import htmlLogo from "../assets/images/logos/html-logo.png";
import cssLogo from "../assets/images/logos/css-logo.png";
import jsLogo from "../assets/images/logos/javascript-logo.png";
import reactLogo from "../assets/images/logos/react-logo.png";
import nodejsLogo from "../assets/images/logos/nodejs-logo.png";
import expressjsLogo from "../assets/images/logos/expressjs-logo.png";
import mongodbLogo from "../assets/images/logos/mongodb-logo.png";
import tsLogo from "../assets/images/logos/typescript-logo.png";
import "../stylesheets/Skills.css";

function Skills() {
  const logos = document.getElementsByClassName("logo-container");
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: 0.2,
    triggerOnce: true
  });
  const animation = () => {
    let i = 0;
    let interval = setInterval(() => {
      logos[i].classList.add("logo-animation");
      i++;
      if (i === logos.length) {
        clearInterval(interval);
      }
    }, 75);
  };
  if (inView) {
    animation();
  }
  return (
    <div ref={ref} className="skills">
      <h1
        className={`section-title ${
          inView ? "skills-title skills-title-animation" : "skills-title"
        }`}
      >
        My skills
      </h1>
      <div className="logos">
        <div className="logo-container">
          <img src={htmlLogo} alt="" className="skill-logo" />
          <span>HTML</span>
        </div>
        <div className="logo-container">
          <img src={cssLogo} alt="" className="skill-logo" />
          <span>CSS</span>
        </div>
        <div className="logo-container">
          <img src={jsLogo} alt="" className="skill-logo" />
          <span>JavaScript</span>
        </div>
        <div className="logo-container">
          <img src={tsLogo} alt="" className="skill-logo" />
          <span>TypeScript</span>
        </div>  
        <div className="logo-container">
          <img src={reactLogo} alt="" className="skill-logo" />
          <span>React</span>
        </div>
        <div className="logo-container">
          <img src={nodejsLogo} alt="" className="skill-logo" />
          <span>Nodejs</span>
        </div>
        <div className="logo-container">
          <img src={expressjsLogo} alt="" className="skill-logo" />
          <span>Expressjs</span>
        </div>
        <div className="logo-container">
          <img src={mongodbLogo} alt="" className="skill-logo" />
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;

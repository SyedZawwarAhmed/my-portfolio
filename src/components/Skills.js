import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import htmlLogo from "../assets/images/logos/html-logo.png";
import cssLogo from "../assets/images/logos/css-logo.png";
import jsLogo from "../assets/images/logos/javascript-logo.png";
import reactLogo from "../assets/images/logos/react-logo.png";
import "../stylesheets/Skills.css";

function Skills() {
  const images = document.getElementsByClassName("skill-logo");
  const imageRef = useRef(null);
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: 0.5,
    triggerOnce: true,
  });
  if (inView) {
      let i = 0;
    let interval = setInterval(() => {
        images[i].classList.add("logo-animation");
        i++;
        if (i === images.length) {
            clearInterval(interval);
        }
    }, 250);
  }
  return (
    <div ref={ref} className="skills">
      <h1
        className={
          inView ? "skills-title skills-title-animation" : "skills-title"
        }
      >
        My skills
      </h1>
      <div className="logos">
        <img ref={imageRef} src={htmlLogo} alt="" className="skill-logo" />
        <img ref={imageRef} src={cssLogo} alt="" className="skill-logo" />
        <img ref={imageRef} src={jsLogo} alt="" className="skill-logo" />
        <img ref={imageRef} src={reactLogo} alt="" className="skill-logo" />
      </div>
    </div>
  );
}

export default Skills;

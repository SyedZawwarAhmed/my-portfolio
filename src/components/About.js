import React from "react";
import { useInView } from "react-intersection-observer";
import "../stylesheets/About.css";

function About() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <div id="about" className="about">
        <div ref={ref} className="about-text">
          <h1
            className={`section-title ${inView ? "about-title title-animation" : "about-title"}`}
          >
            About me
          </h1>
          <p className={inView ? "about-para para-animation" : "about-para"}>
            I am a Web developer having mainly focused on the MERN stack. I am
            currently a student of Computer Science. I am very pro-efficient at
            converting designs to websites and I create my own designs as well.
            I have made multiple projects which include web applications,
            landing pages, website integrating with an API, and some
            applications including a lot of logic.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

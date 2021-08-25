import React from "react";
import "../stylesheets/Footer.css"
import {useInView} from "react-intersection-observer";

function Footer() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
    triggerOnce: true
  });
  return (
    <>
      <div ref={ref} id="footer" className={inView ? "footer footer-animation" : "footer"}>
          <ul className="social-links">
              <li><a href="https://github.com/SyedZawwarAhmed" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a></li>
              <li><a href="https://www.linkedin.com/in/syed-zawwar-ahmed-b7345a1b8/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin  fa-2x"></i></a></li>
              <li><a href="mailto:zawwar.ahmed12@gmail.com"><i className="fa fa-envelope  fa-2x"></i></a></li>
          </ul>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          <p className="copyright">© Zawwar Ahmed. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;

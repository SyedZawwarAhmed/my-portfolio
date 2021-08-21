import React from "react";
import "../stylesheets/Footer.css"

function Footer() {
  return (
    <>
      <div id="footer" className="footer">
          <ul className="social-links">
              <li><a href="https://github.com/SyedZawwarAhmed" target="_blank"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/syed-zawwar-ahmed-b7345a1b8/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="mailto:zawwar.ahmed12@gmail.com"><i className="fa fa-envelope"></i></a></li>
          </ul>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
      </div>
    </>
  );
}

export default Footer;

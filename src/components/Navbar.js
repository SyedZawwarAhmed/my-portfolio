import React from "react";
import "../stylesheets/Navbar.css"
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <span className="nav-logo">Zawwar Ahmed</span>
          <ul className="links">
            <li><a href="#home" className="link">HOME</a></li>
            <li><a href="#portfolio" className="link">PORTFOLIO</a></li>
            <li><a href="#about" className="link">ABOUT</a></li>
            <li><a href="#contact" className="link">CONTACT</a></li>
          </ul>
          <Hamburger />
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import "../stylesheets/Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
          <ul className="links">
            <li><a href="#home" className="link">HOME</a></li>
            <li><a href="#about" className="link">ABOUT</a></li>
            <li><a href="#contact" className="link">CONTACT</a></li>
            <li><a href="#portfolio" className="link">PORTFOLIO</a></li>
          </ul>
      </div>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import "../stylesheets/Hamburger.css";

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className={isMenuOpen ? "hamburger-menu open" : "hamburger-menu"}>
        <div className="mask" onClick={toggleMenu}></div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
        </div>
        <div className="menu">
          <ul className="hamburger-links">
            <li>
              <a href="#home" className="hamburger-link" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hamburger-link" onClick={toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#about" className="hamburger-link" onClick={toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact" className="hamburger-link" onClick={toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hamburger;

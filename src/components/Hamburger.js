import React from "react";
import "../stylesheets/Hamburger.css";

function Hamburger() {
  return (
    <>
      <div className="hamburger"></div>
      <div className="menu">
        <ul className="hamburger-links">
          <li>
            <a href="#home" className="hamburger-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hamburger-link">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#about" className="hamburger-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" className="hamburger-link">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hamburger;

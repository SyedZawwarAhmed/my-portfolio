import React from "react";
import "../stylesheets/PortfolioItem.css";

function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <div className="img-container container">
        <img src={props.img} alt="" className="project-img" />
      </div>
      <div className="text-container container">
        <h1 className="project-title">{props.title}</h1>
        <p className="project-description">{props.description}</p>
        <div className="site-links">
          <a href={props.siteLink} className="view-site" target="_blank" rel="noreferrer">
            View Site
          </a>
          <a href={props.codeLink} className="view-code" target="_blank">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

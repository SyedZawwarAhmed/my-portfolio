import React from "react";
import PortfolioItem from "./PortfolioItem";
import { PROJECTINFORMATION } from "./ProjectInformation";
import "../stylesheets/Portfolio.css"

function Portfolio() {
  const projectInformation = PROJECTINFORMATION;

  const portfolioItems = projectInformation.map(item => <PortfolioItem
    img={item.image}
    title={item.title}
    description={item.description}
  />)
  return (
    <>
      <div id="portfolio" className="portfolio">
        <h1 className="portfolio-title">Projects that I've made</h1>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    </>
  );
}

export default Portfolio;

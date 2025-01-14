import React from "react";
import PortfolioItem from "./PortfolioItem";
import "../stylesheets/Portfolio.css";
import { useInView } from "react-intersection-observer";
import { PROJECT_INFORMATION } from "../constants/ProjectInformation";

function Portfolio() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: 0,
    triggerOnce: true,
  });

  const portfolioItems = PROJECT_INFORMATION.map((item) => (
    <PortfolioItem
      key={item.id}
      img={item.image}
      title={item.title}
      description={item.description}
      siteLink={item.siteLink}
      codeLink={item.codeLink}
    />
  ));
  return (
    <>
      <div id="portfolio" className="portfolio">
        <h1
          ref={ref}
          className={`section-title ${
            inView
              ? "portfolio-title portfolio-title-animation"
              : "portfolio-title"
          }`}
        >
          Projects I've made
        </h1>
        <div className="portfolio-items">{portfolioItems}</div>
      </div>
    </>
  );
}

export default Portfolio;

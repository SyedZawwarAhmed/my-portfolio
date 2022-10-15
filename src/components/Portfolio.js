import React from "react";
import PortfolioItem from "./PortfolioItem";
import { PROJECTINFORMATION } from "./ProjectInformation";
import "../stylesheets/Portfolio.css";
import { useInView } from "react-intersection-observer";

function Portfolio() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: 0,
    triggerOnce: true
  });
  const projectInformation = PROJECTINFORMATION;

  const portfolioItems = projectInformation.map((item) => (
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
        <h1  ref={ref}
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

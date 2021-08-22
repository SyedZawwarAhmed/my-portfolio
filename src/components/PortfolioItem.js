import React, { useState, useEffect, useRef } from "react";
import "../stylesheets/PortfolioItem.css";

function PortfolioItem(props) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: "100px 0px 100px 0px",
    threshold: 0.85,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div ref={containerRef} className="portfolio-item">
      <div 
        className={
          isVisible
            ? "container-animation container img-container"
            : "container img-container"
        }
      >
        <img src={props.img} alt="" className="project-img" />
      </div>
      <div className={
          isVisible
            ? "container-animation container text-container"
            : "container text-container"
        }>
        <h1 className="project-title">{props.title}</h1>
        <p className="project-description">{props.description}</p>
        <div className="site-links">
          <a
            href={props.siteLink}
            className="view-site"
            target="_blank"
            rel="noreferrer"
          >
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

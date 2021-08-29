import React from "react";
import "../stylesheets/PortfolioItem.css";
import { useInView } from "react-intersection-observer";

function PortfolioItem(props) {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px 0px",
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="portfolio-item">
      <div
        className={
          inView
            ? "container-animation container img-container"
            : "container img-container"
        }
      >
        <img src={props.img} alt="" className="project-img" />
      </div>
      <div
        className={
          inView
            ? "container-animation container text-container"
            : "container text-container"
        }
      >
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
          <a
            href={props.codeLink}
            className="view-code"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

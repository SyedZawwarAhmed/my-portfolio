import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function Main() {
  const [navBarTheme, setNavbarTheme] = useState("dark");
  const { ref, inView, entry } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });
  if (inView) {
    console.log(entry.target);
  }
  return (
    <div className="main">
      <Navbar />
      <Home />
      <div ref={ref} className="portfolio-div">
        <Portfolio />
      </div>
      <div className="contact-div">
        <About />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;

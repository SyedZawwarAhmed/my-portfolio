import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;

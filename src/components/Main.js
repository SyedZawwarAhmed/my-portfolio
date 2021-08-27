import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;

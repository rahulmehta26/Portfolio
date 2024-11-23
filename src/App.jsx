/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Parallax from "./component/Parallax";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Cursor from "./component/Cursor";
import About from "./component/About";

const App = () => {
  return (
    <div className="relative" >

      <Cursor />

      <section id="Home" className="flex-col flex h-screen ">
        <Navbar />
        <HeroSection />
      </section>
      <section id="Services" className=" h-screen ">
        <Parallax type="services" />
      </section>
      <section className=" h-screen ">
        <Services />
      </section>
      <section id="Portfolio" className=" h-screen ">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="About" className=" h-screen ">
        <About />
      </section>
      <section id="Contact" className=" h-screen ">
        <Contact />
      </section>
    </div>
  );
};

export default App;

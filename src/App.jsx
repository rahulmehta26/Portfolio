/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Herosection from "./pages/Herosection";
import Aboutsection from "./pages/Aboutsection";
import Contactsection from "./pages/Contactsection";
import Projectsection from "./pages/Projectsection";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothWheel: true,
    });

    const rafId = requestAnimationFrame((time) => {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      raf(time);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Herosection />} />
            <Route path="about" element={<Aboutsection />} />
            <Route path="contact" element={<Contactsection />} />
            <Route path="projects" element={<Projectsection />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

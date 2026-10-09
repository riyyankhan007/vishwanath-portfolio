import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isCadGridActive, setIsCadGridActive] = useState(false);

  const toggleCadGrid = () => {
    setIsCadGridActive((prev) => !prev);
  };

  return (
    <div className={`portfolio-app-root ${isCadGridActive ? 'cad-grid-active' : ''}`}>
      {/* Background CAD Blueprint Overlay (toggled via button in Navbar) */}
      {isCadGridActive && (
        <div className="global-cad-overlay" aria-hidden="true">
          <div className="cad-overlay-grid"></div>
          <div className="cad-overlay-hud">
            <span>[CAD BLUEPRINT INSPECTION MODE ACTIVE // 10MM RESOLUTION]</span>
          </div>
        </div>
      )}

      {/* Primary Fixed Navigation with Scroll Progress Beam */}
      <Navbar toggleCadGrid={toggleCadGrid} isCadGridActive={isCadGridActive} />

      {/* Main Content Assembly */}
      <main id="main-content">
        {/* A. Hero Section with Real Photo & Layering */}
        <Hero />

        {/* B. Professional Introduction & Engineering Philosophy */}
        <About />

        {/* C. Engineering Expertise & Technical Tooling */}
        <Skills />

        {/* D. Selected Engineering Projects (Vector CAD Schematics - No AI Images) */}
        <Projects />

        {/* E. Professional Experience Chronology */}
        <Experience />

        {/* F. Education & Academic Background */}
        <Education />

        {/* H. Contact Section */}
        <Contact />
      </main>

      {/* I. Technical Footer */}
      <Footer />
    </div>
  );
}

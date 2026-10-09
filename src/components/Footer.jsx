import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        {/* Top Footer Bar */}
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <div className="footer-brand-title">
              <span className="brand-dot"></span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="footer-brand-desc">
              Mechanical Engineer & Quality Assurance Engineer at VE Commercial Vehicles Ltd. 
              (Volvo Group & Eicher Motors Joint Venture).
            </p>
          </div>

          <div className="footer-nav-block">
            <span className="footer-nav-title">DIRECT SITEMAP</span>
            <ul className="footer-nav-links">
              <li><a href="#hero">00 // Overview</a></li>
              <li><a href="#about">01 // Philosophy</a></li>
              <li><a href="#skills">02 // Expertise</a></li>
              <li><a href="#projects">03 // Projects</a></li>
              <li><a href="#experience">04 // Experience</a></li>
              <li><a href="#education">05 // Education</a></li>
              <li><a href="#contact">06 // Contact</a></li>
            </ul>
          </div>

          <div className="footer-action-block">
            <button
              type="button"
              className="btn-back-to-top"
              onClick={scrollToTop}
              title="Return to opening screen"
            >
              <span>RETURN TO TOP</span>
              <span className="top-arrow">▲</span>
            </button>
            <div className="footer-coord-stamp">
              <span>COORD: 12.9716° N, 77.5946° E</span>
              <span>BANGALORE // IN</span>
            </div>
          </div>
        </div>

        {/* Industrial Divider */}
        <div className="technical-divider dark" style={{ margin: '2rem 0' }}></div>

        {/* Bottom Metadata */}
        <div className="footer-bottom-row">
          <div className="footer-legal">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Vishwanath C V. All engineering rights reserved.
            </p>
          </div>

          <div className="footer-iso-badge">
            <span className="iso-code">DOC.CODE: VCV-PORTFOLIO-2026</span>
            <span className="iso-rev">REVISION: V2.4-AUTHENTICATED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ toggleCadGrid, isCadGridActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll Progress Beam */}
      <motion.div className="scroll-progress-beam" style={{ scaleX }} />

      <div className="container navbar-inner">
        {/* Brand Mark */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-symbol">
            <span className="brand-dot"></span>
            <span className="brand-code">VCV</span>
          </div>
          <div className="brand-meta">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-sub">MECH. ENG // QA VECV</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const target = link.href.replace('#', '');
              const isActive = activeSection === target;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    {isActive && <motion.span layoutId="navActivePip" className="nav-active-pip" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions Bar */}
        <div className="navbar-actions">
          {/* Blueprint Mode Toggle */}
          <button
            type="button"
            className={`btn-cad-toggle ${isCadGridActive ? 'active' : ''}`}
            onClick={toggleCadGrid}
            title="Toggle CAD millimeter blueprint overlay"
            aria-label="Toggle CAD grid overlay"
          >
            <span className="cad-grid-icon">⊞</span>
            <span className="cad-toggle-label">CAD GRID</span>
          </button>

          {/* Resume Download */}
          <a
            href={personalInfo.resumePath}
            download="Vishwanath_CV_Resume.pdf"
            className="btn btn-secondary-dark btn-nav-resume"
            title="Download verified resume (PDF)"
          >
            <span>RESUME</span>
            <span className="badge-pdf">PDF</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open-1' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open-2' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open-3' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-meta">
          <span className="mobile-sys-label">NAVIGATION // VISHWANATH C V</span>
          <span className="mobile-loc-label">BANGALORE, IN</span>
        </div>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-nav-bullet">›</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <a
            href={personalInfo.resumePath}
            download="Vishwanath_CV_Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Download Verified Resume (PDF)
          </a>
        </div>
      </div>
    </header>
  );
}

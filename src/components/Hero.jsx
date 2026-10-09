import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, heroStats } from '../data/portfolioData';
import PortraitPlaceholder from './PortraitPlaceholder';

export default function Hero() {
  return (
    <section id="hero" className="section section-dark hero-section">
      {/* Layer 0: Faint Architectural Background Typographic Watermark */}
      <div className="hero-watermark-layer" aria-hidden="true">
        <span className="watermark-text">VOLVO 9600</span>
      </div>

      {/* Layer 1: Background Engineering Blueprint Markings */}
      <div className="hero-blueprint-lines" aria-hidden="true">
        <div className="iso-grid-mark iso-mark-tl">DWG NO: VCV-9600-ME-01</div>
        <div className="iso-grid-mark iso-mark-tr">SCALE: 1:1 [METRIC]</div>
        <div className="iso-grid-mark iso-mark-bl">TOL: ±0.05 MM // ISO 2768-m</div>
        <div className="iso-grid-mark iso-mark-br">REV: 2026.04 // QA-AUTHENTICATED</div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Text & Engineering Credentials with Motion */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Engineering Verification Badge */}
          <motion.div 
            className="hero-status-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="live-pulse"></span>
            <span className="status-code">QA ENGINEER // VE COMMERCIAL VEHICLES</span>
          </motion.div>

          {/* Engineer Name in Oversized Confident Typography */}
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            VISHWANATH <span className="hero-name-highlight">C V</span>
          </motion.h1>

          {/* Professional Title */}
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Mechanical Engineer & Quality Assurance Engineer
          </motion.h2>

          {/* Affiliation / Role Subtitle */}
          <motion.div 
            className="hero-affiliation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="affil-volvo">Volvo Group</span>
            <span className="affil-divider">&</span>
            <span className="affil-eicher">Eicher Motors Joint Venture</span>
            <span className="affil-bracket">[VECV]</span>
          </motion.div>

          {/* Editorial Excerpt from PDF */}
          <motion.p 
            className="hero-bio"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            Specializing in automotive incoming quality inspection, 15m multi-axle coach platforms, 
            Product Development (PD) drawing compliance, mating parts fitment trials, and 
            systematic 8D / CAPA root cause problem-solving.
          </motion.p>

          {/* Verified Quote from PDF */}
          <motion.blockquote 
            className="hero-quote"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="quote-mark">“</span>
            <span>
              As a mechanical graduate, areas like machine design, total quality management, and FEM interest me. 
              I am focused on delivering uncompromising manufacturing precision and expanding engineering horizons.
            </span>
          </motion.blockquote>

          {/* Calls to Action */}
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a href="#projects" className="btn btn-primary hero-btn-main">
              <span>EXPLORE MY WORK</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary-dark hero-btn-sub">
              <span>CONTACT ME</span>
            </a>
            <a 
              href={personalInfo.resumePath} 
              download="Vishwanath_CV_Resume.pdf"
              className="btn btn-ghost hero-btn-cv"
              title="Download verified resume PDF"
            >
              <span>RESUME (PDF)</span>
            </a>
          </motion.div>

          {/* Technical Metrics Strip with Stagger */}
          <motion.div 
            className="hero-stats-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {heroStats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="hero-stat-card"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <span className="hero-stat-val">{stat.value}</span>
                <span className="hero-stat-lbl">{stat.label}</span>
                <span className="hero-stat-unit">{stat.unit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Portrait with Multi-Layer Framing */}
        <div className="hero-media">
          <PortraitPlaceholder className="hero-portrait-card" />
        </div>
      </div>

      {/* Restrained Scroll Indicator with Bounce */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <a href="#about" className="scroll-link" aria-label="Scroll to introduction section">
          <span className="scroll-text">SYSTEM FLOW // SCROLL</span>
          <div className="scroll-line-wrapper">
            <span className="scroll-dot"></span>
          </div>
          <span className="scroll-coord">▼ [Y: +100%]</span>
        </a>
      </div>
    </section>
  );
}

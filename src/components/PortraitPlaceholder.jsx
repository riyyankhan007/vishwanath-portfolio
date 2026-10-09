import React from 'react';
import { motion } from 'framer-motion';
import engineerPortrait from '../assets/engineer-portrait.png';

export default function PortraitPlaceholder({ className = '' }) {
  return (
    <div className={`portrait-container ${className}`}>
      {/* Precision CAD Frame & Coordinate Marks with Layering */}
      <motion.div 
        className="portrait-cad-frame"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
      >
        {/* Top CAD Header Bar */}
        <div className="cad-header-bar">
          <span className="cad-header-tag">
            <span className="cad-live-indicator"></span>
            SYS.ID: VCV-ENG-2023 // VERIFIED PHOTOGRAPH
          </span>
          <span className="cad-header-coord">BANGALORE // VOLVO JV FACILITY</span>
        </div>

        {/* Corner Precision Alignment Markers */}
        <div className="cad-corner cad-corner-tl" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 0,20 L 0,0 L 20,0" fill="none" stroke="#00AEEF" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="cad-corner cad-corner-tr" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 0,0 L 20,0 L 20,20" fill="none" stroke="#00AEEF" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="cad-corner cad-corner-bl" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 0,0 L 0,20 L 20,20" fill="none" stroke="#00AEEF" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="cad-corner cad-corner-br" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 20,0 L 20,20 L 0,20" fill="none" stroke="#00AEEF" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Blueprint Dimension Lines */}
        <div className="cad-dimension cad-dim-left" aria-hidden="true">
          <span className="dim-line"></span>
          <span className="dim-text">H: 1024 mm [REF]</span>
          <span className="dim-line"></span>
        </div>
        <div className="cad-dimension cad-dim-bottom" aria-hidden="true">
          <span className="dim-line"></span>
          <span className="dim-text">W: 580 mm // METRIC 1:1</span>
          <span className="dim-line"></span>
        </div>

        {/* Rotating Coordinate Crosshair */}
        <div className="cad-crosshair" aria-hidden="true">
          <div className="crosshair-center"></div>
        </div>

        {/* Layer 1: Ambient Cyan Glow Backplate */}
        <div className="portrait-backdrop-glow" aria-hidden="true"></div>

        {/* Layer 2: Main Image Frame */}
        <div className="portrait-image-wrapper">
          <div className="portrait-grid-underlay" aria-hidden="true"></div>

          {/* Authentic Engineer Photograph */}
          <img
            src={engineerPortrait}
            alt="Vishwanath C V, Mechanical & Quality Assurance Engineer at VE Commercial Vehicles (Volvo Group JV)"
            className="portrait-img real-photo"
            loading="eager"
            width="580"
            height="1024"
          />

          {/* Subtle Scanning Laser Line Animation */}
          <div className="cad-laser-scanner" aria-hidden="true"></div>
        </div>

        {/* Layer 3: Overlapping Floating Badges (Layering of Elements) */}
        <motion.div 
          className="floating-badge badge-top-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="badge-pulse-dot"></span>
          <span className="badge-text">VOLVO GROUP & EICHER JV</span>
        </motion.div>

        <motion.div 
          className="floating-badge badge-bottom-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="badge-icon">📐</span>
          <span className="badge-text">QUALITY ASSURANCE // 9600 COACH</span>
        </motion.div>

        <motion.div 
          className="floating-badge badge-bottom-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="badge-text">8.4 / 10 CGPA // BIT MECHANICAL</span>
        </motion.div>

        {/* Bottom Technical Spec Bar */}
        <div className="cad-spec-bar">
          <div className="cad-spec-item">
            <span className="spec-label">ENGINEER:</span>
            <span className="spec-value">VISHWANATH C V</span>
          </div>
          <div className="cad-spec-item">
            <span className="spec-label">DEPARTMENT:</span>
            <span className="spec-value">QUALITY ASSURANCE (QA)</span>
          </div>
          <div className="cad-spec-item">
            <span className="spec-label">VERIFICATION:</span>
            <span className="spec-value highlight">AUTHENTICATED</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

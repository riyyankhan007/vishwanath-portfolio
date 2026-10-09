import React from 'react';
import { motion } from 'framer-motion';
import { engineeringPillars } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section section-ivory about-section">
      <div className="container">
        {/* Section Header with Motion */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag section-tag-light">
            <span className="dot"></span>
            <span>01 // PROFESSIONAL INTRODUCTION</span>
          </div>
          <h2 className="section-title">
            Precision Quality as an Engineering Discipline.
          </h2>
          <p className="section-desc">
            Bridging mechanical design principles with shop-floor manufacturing rigor. 
            At VE Commercial Vehicles, engineering quality is not merely post-production inspection—it is 
            the proactive prevention of tolerance drift, mating interference, and assembly failure.
          </p>
        </motion.div>

        {/* Editorial Layout: Core Philosophy with Layering */}
        <div className="about-editorial-grid">
          {/* Main Statement Card with Motion */}
          <motion.div 
            className="about-manifesto-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="manifesto-badge">ENGINEERING CORE</div>
            <h3 className="manifesto-headline">
              “Defects must be eliminated at the drawing table and the supplier dock, not discovered on the highway.”
            </h3>
            <p className="manifesto-body">
              Graduating from Bangalore Institute of Technology with a First Class Distinction (CGPA 8.4/10) in Mechanical Engineering, 
              my engineering foundation is anchored in Machine Design, Finite Element Method (FEM), and Total Quality Management (TQM).
            </p>
            <p className="manifesto-body">
              Working directly on high-specification commercial vehicle platforms like the Volvo 9600 15-meter coach series, 
              I interface between Product Development (PD) CAD drawings, tier-supplier manufacturing capabilities, and 
              physical assembly fitment trials.
            </p>

            <div className="manifesto-meta-grid">
              <div className="meta-block">
                <span className="meta-num">2023–PRES</span>
                <span className="meta-lbl">VECV QA Engineer</span>
              </div>
              <div className="meta-block">
                <span className="meta-num">15 METERS</span>
                <span className="meta-lbl">Coach Platform Scope</span>
              </div>
              <div className="meta-block">
                <span className="meta-num">8.4 / 10</span>
                <span className="meta-lbl">BIT B.E. CGPA</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Technical Specs Card with Motion */}
          <motion.div 
            className="about-technical-brief"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="brief-header">
              <span className="brief-title">FIELD COMPETENCIES OVERVIEW</span>
              <span className="brief-id">SPEC-QA-2026</span>
            </div>
            <ul className="brief-list">
              <li className="brief-item">
                <div className="brief-item-head">
                  <span className="brief-key">DISCIPLINE</span>
                  <span className="brief-val">Automotive QA & Mechanical Engineering</span>
                </div>
                <p className="brief-item-sub">Verification of purchased mechanical & trim sub-assemblies.</p>
              </li>
              <li className="brief-item">
                <div className="brief-item-head">
                  <span className="brief-key">PRIMARY PLATFORM</span>
                  <span className="brief-val">Volvo 9600 Multi-Axle Series</span>
                </div>
                <p className="brief-item-sub">Slx and Seater-Sleeper variants (Prawaas 4.0 & 5.0 projects).</p>
              </li>
              <li className="brief-item">
                <div className="brief-item-head">
                  <span className="brief-key">CORE TOOLS</span>
                  <span className="brief-val">8D, CAPA, RCA, 7 QC Tools, SolidWorks</span>
                </div>
                <p className="brief-item-sub">Root cause elimination, fishbone analysis, and CAD verification.</p>
              </li>
              <li className="brief-item">
                <div className="brief-item-head">
                  <span className="brief-key">LOCATION</span>
                  <span className="brief-val">Bangalore, Karnataka, India</span>
                </div>
                <p className="brief-item-sub">Active in automotive engineering hub.</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* The 3 Engineering Pillars with Staggered Scroll Motion */}
        <div className="pillars-wrapper">
          <motion.div 
            className="pillars-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="pillars-tag">CORE PRACTICE PILLARS</span>
            <h3 className="pillars-heading">Three Pillars of Engineering Execution</h3>
          </motion.div>

          <div className="pillars-grid">
            {engineeringPillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.id} 
                className="pillar-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25 } }}
              >
                <div className="pillar-top">
                  <span className="pillar-number">{pillar.number}</span>
                  <span className="pillar-indicator"></span>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-subtitle">{pillar.subtitle}</p>
                <p className="pillar-desc">{pillar.description}</p>
                
                <div className="pillar-highlights">
                  {pillar.highlights.map((h, i) => (
                    <span key={i} className="pillar-pill">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

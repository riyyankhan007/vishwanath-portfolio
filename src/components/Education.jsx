import React from 'react';
import { motion } from 'framer-motion';
import { educationHistory, languages, interests } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section section-dark education-section">
      <div className="container">
        {/* Section Header with Motion */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag section-tag-dark">
            <span className="dot"></span>
            <span>05 // ACADEMIC FOUNDATION & BACKGROUND</span>
          </div>
          <h2 className="section-title">
            Mechanical Engineering Degree & Academic Rigor.
          </h2>
          <p className="section-desc">
            Rigorous mechanical engineering coursework from Bangalore Institute of Technology, 
            backed by a strong foundation in physical sciences and multilingual communication proficiency.
          </p>
        </motion.div>

        {/* Education Cards Grid with Motion */}
        <div className="education-grid">
          {educationHistory.map((edu, idx) => (
            <motion.div 
              key={idx} 
              className={`edu-card ${idx === 0 ? 'edu-card-primary' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="edu-card-top">
                <span className="edu-period-tag">{edu.duration}</span>
                <span className="edu-metric-badge">{edu.metric}</span>
              </div>

              <h3 className="edu-degree">{edu.qualification}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-location">📍 {edu.location}</p>

              <p className="edu-desc">{edu.description}</p>

              {idx === 0 && (
                <div className="edu-key-disciplines">
                  <span className="disciplines-label">PRIMARY ENGINEERING FOCUS:</span>
                  <div className="disciplines-pills">
                    <span className="tech-chip dark">Machine Design</span>
                    <span className="tech-chip dark">Finite Element Method (FEM)</span>
                    <span className="tech-chip dark">Total Quality Management (TQM)</span>
                    <span className="tech-chip dark">Kinematics</span>
                    <span className="tech-chip dark">Manufacturing Systems</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Supporting Attributes: Languages & Engineering Interests */}
        <div className="attributes-split-grid">
          {/* Languages */}
          <motion.div 
            className="attributes-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="attr-card-head">
              <span className="attr-icon">🌐</span>
              <h4 className="attr-title">Languages & Working Proficiency</h4>
            </div>
            <p className="attr-desc">
              Strong multilingual communication enabling seamless coordination across diverse factory teams and pan-Indian supplier bases.
            </p>
            <div className="languages-grid">
              {languages.map((lang, lIdx) => (
                <div key={lIdx} className="language-item">
                  <div className="lang-name-row">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-status-pip"></span>
                  </div>
                  <span className="lang-prof">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests & Engineering Passions */}
          <motion.div 
            className="attributes-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="attr-card-head">
              <span className="attr-icon">⚙️</span>
              <h4 className="attr-title">Technical Interests & Pursuits</h4>
            </div>
            <p className="attr-desc">
              Extending mechanical curiosity beyond factory walls—from precision CAD drafting to strategic competitive sports.
            </p>
            <div className="interests-grid">
              {interests.map((item, iIdx) => (
                <div key={iIdx} className="interest-item">
                  <span className="interest-dot"></span>
                  <div className="interest-text-wrap">
                    <span className="interest-name">{item.name}</span>
                    <span className="interest-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

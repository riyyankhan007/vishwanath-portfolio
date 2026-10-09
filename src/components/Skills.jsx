import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="section section-dark skills-section">
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
            <span>02 // ENGINEERING EXPERTISE</span>
          </div>
          <h2 className="section-title">
            Verified Technical Competencies & Tooling.
          </h2>
          <p className="section-desc">
            Engineered around international automotive standards and mechanical fundamentals. 
            No arbitrary percentage bars—each competency represents real-world application on the manufacturing floor and design lab.
          </p>
        </motion.div>

        {/* Category Selector Tabs with Motion */}
        <div className="skills-tabs-container">
          <div className="skills-tabs" role="tablist">
            {skillCategories.map((cat, idx) => (
              <button
                key={cat.category}
                type="button"
                role="tab"
                aria-selected={activeCategoryIndex === idx}
                className={`skill-tab-btn ${activeCategoryIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveCategoryIndex(idx)}
              >
                <span className="tab-index">0{idx + 1}</span>
                <span className="tab-title">{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Display with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategoryIndex}
            className="active-category-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="panel-header">
              <div className="panel-header-left">
                <span className="panel-category-tag">CATEGORY 0{activeCategoryIndex + 1}</span>
                <h3 className="panel-category-title">{skillCategories[activeCategoryIndex].category}</h3>
              </div>
              <p className="panel-category-desc">{skillCategories[activeCategoryIndex].description}</p>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategoryIndex].skills.map((skill, sIdx) => (
                <motion.div 
                  key={skill.name} 
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: sIdx * 0.05 }}
                  whileHover={{ y: -4, borderColor: '#00AEEF', transition: { duration: 0.2 } }}
                >
                  <div className="skill-card-top">
                    <span className="skill-code">SKL-{activeCategoryIndex + 1}{sIdx + 1}</span>
                    <span className="skill-tag">{skill.tag}</span>
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-status-line">
                    <span className="skill-status-dot"></span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Full Matrix Quick View */}
        <motion.div 
          className="all-skills-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="summary-header">
            <span className="summary-title">COMPREHENSIVE COMPETENCY MATRIX</span>
            <span className="summary-total">24 VERIFIED COMPETENCIES</span>
          </div>
          <div className="summary-tags-cluster">
            {skillCategories.flatMap(c => c.skills).map((s, i) => (
              <span key={i} className="matrix-badge">
                <span className="matrix-dot"></span>
                <span className="matrix-name">{s.name}</span>
                <span className="matrix-tag">[{s.tag}]</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

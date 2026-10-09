import React from 'react';
import { motion } from 'framer-motion';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section section-ivory experience-section">
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
            <span>04 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="section-title">
            Chronology of Automotive Engineering & Quality Assurance.
          </h2>
          <p className="section-desc">
            Demonstrated engineering tenure at VE Commercial Vehicles (VECV)—a joint venture between Volvo Group 
            and Eicher Motors. Every role and responsibility corresponds directly to verified shop-floor practice.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {workExperience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-entry"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Left Timeline Marker & Period */}
              <div className="timeline-aside">
                <div className="timeline-period-badge">
                  <span className="badge-period">{exp.period}</span>
                  <span className="badge-type">{exp.type}</span>
                </div>
                <div className="timeline-node">
                  <div className="node-outer">
                    <div className="node-inner"></div>
                  </div>
                  <div className="timeline-connector-line"></div>
                </div>
              </div>

              {/* Right Content Card with Layering */}
              <div className="timeline-content-card">
                <div className="card-top-header">
                  <div className="header-titles">
                    <span className="exp-status-tag">{exp.status}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                    <p className="exp-affiliation">{exp.companyAffiliation}</p>
                  </div>
                  <div className="header-location">
                    <span className="loc-pin">📍</span>
                    <span className="loc-text">{exp.location}</span>
                  </div>
                </div>

                <div className="responsibilities-block">
                  <h5 className="responsibilities-title">VERIFIED CORE RESPONSIBILITIES:</h5>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="responsibility-item">
                        <span className="resp-bullet">›</span>
                        <span className="resp-text">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-card-footer">
                  <div className="exp-footer-tags">
                    {idx === 0 ? (
                      <>
                        <span className="tech-chip">Incoming QA</span>
                        <span className="tech-chip">8D Problem Solving</span>
                        <span className="tech-chip">CAPA Monitoring</span>
                        <span className="tech-chip">Supplier Development</span>
                        <span className="tech-chip">QIR Documentation</span>
                        <span className="tech-chip">Volvo 9600 Platform</span>
                      </>
                    ) : (
                      <>
                        <span className="tech-chip">KANBAN System</span>
                        <span className="tech-chip">5S-Culture</span>
                        <span className="tech-chip">Kaizen</span>
                        <span className="tech-chip">Hardware Components Study</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

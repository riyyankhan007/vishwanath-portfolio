import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section section-ivory contact-section">
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
            <span>06 // DIRECT CONTACT & INQUIRY</span>
          </div>
          <h2 className="section-title">
            Initiate Engineering Dialogue.
          </h2>
          <p className="section-desc">
            Available for discussions regarding automotive quality engineering, commercial vehicle platforms, 
            supplier quality leadership, and precision mechanical design opportunities.
          </p>
        </motion.div>

        <div className="contact-main-grid">
          {/* Left Column: Verified Channels & Direct Actions with Motion */}
          <motion.div 
            className="contact-channels-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="channels-header">
              <span className="channels-status-pill">
                <span className="status-live-dot"></span>
                ACTIVE COMMUNICATIONS HUB
              </span>
              <h3 className="channels-title">Verified Contact Channels</h3>
              <p className="channels-subtitle">
                Direct professional touchpoints extracted and verified from the official engineering dossier.
              </p>
            </div>

            <div className="channel-entries">
              {/* Email Entry */}
              <div className="channel-box">
                <div className="channel-box-icon">✉</div>
                <div className="channel-box-content">
                  <span className="channel-label">PRIMARY EMAIL ADDRESS</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-value">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="channel-box-actions">
                  <button
                    type="button"
                    className="channel-action-btn"
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    title="Copy email to clipboard"
                  >
                    {copiedType === 'email' ? 'COPIED ✓' : 'COPY'}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="channel-action-btn primary"
                    title="Send email directly"
                  >
                    MAIL ↗
                  </a>
                </div>
              </div>

              {/* Phone Entry */}
              <div className="channel-box">
                <div className="channel-box-icon">📞</div>
                <div className="channel-box-content">
                  <span className="channel-label">TELEPHONE / MOBILE</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="channel-box-actions">
                  <button
                    type="button"
                    className="channel-action-btn"
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    title="Copy phone to clipboard"
                  >
                    {copiedType === 'phone' ? 'COPIED ✓' : 'COPY'}
                  </button>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="channel-action-btn primary"
                    title="Direct call"
                  >
                    CALL ↗
                  </a>
                </div>
              </div>

              {/* Location Entry */}
              <div className="channel-box">
                <div className="channel-box-icon">📍</div>
                <div className="channel-box-content">
                  <span className="channel-label">BASE LOCATION & TIMEZONE</span>
                  <span className="channel-value">{personalInfo.location}</span>
                  <span className="channel-sub-info">Timezone: IST (UTC +5:30)</span>
                </div>
                <div className="channel-box-actions">
                  <span className="loc-status-tag">BANGALORE</span>
                </div>
              </div>
            </div>

            {/* Direct Resume Download Action */}
            <div className="resume-download-banner">
              <div className="resume-banner-text">
                <span className="banner-title">Complete Verified Resume</span>
                <span className="banner-sub">Original PDF Dossier from VE Commercial Vehicles & BIT</span>
              </div>
              <a
                href={personalInfo.resumePath}
                download="Vishwanath_CV_Resume.pdf"
                className="btn btn-primary"
              >
                <span>DOWNLOAD RESUME (PDF)</span>
                <span className="btn-arrow">↓</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Message Form with Motion */}
          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-card-head">
              <span className="form-code">FORM // DISPATCH_INQUIRY</span>
              <h3 className="form-title">Send Engineering Inquiry</h3>
            </div>

            {formSubmitted ? (
              <div className="form-success-state">
                <div className="success-icon">✓</div>
                <h4 className="success-title">Message Registered Successfully</h4>
                <p className="success-desc">
                  Thank you for reaching out, <strong>{formState.name}</strong>. 
                  Your inquiry regarding <em>"{formState.subject || 'Engineering Consultation'}"</em> has been recorded.
                  I will review and respond directly to <strong>{formState.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({ name: '', email: '', organization: '', subject: '', message: '' });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="inquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      FULL NAME <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Marcus Lindqvist"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      WORK EMAIL <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="organization" className="form-label">
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      id="organization"
                      type="text"
                      placeholder="e.g. OEM, Tier-1 Supplier, or Engineering Firm"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      SUBJECT / TOPIC <span className="req">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="e.g. QA Engineering Role / Commercial Vehicles"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    PROJECT DETAILS OR INQUIRY <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Detail your engineering requirements, technical questions, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>DISPATCH MESSAGE</span>
                    <span className="btn-arrow">↗</span>
                  </button>
                  <span className="form-confidentiality-note">
                    🔒 All technical discussions handled with professional confidentiality.
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

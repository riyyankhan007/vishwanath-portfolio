import React, { useEffect } from 'react';
import Volvo9600SlxSchematic from './schematics/Volvo9600SlxSchematic';
import Volvo9600SleeperSchematic from './schematics/Volvo9600SleeperSchematic';
import PowerWindowSchematic from './schematics/PowerWindowSchematic';
import BiomimicrySchematic from './schematics/BiomimicrySchematic';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const renderSchematic = (type) => {
    switch (type) {
      case 'slx':
        return <Volvo9600SlxSchematic />;
      case 'sleeper':
        return <Volvo9600SleeperSchematic />;
      case 'power-window':
        return <PowerWindowSchematic />;
      case 'biomimicry':
        return <BiomimicrySchematic />;
      default:
        return <Volvo9600SlxSchematic />;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-left">
            <span className="modal-status-dot"></span>
            <span className="modal-dwg-code">CAD BLUEPRINT DOSSIER // {project.id.toUpperCase()}</span>
            <span className="modal-category-tag">{project.categoryLabel}</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close project dossier"
          >
            ✕ CLOSE [ESC]
          </button>
        </div>

        {/* Modal Vector CAD Schematic Visual */}
        <div className="modal-visual-wrapper">
          {renderSchematic(project.schematicType)}
          <div className="modal-image-caption">
            <span className="caption-tag">PRECISION 2D/3D CAD BLUEPRINT SCHEMATIC</span>
            <span className="caption-note">{project.vehiclePlatform || project.institution}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-content-body">
          {/* Title & Metadata Strip */}
          <div className="modal-headline-block">
            <div className="modal-meta-row">
              <span className="modal-timeline">{project.timeline}</span>
              <span className="modal-role-badge">{project.role}</span>
            </div>
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <p className="modal-summary">{project.summary}</p>
          </div>

          {/* Detailed Engineering Breakdown */}
          <div className="modal-sections-grid">
            {/* The Engineering Challenge */}
            <div className="modal-info-card">
              <div className="card-badge">01 // THE ENGINEERING CHALLENGE</div>
              <h4 className="card-heading">Problem Statement & Scope</h4>
              <p className="card-text">{project.challenge}</p>
            </div>

            {/* Engineer's Direct Contribution */}
            <div className="modal-info-card">
              <div className="card-badge">02 // VERIFIED TASKS & CONTRIBUTIONS</div>
              <h4 className="card-heading">Key Execution Responsibilities</h4>
              <ul className="modal-task-list">
                {project.responsibilities.map((task, idx) => (
                  <li key={idx} className="modal-task-item">
                    <span className="task-bullet">▸</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Highlights & Methodology */}
          <div className="modal-deep-dive">
            <div className="deep-dive-col">
              <h4 className="deep-dive-title">Technical Highlights & Outcomes</h4>
              <ul className="highlights-list">
                {project.technicalHighlights.map((hl, i) => (
                  <li key={i} className="highlight-item">
                    <span className="hl-check">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="deep-dive-col">
              <h4 className="deep-dive-title">Engineering Standards & Tools Applied</h4>
              <div className="modal-tools-cluster">
                {project.toolsUsed.map((tool, i) => (
                  <span key={i} className="tool-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer-bar">
          <span className="footer-auth-note">
            ENGINEERING SCHEMATIC SOURCE: VERIFIED RESUME DOSSIER
          </span>
          <button type="button" className="btn btn-secondary-dark" onClick={onClose}>
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import Volvo9600SlxSchematic from './schematics/Volvo9600SlxSchematic';
import Volvo9600SleeperSchematic from './schematics/Volvo9600SleeperSchematic';
import PowerWindowSchematic from './schematics/PowerWindowSchematic';
import BiomimicrySchematic from './schematics/BiomimicrySchematic';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'commercial-vehicle', label: 'Commercial Vehicles & Coaches (2)' },
    { id: 'mechanical-design', label: 'Mechanical Design & Prototyping (1)' },
    { id: 'research-mechanics', label: 'Bio-Mechanics & Fluid Systems (1)' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const renderSchematicThumbnail = (type) => {
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
    <section id="projects" className="section section-ivory projects-section">
      <div className="container">
        {/* Section Header with Motion */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag section-tag-light">
            <span className="dot"></span>
            <span>03 // SELECTED ENGINEERING PROJECTS</span>
          </div>
          <h2 className="section-title">
            Engineering Projects & Technical Schematics.
          </h2>
          <p className="section-desc">
            Direct commercial vehicle quality initiatives at VE Commercial Vehicles (Volvo Group JV) and 
            machine design prototypes at Bangalore Institute of Technology. 
            Presented via verified CAD vector schematics, dimensional tolerances, and empirical outcomes.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          <div className="filter-buttons-wrapper" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="filter-count-note">
            SHOWING {filteredProjects.length} OF {projectsData.length} PROJECTS // NO AI IMAGES
          </span>
        </div>

        {/* Projects Grid with Motion Stagger */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0;

              return (
                <motion.article 
                  key={project.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`project-card ${isFeatured ? 'project-card-featured' : ''}`}
                >
                  {/* Vector Schematic Media Container */}
                  <div 
                    className="project-schematic-wrap" 
                    onClick={() => setActiveModalProject(project)}
                    title="Click to inspect full CAD blueprint dossier"
                  >
                    <div className="schematic-viewport">
                      {renderSchematicThumbnail(project.schematicType)}
                    </div>
                    
                    <div className="media-cad-watermark">
                      <span className="cad-watermark-code">CAD // {project.id.toUpperCase()}</span>
                      <span className="cad-watermark-scale">VECTOR 1:1</span>
                    </div>

                    <div className="media-hover-overlay">
                      <span className="hover-inspect-btn">
                        ⊞ OPEN CAD BLUEPRINT DOSSIER
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="project-body">
                    <div className="project-meta-strip">
                      <span className="project-category-badge">{project.categoryLabel}</span>
                      <span className="project-timeline">{project.timeline}</span>
                    </div>

                    <h3 className="project-title" onClick={() => setActiveModalProject(project)}>
                      {project.title}
                    </h3>

                    <div className="project-role-tag">
                      <span className="role-lbl">ROLE:</span>
                      <span className="role-name">{project.role}</span>
                    </div>

                    {project.vehiclePlatform && (
                      <div className="project-platform-note">
                        <span className="platform-icon">⬢</span>
                        <span>{project.vehiclePlatform}</span>
                      </div>
                    )}

                    <p className="project-summary-text">{project.summary}</p>

                    {/* Bullet Highlights from CV */}
                    <div className="project-tasks-summary">
                      <span className="tasks-summary-title">VERIFIED RESPONSIBILITIES:</span>
                      <ul className="project-task-bullets">
                        {project.responsibilities.slice(0, 2).map((r, i) => (
                          <li key={i} className="task-bullet-item">
                            <span className="task-bullet-arrow">▸</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools cluster */}
                    <div className="project-tools-wrap">
                      {project.toolsUsed.map((tool, tIdx) => (
                        <span key={tIdx} className="tech-chip">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="project-action-row">
                      <button
                        type="button"
                        className="btn btn-secondary project-detail-btn"
                        onClick={() => setActiveModalProject(project)}
                      >
                        <span>INSPECT TECHNICAL SPECIFICATIONS</span>
                        <span className="btn-arrow">→</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Deep-dive Technical Dossier Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

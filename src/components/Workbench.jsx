import React, { useState } from 'react';
import { qualityToolbox } from '../data/portfolioData';

export default function Workbench() {
  const [selectedToolId, setSelectedToolId] = useState('8d');
  const [activeStep, setActiveStep] = useState(0);

  // Sample interactive fitment validation test state
  const [fitmentState, setFitmentState] = useState({
    partNumber: 'VECV-9600-MT-402',
    drawingSpec: '35.50 mm ± 0.20 mm',
    measuredVal: 35.58,
    isCompliant: true,
  });

  const activeTool = qualityToolbox.find((t) => t.id === selectedToolId) || qualityToolbox[0];

  const handleMeasureChange = (e) => {
    const val = parseFloat(e.target.value);
    const compliant = val >= 35.30 && val <= 35.70;
    setFitmentState((prev) => ({
      ...prev,
      measuredVal: val,
      isCompliant: compliant,
    }));
  };

  return (
    <section id="workbench" className="section section-dark workbench-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag section-tag-dark">
            <span className="dot"></span>
            <span>04 // QUALITY ENGINEERING WORKBENCH</span>
          </div>
          <h2 className="section-title">
            Methodology & Root Cause Analysis in Practice.
          </h2>
          <p className="section-desc">
            An interactive breakdown of standard operating procedures deployed at VE Commercial Vehicles—from 
            initial incoming rejection to cross-functional 8D resolution and physical fitment verification.
          </p>
        </div>

        {/* Workbench Container */}
        <div className="workbench-console">
          {/* Top Console Bar */}
          <div className="console-top-bar">
            <div className="console-title-wrap">
              <span className="console-live-light"></span>
              <span className="console-label">ENGINEERING PROTOCOL EXPLORER</span>
            </div>
            <div className="console-selector-tabs">
              {qualityToolbox.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  className={`console-tab ${selectedToolId === tool.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedToolId(tool.id);
                    setActiveStep(0);
                  }}
                >
                  <span className="tool-code">{tool.code}</span>
                  <span className="tool-tab-name">{tool.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Console Main Content */}
          <div className="console-body">
            {/* Left Column: Methodology Description & Steps */}
            <div className="console-protocol-details">
              <div className="protocol-meta">
                <span className="protocol-badge">{activeTool.code}</span>
                <h3 className="protocol-title">{activeTool.name}</h3>
              </div>
              <p className="protocol-purpose">{activeTool.purpose}</p>

              {/* Interactive Step Sequence */}
              <div className="protocol-steps-tracker">
                <div className="tracker-header">
                  <span className="tracker-label">SEQUENTIAL EXECUTION STEPS:</span>
                  <span className="tracker-progress">
                    STEP {activeStep + 1} OF {activeTool.steps.length}
                  </span>
                </div>

                <div className="tracker-list">
                  {activeTool.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`tracker-step-item ${activeStep === idx ? 'current' : ''} ${idx < activeStep ? 'completed' : ''}`}
                      onClick={() => setActiveStep(idx)}
                    >
                      <span className="step-num">
                        {idx < activeStep ? '✓' : `0${idx + 1}`}
                      </span>
                      <span className="step-desc">{step}</span>
                      {activeStep === idx && <span className="step-active-tag">ACTIVE FOCUS</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Shop-Floor Simulation Card */}
            <div className="console-simulator-panel">
              <div className="sim-panel-header">
                <span className="sim-header-title">LIVE SHOP-FLOOR VALIDATION WORKFLOW</span>
                <span className="sim-status-code">SYS: LIVE_INSPECTION</span>
              </div>

              {/* Sub-view 1: Fitment Trial Simulator */}
              {selectedToolId === 'fitment' ? (
                <div className="fitment-sim-box">
                  <div className="sim-spec-row">
                    <span className="sim-key">PART IDENTIFIER:</span>
                    <span className="sim-val">{fitmentState.partNumber} (Volvo 9600 Mating Flange)</span>
                  </div>
                  <div className="sim-spec-row">
                    <span className="sim-key">PD DRAWING NOMINAL:</span>
                    <span className="sim-val highlight">{fitmentState.drawingSpec}</span>
                  </div>

                  {/* Interactive Measurement Slider */}
                  <div className="sim-slider-group">
                    <label className="sim-slider-label">
                      <span>VERNIER CALIPER TEST READING:</span>
                      <strong className={`sim-measured-num ${fitmentState.isCompliant ? 'pass' : 'fail'}`}>
                        {fitmentState.measuredVal.toFixed(2)} mm
                      </strong>
                    </label>
                    <input
                      type="range"
                      min="35.00"
                      max="36.00"
                      step="0.02"
                      value={fitmentState.measuredVal}
                      onChange={handleMeasureChange}
                      className="sim-range-input"
                    />
                    <div className="slider-limits">
                      <span>LSL: 35.30 mm</span>
                      <span>NOM: 35.50 mm</span>
                      <span>USL: 35.70 mm</span>
                    </div>
                  </div>

                  {/* Compliance Status Display */}
                  <div className={`sim-verdict-box ${fitmentState.isCompliant ? 'verdict-pass' : 'verdict-fail'}`}>
                    <div className="verdict-icon">{fitmentState.isCompliant ? '✓' : '⚠️'}</div>
                    <div className="verdict-info">
                      <h4 className="verdict-title">
                        {fitmentState.isCompliant ? 'TOLERANCE COMPLIANT — ACCEPTED' : 'NON-CONFORMANCE FLAGGED — REJECTION REQUIRED'}
                      </h4>
                      <p className="verdict-text">
                        {fitmentState.isCompliant
                          ? 'Component satisfies Product Development (PD) drawing tolerances. Approved for coach chassis mating assembly.'
                          : 'Dimension out of tolerance band. Initiating Quarantine, raising formal QIR rejection report, and notifying supplier.'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Sub-view 2: Quality Incident Report (QIR) Dispatch Simulator */
                <div className="qir-sim-box">
                  <div className="qir-ticket-header">
                    <div className="ticket-id">QIR-2026-VECV-0842</div>
                    <div className="ticket-priority">SEVERITY: CRITICAL-A</div>
                  </div>

                  <div className="ticket-body">
                    <div className="ticket-field">
                      <span className="ticket-label">ASSOCIATED VEHICLE:</span>
                      <span className="ticket-data">Volvo 9600 15m Multi-Axle Coach</span>
                    </div>
                    <div className="ticket-field">
                      <span className="ticket-label">INVESTIGATION PROTOCOL:</span>
                      <span className="ticket-data">{activeTool.name}</span>
                    </div>
                    <div className="ticket-field">
                      <span className="ticket-label">INSPECTION FOCUS:</span>
                      <span className="ticket-data">
                        {activeTool.steps[activeStep]}
                      </span>
                    </div>
                    <div className="ticket-field">
                      <span className="ticket-label">RESPONSIBLE QA ENGINEER:</span>
                      <span className="ticket-data">Vishwanath C V (Quality Assurance)</span>
                    </div>
                  </div>

                  <div className="ticket-footer">
                    <div className="ticket-stamp">VECV QA APPROVED</div>
                    <span className="ticket-audit-date">LOGGED: BANGALORE DOCK</span>
                  </div>
                </div>
              )}

              {/* Technical Note */}
              <div className="sim-footer-note">
                <span className="sim-note-icon">💡</span>
                <span>
                  Ensuring zero non-conforming parts enter serial production through rapid containment and robust 8D closure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

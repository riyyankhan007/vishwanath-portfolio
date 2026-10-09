import React from 'react';

export default function Volvo9600SleeperSchematic() {
  return (
    <div className="cad-schematic-container">
      <svg
        viewBox="0 0 800 450"
        className="cad-schematic-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="sleeper-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 174, 239, 0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="sleeper-subgrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 174, 239, 0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="450" fill="#171E22" />
        <rect width="800" height="450" fill="url(#sleeper-subgrid)" />
        <rect width="800" height="450" fill="url(#sleeper-grid)" />

        {/* CAD Header Block */}
        <g fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="9">
          <text x="24" y="28">DWG NO: VCV-9600-FIT-002</text>
          <text x="24" y="42">SCALE: 1:10 [EXPLODED ASSEMBLY]</text>
          <text x="460" y="28">PROJECT: PRAWAAS 5.0 (SUPPLIER QA)</text>
          <text x="460" y="42">SYSTEM: MATING PARTS & FITMENT TRIALS</text>
        </g>
        <line x1="24" y1="52" x2="776" y2="52" stroke="#2C363C" strokeWidth="1" />

        {/* GD&T Tolerance Feature Control Frames */}
        <g transform="translate(60, 80)" fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          <rect x="0" y="0" width="160" height="28" fill="#20272B" stroke="#00AEEF" strokeWidth="1" />
          <line x1="32" y1="0" x2="32" y2="28" stroke="#00AEEF" strokeWidth="1" />
          <line x1="88" y1="0" x2="88" y2="28" stroke="#00AEEF" strokeWidth="1" />
          <line x1="124" y1="0" x2="124" y2="28" stroke="#00AEEF" strokeWidth="1" />
          <text x="16" y="18" fill="#00AEEF" textAnchor="middle" fontSize="12">⌖</text>
          <text x="60" y="18" fill="#F4F1E8" textAnchor="middle">Ø 0.15 Ⓜ</text>
          <text x="106" y="18" fill="#00AEEF" textAnchor="middle">A</text>
          <text x="142" y="18" fill="#00AEEF" textAnchor="middle">B</text>
          <text x="0" y="40" fill="#CBD5DB">CHASSIS MOUNTING DATUM</text>
        </g>

        {/* Central Exploded Mating Parts Assembly View */}
        {/* Component A: Modular Chassis Cross-Member */}
        <g className="comp-chassis">
          <rect x="180" y="280" width="440" height="50" rx="4" fill="#20272B" stroke="#F4F1E8" strokeWidth="2" />
          {/* Mating Slots */}
          <rect x="250" y="275" width="24" height="15" fill="#171E22" stroke="#00AEEF" strokeWidth="1.5" />
          <rect x="520" y="275" width="24" height="15" fill="#171E22" stroke="#00AEEF" strokeWidth="1.5" />
          {/* Fastener Centers */}
          <line x1="262" y1="265" x2="262" y2="340" stroke="#00AEEF" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="532" y1="265" x2="532" y2="340" stroke="#00AEEF" strokeWidth="1" strokeDasharray="4 2" />
          <text x="400" y="310" fill="#CBD5DB" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">
            CHASSIS STRUCTURAL CROSS-MEMBER [DATUM B]
          </text>
        </g>

        {/* Component B: Seater-Sleeper Upper Modular Berth Bracket (Exploded Upward) */}
        <g className="comp-bracket" transform="translate(0, -65)">
          {/* Upper Berth Sub-Frame */}
          <path
            d="M 220 230 L 220 180 Q 220 165 235 165 L 565 165 Q 580 165 580 180 L 580 230 L 545 230 L 545 195 L 255 195 L 255 230 Z"
            fill="rgba(0, 174, 239, 0.15)"
            stroke="#00AEEF"
            strokeWidth="2"
          />
          {/* Alignment Dowel Pins */}
          <rect x="256" y="228" width="12" height="24" fill="#F4F1E8" stroke="#00AEEF" strokeWidth="1" />
          <rect x="526" y="228" width="12" height="24" fill="#F4F1E8" stroke="#00AEEF" strokeWidth="1" />
          <text x="400" y="185" fill="#F4F1E8" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" fontWeight="bold">
            SEATER-SLEEPER MODULAR BERTH FRAME [MATING PART]
          </text>
        </g>

        {/* Fitment Clearance Tolerance Callout */}
        <g stroke="#00AEEF" strokeWidth="1">
          <line x1="250" y1="205" x2="250" y2="245" />
          <line x1="274" y1="205" x2="274" y2="245" />
          <line x1="235" y1="225" x2="285" y2="225" />
        </g>
        <text x="210" y="210" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="end">
          GAP: 0.20 mm ± 0.05
        </text>

        {/* Vernier Inspection Dimension Tag */}
        <g transform="translate(480, 195)" fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          <rect x="0" y="0" width="220" height="48" fill="#20272B" stroke="#00AEEF" strokeWidth="1" rx="2" />
          <text x="10" y="18" fill="#00AEEF" fontWeight="bold">FITMENT TRIAL POINT #4</text>
          <text x="10" y="32" fill="#F4F1E8">NOMINAL: 35.50 mm</text>
          <text x="10" y="44" fill="#33BFF2">TOLERANCE: ± 0.20 mm [PASS]</text>
        </g>

        {/* Inspection Verification Checkmark Callout */}
        <g className="cad-callout" stroke="#00AEEF" strokeWidth="1" fill="none">
          <circle cx="532" cy="180" r="3" fill="#00AEEF" />
          <polyline points="532,180 560,150 710,150" />
          <text x="565" y="145" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="bold">
            [VERIFIED] NO INTERFERENCE DETECTED ON BERTH MATING PINS
          </text>
        </g>

        {/* Bottom Title Block */}
        <g transform="translate(560, 395)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
          <rect x="0" y="0" width="216" height="42" fill="#20272B" stroke="#00AEEF" strokeWidth="1" />
          <line x1="0" y1="21" x2="216" y2="21" stroke="#2C363C" strokeWidth="1" />
          <line x1="108" y1="0" x2="108" y2="42" stroke="#2C363C" strokeWidth="1" />
          <text x="8" y="14" fill="#82949F">VALIDATION:</text>
          <text x="8" y="34" fill="#F4F1E8" fontWeight="bold">MATING PARTS</text>
          <text x="116" y="14" fill="#82949F">PD DRAWING:</text>
          <text x="116" y="34" fill="#00AEEF" fontWeight="bold">100% COMPLIANT</text>
        </g>
      </svg>
    </div>
  );
}

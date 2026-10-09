import React from 'react';

export default function BiomimicrySchematic() {
  return (
    <div className="cad-schematic-container">
      <svg
        viewBox="0 0 800 450"
        className="cad-schematic-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="bio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 174, 239, 0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="bio-subgrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 174, 239, 0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="450" fill="#171E22" />
        <rect width="800" height="450" fill="url(#bio-subgrid)" />
        <rect width="800" height="450" fill="url(#bio-grid)" />

        {/* CAD Header Block */}
        <g fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="9">
          <text x="24" y="28">DWG NO: BIT-RES-BIO-004</text>
          <text x="24" y="42">SYSTEM: EXPANDABLE AUXETIC FILTRATION</text>
          <text x="440" y="28">PROJECT: BIOMIMICRY OF ANGIOPLASTY</text>
          <text x="440" y="42">FOCUS: WASTEWATER & SEWAGE TREATMENT</text>
        </g>
        <line x1="24" y1="52" x2="776" y2="52" stroke="#2C363C" strokeWidth="1" />

        {/* Main Fluid Conduit (Pipe Outer Boundaries) */}
        <rect x="80" y="160" width="640" height="160" rx="4" fill="rgba(32, 39, 43, 0.6)" stroke="#38454D" strokeWidth="2" />
        <line x1="80" y1="240" x2="720" y2="240" stroke="#00AEEF" strokeWidth="1" strokeDasharray="6 3" />
        <text x="90" y="150" fill="#82949F" fontFamily="JetBrains Mono, monospace" fontSize="8">
          6" MUNICIPAL SEWAGE CONDUIT
        </text>

        {/* Fluid Inflow Streamlines */}
        <g stroke="#00AEEF" strokeWidth="1.5" opacity="0.75" fill="none">
          <path d="M 80 180 Q 200 185 280 200" />
          <path d="M 80 200 Q 200 205 280 215" />
          <path d="M 80 240 L 280 240" strokeWidth="2" />
          <path d="M 80 280 Q 200 275 280 265" />
          <path d="M 80 300 Q 200 295 280 280" />
        </g>
        <text x="130" y="235" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          SEWAGE INFLOW ➔
        </text>

        {/* Expandable Stent-Mesh Unit (Diamond Auxetic Matrix) */}
        <g transform="translate(280, 165)">
          <rect x="0" y="0" width="240" height="150" rx="3" fill="rgba(0, 174, 239, 0.08)" stroke="#00AEEF" strokeWidth="2" strokeDasharray="3 3" />

          {/* Auxetic Diamond Cells Pattern */}
          <path
            d="M 20 20 L 50 40 L 80 20 L 110 40 L 140 20 L 170 40 L 200 20 L 220 35
               M 20 60 L 50 80 L 80 60 L 110 80 L 140 60 L 170 80 L 200 60 L 220 75
               M 20 100 L 50 120 L 80 100 L 110 120 L 140 100 L 170 120 L 200 100 L 220 115
               M 20 140 L 50 140 L 80 140 L 110 140 L 140 140 L 170 140 L 200 140
               M 50 20 L 20 40 L 50 60 L 20 80 L 50 100 L 20 120
               M 110 20 L 80 40 L 110 60 L 80 80 L 110 100 L 80 120
               M 170 20 L 140 40 L 170 60 L 140 80 L 170 100 L 140 120"
            fill="none"
            stroke="#F4F1E8"
            strokeWidth="1.8"
          />

          {/* Radial Expansion Vectors */}
          <g stroke="#00AEEF" strokeWidth="2">
            <line x1="120" y1="50" x2="120" y2="15" />
            <polygon points="120,10 116,20 124,20" fill="#00AEEF" />
            <line x1="120" y1="100" x2="120" y2="135" />
            <polygon points="120,140 116,130 124,130" fill="#00AEEF" />
          </g>
          <text x="120" y="78" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8.5" textAnchor="middle" fontWeight="bold">
            RADIAL EXPANSION ΔR
          </text>
        </g>

        {/* Filtered Effluent Outflow */}
        <g stroke="#33BFF2" strokeWidth="1.5" opacity="0.9" fill="none">
          <path d="M 520 200 Q 600 205 720 210" />
          <path d="M 520 240 L 720 240" strokeWidth="2" />
          <path d="M 520 280 Q 600 275 720 270" />
        </g>
        <text x="590" y="235" fill="#33BFF2" fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          FILTERED EFFLUENT ➔
        </text>

        {/* Technical Callout */}
        <g className="cad-callout" stroke="#00AEEF" strokeWidth="1" fill="none">
          <circle cx="400" cy="165" r="3" fill="#00AEEF" />
          <polyline points="400,165 430,110 620,110" />
          <text x="435" y="106" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="bold">
            [BIOMIMICRY] BALLOON-DEPLOYABLE EXPANDABLE CONDUIT MESH
          </text>
        </g>

        {/* Bottom Title Block */}
        <g transform="translate(560, 395)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
          <rect x="0" y="0" width="216" height="42" fill="#20272B" stroke="#00AEEF" strokeWidth="1" />
          <line x1="0" y1="21" x2="216" y2="21" stroke="#2C363C" strokeWidth="1" />
          <line x1="108" y1="0" x2="108" y2="42" stroke="#2C363C" strokeWidth="1" />
          <text x="8" y="14" fill="#82949F">RESEARCH:</text>
          <text x="8" y="34" fill="#F4F1E8" fontWeight="bold">BIO-MECHANICS</text>
          <text x="116" y="14" fill="#82949F">DATA ANALYSIS:</text>
          <text x="116" y="34" fill="#00AEEF" fontWeight="bold">EXPERIMENTAL</text>
        </g>
      </svg>
    </div>
  );
}

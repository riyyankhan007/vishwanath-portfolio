import React from 'react';

export default function Volvo9600SlxSchematic() {
  return (
    <div className="cad-schematic-container">
      <svg
        viewBox="0 0 800 450"
        className="cad-schematic-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blueprint Grid Background */}
        <defs>
          <pattern id="slx-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 174, 239, 0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="slx-subgrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 174, 239, 0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="450" fill="#171E22" />
        <rect width="800" height="450" fill="url(#slx-subgrid)" />
        <rect width="800" height="450" fill="url(#slx-grid)" />

        {/* CAD Header Block */}
        <g className="cad-dwg-header" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="9">
          <text x="24" y="28">DWG NO: VCV-9600-SLX-001</text>
          <text x="24" y="42">SCALE: 1:50 [METRIC]</text>
          <text x="460" y="28">PROJECT: PRAWAAS 4.0 (MATERIAL QA)</text>
          <text x="460" y="42">PLATFORM: VOLVO 9600 15M MULTI-AXLE</text>
        </g>
        <line x1="24" y1="52" x2="776" y2="52" stroke="#2C363C" strokeWidth="1" />

        {/* Overall Dimension Lines */}
        {/* Length Dimension: 15,000 mm */}
        <g stroke="#00AEEF" strokeWidth="1">
          <line x1="70" y1="360" x2="730" y2="360" />
          <line x1="70" y1="350" x2="70" y2="370" />
          <line x1="730" y1="350" x2="730" y2="370" />
          {/* Arrowheads */}
          <polygon points="70,360 80,357 80,363" fill="#00AEEF" />
          <polygon points="730,360 720,357 720,363" fill="#00AEEF" />
        </g>
        <text x="360" y="375" fill="#F4F1E8" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="middle">
          OVERALL LENGTH: 15,000 mm
        </text>

        {/* Height Dimension: 3,800 mm */}
        <g stroke="#00AEEF" strokeWidth="1">
          <line x1="45" y1="120" x2="45" y2="330" />
          <line x1="38" y1="120" x2="52" y2="120" />
          <line x1="38" y1="330" x2="52" y2="330" />
          <polygon points="45,120 42,130 48,130" fill="#00AEEF" />
          <polygon points="45,330 42,320 48,320" fill="#00AEEF" />
        </g>
        <text x="32" y="225" fill="#F4F1E8" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" transform="rotate(-90 32 225)">
          HEIGHT: 3,800 mm
        </text>

        {/* Coach Body Elevation Wireframe */}
        {/* Main Body Contour */}
        <path
          d="M 90 310 
             L 700 310 
             Q 715 310 715 295 
             L 715 155 
             Q 715 140 700 135 
             L 630 135 
             L 160 135 
             Q 135 135 115 150 
             L 80 205 
             Q 70 220 70 240 
             L 70 295 
             Q 70 310 90 310 Z"
          fill="rgba(32, 39, 43, 0.75)"
          stroke="#F4F1E8"
          strokeWidth="2.5"
        />

        {/* Aerodynamic Windshield & Front Glazing */}
        <path
          d="M 82 208 L 120 155 Q 130 145 150 145 L 210 145 L 210 245 L 75 245 Z"
          fill="rgba(0, 174, 239, 0.12)"
          stroke="#00AEEF"
          strokeWidth="1.5"
        />

        {/* Passenger Panoramic Windows Row */}
        <g fill="rgba(0, 174, 239, 0.08)" stroke="#00AEEF" strokeWidth="1.2">
          <rect x="220" y="145" width="60" height="90" rx="3" />
          <rect x="286" y="145" width="60" height="90" rx="3" />
          <rect x="352" y="145" width="60" height="90" rx="3" />
          <rect x="418" y="145" width="60" height="90" rx="3" />
          <rect x="484" y="145" width="60" height="90" rx="3" />
          <rect x="550" y="145" width="60" height="90" rx="3" />
          <rect x="616" y="145" width="85" height="90" rx="3" />
        </g>

        {/* Dynamic Scandinavian Beltline Sweep */}
        <path
          d="M 75 255 L 220 255 Q 235 255 245 260 L 690 260 Q 710 260 715 270"
          fill="none"
          stroke="#00AEEF"
          strokeWidth="3"
        />

        {/* Wheel Arches & Wheels (6x2 Multi-Axle Setup) */}
        {/* Front Steer Axle */}
        <g className="wheel-group">
          <circle cx="160" cy="310" r="32" fill="#171E22" stroke="#F4F1E8" strokeWidth="2.5" />
          <circle cx="160" cy="310" r="20" fill="#20272B" stroke="#00AEEF" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="160" cy="310" r="8" fill="#00AEEF" />
        </g>

        {/* Rear Drive Axle (Axle 2) */}
        <g className="wheel-group">
          <circle cx="560" cy="310" r="32" fill="#171E22" stroke="#F4F1E8" strokeWidth="2.5" />
          <circle cx="560" cy="310" r="20" fill="#20272B" stroke="#00AEEF" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="560" cy="310" r="8" fill="#00AEEF" />
        </g>

        {/* Rear Steerable Tag Axle (Axle 3 - 15m Multi-Axle Feature) */}
        <g className="wheel-group">
          <circle cx="635" cy="310" r="32" fill="#171E22" stroke="#F4F1E8" strokeWidth="2.5" />
          <circle cx="635" cy="310" r="20" fill="#20272B" stroke="#00AEEF" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="635" cy="310" r="8" fill="#00AEEF" />
        </g>

        {/* Technical Callout Pointers */}
        {/* Callout 1: Roof Aerodynamics */}
        <g className="cad-callout" stroke="#00AEEF" strokeWidth="1" fill="none">
          <circle cx="340" cy="135" r="3" fill="#00AEEF" />
          <polyline points="340,135 370,105 480,105" />
          <text x="485" y="102" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="bold">
            [01] COMPOSITE ROOF // UV & IMPACT QA INSPECTED
          </text>
        </g>

        {/* Callout 2: Structural Mating & Body Panel */}
        <g className="cad-callout" stroke="#00AEEF" strokeWidth="1" fill="none">
          <circle cx="450" cy="257" r="3" fill="#00AEEF" />
          <polyline points="450,257 480,285 580,285" />
          <text x="585" y="283" fill="#F4F1E8" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="bold">
            [02] SIDE TRIMS & GLASS FITMENT VALIDATED
          </text>
        </g>

        {/* Callout 3: Multi-Axle Bogie Suspension */}
        <g className="cad-callout" stroke="#00AEEF" strokeWidth="1" fill="none">
          <circle cx="600" cy="315" r="3" fill="#00AEEF" />
          <polyline points="600,315 620,345 740,345" />
          <text x="625" y="340" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="bold">
            [03] 6x2 DUAL BOGIE HARDWARE ALIGNMENT
          </text>
        </g>

        {/* Bottom ISO Title Block */}
        <g transform="translate(560, 395)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
          <rect x="0" y="0" width="216" height="42" fill="#20272B" stroke="#00AEEF" strokeWidth="1" />
          <line x1="0" y1="21" x2="216" y2="21" stroke="#2C363C" strokeWidth="1" />
          <line x1="108" y1="0" x2="108" y2="42" stroke="#2C363C" strokeWidth="1" />
          <text x="8" y="14" fill="#82949F">DISCIPLINE:</text>
          <text x="8" y="34" fill="#F4F1E8" fontWeight="bold">MATERIAL QA</text>
          <text x="116" y="14" fill="#82949F">STATUS:</text>
          <text x="116" y="34" fill="#00AEEF" fontWeight="bold">LINE VALIDATED</text>
        </g>
      </svg>
    </div>
  );
}

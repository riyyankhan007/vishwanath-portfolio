import React from 'react';

export default function PowerWindowSchematic() {
  return (
    <div className="cad-schematic-container">
      <svg
        viewBox="0 0 800 450"
        className="cad-schematic-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pw-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 174, 239, 0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="pw-subgrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 174, 239, 0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="450" fill="#171E22" />
        <rect width="800" height="450" fill="url(#pw-subgrid)" />
        <rect width="800" height="450" fill="url(#pw-grid)" />

        {/* CAD Header Block */}
        <g fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="9">
          <text x="24" y="28">DWG NO: BIT-MECH-PWM-003</text>
          <text x="24" y="42">SCALE: 1:5 [KINEMATIC SYNTHESIS]</text>
          <text x="440" y="28">PROJECT: VEHICLE SAFETY POWER WINDOW</text>
          <text x="440" y="42">INSTITUTION: BANGALORE INSTITUTE OF TECH</text>
        </g>
        <line x1="24" y1="52" x2="776" y2="52" stroke="#2C363C" strokeWidth="1" />

        {/* Vertical Guide Rails & Mounting Frame */}
        <g stroke="#38454D" strokeWidth="2">
          {/* Left Vertical Column */}
          <rect x="220" y="100" width="18" height="240" fill="#20272B" />
          {/* Right Vertical Column */}
          <rect x="560" y="100" width="18" height="240" fill="#20272B" />
          {/* Base Plate */}
          <rect x="180" y="340" width="440" height="20" fill="#252D32" stroke="#F4F1E8" />
        </g>

        {/* Scissor Mechanism Kinematic Linkage */}
        {/* Arm 1 (Diagonal Left to Right) */}
        <line x1="250" y1="330" x2="550" y2="170" stroke="#00AEEF" strokeWidth="6" strokeLinecap="round" />
        {/* Arm 2 (Diagonal Right to Left) */}
        <line x1="550" y1="330" x2="250" y2="170" stroke="#F4F1E8" strokeWidth="6" strokeLinecap="round" />

        {/* Central Scissor Pivot Joint */}
        <circle cx="400" cy="250" r="9" fill="#20272B" stroke="#00AEEF" strokeWidth="3" />
        <circle cx="400" cy="250" r="3" fill="#00AEEF" />

        {/* Top Window Glass Horizontal Carrier Rail */}
        <rect x="230" y="160" width="340" height="18" rx="2" fill="#20272B" stroke="#00AEEF" strokeWidth="2" />
        {/* Sliding Pin Left */}
        <circle cx="250" cy="169" r="6" fill="#F4F1E8" />
        {/* Sliding Pin Right */}
        <circle cx="550" cy="169" r="6" fill="#00AEEF" />

        {/* Simulated Window Glass Pane (Safety Optical Acrylic) */}
        <path
          d="M 235 160 L 235 90 L 565 90 L 565 160 Z"
          fill="rgba(0, 174, 239, 0.12)"
          stroke="#00AEEF"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <text x="400" y="125" fill="#F4F1E8" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">
          VEHICLE SAFETY WINDOW PANE (TRAVEL: ΔY = 240mm)
        </text>

        {/* Anti-Pinch Pressure Sensor Strip */}
        <line x1="235" y1="88" x2="565" y2="88" stroke="#33BFF2" strokeWidth="4" />
        <g className="cad-callout" stroke="#33BFF2" strokeWidth="1" fill="none">
          <circle cx="400" cy="88" r="3" fill="#33BFF2" />
          <polyline points="400,88 430,68 590,68" />
          <text x="435" y="64" fill="#33BFF2" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="bold">
            [SAFETY SENSOR] ANTI-PINCH FORCE CUT-OFF STRIP
          </text>
        </g>

        {/* Drive Motor & Gear Reduction Assembly */}
        <g transform="translate(140, 260)">
          {/* DC Electric Motor Cylinder */}
          <rect x="0" y="20" width="60" height="40" rx="4" fill="#20272B" stroke="#F4F1E8" strokeWidth="1.5" />
          <text x="30" y="44" fill="#CBD5DB" fontFamily="JetBrains Mono, monospace" fontSize="7.5" textAnchor="middle">
            12V DC
          </text>
          {/* Reduction Gear 1 */}
          <circle cx="75" cy="40" r="15" fill="#171E22" stroke="#00AEEF" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Reduction Gear 2 */}
          <circle cx="95" cy="40" r="22" fill="#171E22" stroke="#F4F1E8" strokeWidth="2" strokeDasharray="4 2" />
          {/* Drive Shaft Linkage */}
          <line x1="95" y1="40" x2="110" y2="40" stroke="#00AEEF" strokeWidth="3" />
        </g>

        {/* Kinematic Angle Annotation */}
        <path d="M 400 250 M 430 250 A 30 30 0 0 0 422 232" fill="none" stroke="#00AEEF" strokeWidth="1.5" />
        <text x="438" y="242" fill="#00AEEF" fontFamily="JetBrains Mono, monospace" fontSize="8">
          θ = 54.2°
        </text>

        {/* Bottom Title Block */}
        <g transform="translate(560, 395)" fontFamily="JetBrains Mono, monospace" fontSize="7.5">
          <rect x="0" y="0" width="216" height="42" fill="#20272B" stroke="#00AEEF" strokeWidth="1" />
          <line x1="0" y1="21" x2="216" y2="21" stroke="#2C363C" strokeWidth="1" />
          <line x1="108" y1="0" x2="108" y2="42" stroke="#2C363C" strokeWidth="1" />
          <text x="8" y="14" fill="#82949F">STATUS:</text>
          <text x="8" y="34" fill="#F4F1E8" fontWeight="bold">FABRICATED</text>
          <text x="116" y="14" fill="#82949F">RESULT:</text>
          <text x="116" y="34" fill="#00AEEF" fontWeight="bold">DEFENDED BIT</text>
        </g>
      </svg>
    </div>
  );
}

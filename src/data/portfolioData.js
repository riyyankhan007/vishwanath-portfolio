// Centralized Data Model for Vishwanath C V Portfolio
// Sourced strictly from verified CV / Resume PDF. No fabricated accomplishments.

export const personalInfo = {
  name: "Vishwanath C V",
  tagline: "Mechanical Engineer & Quality Assurance Engineer",
  company: "VE Commercial Vehicles Ltd.",
  companySubtitle: "A Volvo Group and Eicher Motors Joint Venture",
  location: "Bangalore, Karnataka, India",
  email: "vishwanath2001.7@gmail.com",
  phone: "+91 9611337863",
  dob: "07 January 2001",
  degree: "Bachelor of Engineering (B.E.) — Mechanical Engineering",
  institution: "Bangalore Institute of Technology",
  cgpa: "8.4 / 10",
  bio: "As a mechanical engineering graduate, core disciplines like machine design, total quality management (TQM), and finite element method (FEM) drive my engineering mindset. I focus on incoming supplier quality, mating parts fitment validation, root cause analysis (RCA), and continuous product improvement across commercial vehicle platforms.",
  resumePath: "/Vishwanath_CV_Resume.pdf",
};

export const heroStats = [
  { label: "Coach Platform", value: "Volvo 9600", unit: "15m Multi-Axle" },
  { label: "Academic Distinction", value: "8.4 / 10", unit: "B.E. Mechanical CGPA" },
  { label: "Core Methodologies", value: "8D / CAPA", unit: "7 QC & RCA" },
  { label: "Operational Hub", value: "Bangalore", unit: "Karnataka, IN" },
];

export const engineeringPillars = [
  {
    id: "automotive-qa",
    number: "01",
    title: "Commercial Vehicle Quality",
    subtitle: "Incoming inspection & supplier validation",
    description:
      "Overseeing incoming quality assurance for critical commercial vehicle components, ensuring 100% adherence to Product Development (PD) drawings and Volvo engineering standards on the Volvo 9600 coach platform.",
    highlights: ["Incoming Component Inspection", "Supplier Quality Audits", "PD Drawing Compliance", "Non-Conforming Disposition"],
  },
  {
    id: "mating-validation",
    number: "02",
    title: "Fitment Trials & Assembly Validation",
    subtitle: "Mating parts & tolerance verification",
    description:
      "Conducting extensive physical fitment trials on critical mating assemblies to eliminate geometric interference, assembly bottlenecks, and supplier manufacturing variances prior to serial line production.",
    highlights: ["Mating Parts Analysis", "Fitment Trial Protocols", "Assembly Defect Prevention", "Tolerance Verification"],
  },
  {
    id: "root-cause-capa",
    number: "03",
    title: "Systematic Problem Solving",
    subtitle: "8D, CAPA & 7 QC Tools execution",
    description:
      "Driving robust Root Cause Analysis (RCA) and 8D investigations. Formulating containment actions, tracking Corrective & Preventive Actions (CAPA), and issuing Quality Incident Reports (QIR) to prevent defect recurrence.",
    highlights: ["8D Discipline Execution", "Fishbone & 5-Why RCA", "QIR Rejection Logging", "Supplier Development"],
  },
];

export const skillCategories = [
  {
    category: "Quality Assurance & Methodologies",
    description: "Industry-standard frameworks and statistical tools for manufacturing quality control",
    skills: [
      { name: "Total Quality Management (TQM)", level: "Advanced", tag: "Process Control" },
      { name: "8D Problem Solving Methodology", level: "Core Discipline", tag: "RCA" },
      { name: "Corrective & Preventive Action (CAPA)", level: "Core Discipline", tag: "Continuous Improvement" },
      { name: "Root Cause Analysis (RCA)", level: "Advanced", tag: "Failure Analysis" },
      { name: "7 Quality Control (QC) Tools", level: "Advanced", tag: "Statistical QA" },
      { name: "Supplier Quality Management", level: "Production Active", tag: "Supplier Audits" },
      { name: "Incoming Quality Inspection", level: "Daily Practice", tag: "Component Acceptance" },
      { name: "QIR Documentation & Rejections", level: "Daily Practice", tag: "Incident Tracking" },
    ],
  },
  {
    category: "Mechanical Design & Simulation",
    description: "Digital modeling, engineering drawing interpretation, and mechanical synthesis",
    skills: [
      { name: "SolidWorks", level: "Proficient", tag: "3D CAD Modeling" },
      { name: "CATIA (Basics)", level: "Foundational", tag: "Surfacing & Parts" },
      { name: "Machine Design", level: "Core Discipline", tag: "Kinematics & Stress" },
      { name: "Finite Element Method (FEM)", level: "Academic Focus", tag: "Structural Analysis" },
      { name: "Engineering Drawing Interpretation", level: "Daily Practice", tag: "PD Drawings & GD&T" },
      { name: "Prototype Fabrication", level: "Hands-on", tag: "Physical Modeling" },
    ],
  },
  {
    category: "Automotive & Manufacturing Systems",
    description: "Commercial vehicle assembly, supplier evaluation, and lean manufacturing principles",
    skills: [
      { name: "Commercial Vehicle Coach Systems", level: "Volvo 9600 Platform", tag: "Automotive" },
      { name: "Fitment Trials & Mating Parts", level: "Physical Validation", tag: "Assembly" },
      { name: "KANBAN System", level: "Implemented", tag: "Lean Inventory" },
      { name: "5S-Culture", level: "Workplace Standard", tag: "Lean Operations" },
      { name: "KAIZEN Continuous Improvement", level: "Practiced", tag: "Operational Excellence" },
      { name: "Hardware Components Study", level: "Empirical", tag: "Fasteners & Joints" },
    ],
  },
  {
    category: "Enterprise Tools & Technical Software",
    description: "Enterprise resource planning, quality spreadsheets, and engineering documentation",
    skills: [
      { name: "SAP (ERP Quality Modules)", level: "Enterprise", tag: "Material Management" },
      { name: "Microsoft Excel (Advanced)", level: "Analytical", tag: "Quality Data & Metrics" },
      { name: "Microsoft Word", level: "Documentation", tag: "Standard Operating Procedures" },
      { name: "Technical Reporting & QIRs", level: "Formal", tag: "Cross-Functional" },
    ],
  },
];

export const projectsData = [
  {
    id: "prawas-4",
    schematicType: "slx",
    title: "Prawaas 4.0 — Volvo 9600 Slx Multi-Axle Coach",
    role: "Material Quality Assurance",
    category: "commercial-vehicle",
    categoryLabel: "Commercial Vehicle QA",
    timeline: "Jul 2025 – Aug 2025",
    vehiclePlatform: "Newly launched Volvo 9600 slx 15-meter multi-axle luxury coach",
    summary:
      "Spearheaded material quality assurance and cross-functional supplier development for the newly launched 15-meter multi-axle Volvo 9600 slx coach in active coordination with the Product Development (PD) team.",
    challenge:
      "Ensuring strict compliance of high-stress structural materials and luxury interior trims sourced across tier suppliers, meeting Volvo's stringent Scandinavian crashworthiness, durability, and passenger comfort specifications.",
    responsibilities: [
      "Supported supplier and product development activities in direct coordination with the Product Development (PD) team.",
      "Engaged directly with tier-1/tier-2 suppliers to resolve active material quality concerns and implement robust corrective actions.",
      "Contributed to systematic continuous improvement initiatives to enhance product quality and supplier delivery performance by conducting comprehensive supplier audits and quality reviews.",
    ],
    technicalHighlights: [
      "15-meter multi-axle coach material validation",
      "Supplier audits and process capability reviews",
      "Cross-functional synergy with VECV Product Development",
      "Immediate containment of non-conforming batch materials",
    ],
    toolsUsed: ["Supplier Quality Audits", "CAPA", "Material Inspection", "Volvo PD Drawings", "QIR Documentation"],
  },
  {
    id: "prawas-5",
    schematicType: "sleeper",
    title: "Prawaas 5.0 — Volvo 9600 Seater-Sleeper Multi-Coach",
    role: "Supplier Quality Assurance & Validation",
    category: "commercial-vehicle",
    categoryLabel: "Commercial Vehicle QA",
    timeline: "Jun 2026 – Jul 2026",
    vehiclePlatform: "Newly launched Volvo 9600 15-meter Seater-Sleeper multi-axle coach",
    summary:
      "Executed supplier quality assurance, supplier capability assessment, and exhaustive fitment validation on critical mating parts for the newly introduced Volvo 9600 15m Seater-Sleeper multi-axle coach.",
    challenge:
      "The dual seater-sleeper configuration introduced complex modular interior and structural mating interfaces requiring tight dimensional tolerances to prevent cabin vibration, fitment interference, and assembly delays on the main production line.",
    responsibilities: [
      "Evaluated tier supplier manufacturing capabilities and verified strict adherence to engineering Product Development (PD) drawings and technical specifications.",
      "Conducted multiple physical fitment trials and rigorous validation activities on mating parts to proactively identify design oversights and assembly interferences.",
      "Raised rejection reports, initiated containment protocols, and collaborated with design teams to modify dimensional tolerances where mating gaps exceeded engineering limits.",
    ],
    technicalHighlights: [
      "Mating parts fitment trials & tolerance verification",
      "Supplier capability assessment against PD drawings",
      "Prevention of assembly line downtime via proactive fit trials",
      "Resolution of interface mismatches between seating and sleeper modules",
    ],
    toolsUsed: ["Fitment Trial Protocols", "Vernier Calipers & Gauges", "PD Technical Drawings", "8D Methodology", "SAP"],
  },
  {
    id: "power-window-mechanism",
    schematicType: "power-window",
    title: "Design and Fabrication of Power Window Mechanism for Vehicle Safety",
    role: "Lead Mechanism Design & Fabrication",
    category: "mechanical-design",
    categoryLabel: "Mechanism Design",
    timeline: "Major Academic Project (B.E. Final Year)",
    institution: "Bangalore Institute of Technology",
    summary:
      "Engineered, CAD modeled, and fabricated a functional automotive power window scissor mechanism prototype engineered specifically with passenger safety and anti-pinch protection features.",
    challenge:
      "Standard vehicle power windows present pinch hazards and motor burn-out risks. The challenge was to synthesize a compact, cost-effective scissor linkage mechanism with smooth travel kinematics and rapid safety disengagement.",
    responsibilities: [
      "Design-focused role: Created 3D CAD models of the scissor linkage, spur gear reduction drive, and guide rails.",
      "Selected suitable engineering materials and electromechanical components balancing mechanical fatigue strength, weight, and fabrication cost considerations.",
      "Actively led the physical fabrication and machining processes, assembling the benchtop validation prototype.",
      "Prepared exhaustive technical documentation, structural calculations, and successfully defended the project findings to faculty reviewers.",
    ],
    technicalHighlights: [
      "Scissor linkage kinematics & gear ratio optimization",
      "Material selection for mechanical strength vs. cost efficiency",
      "Hands-on fabrication, machining, and prototype assembly",
      "Comprehensive engineering documentation and defense",
    ],
    toolsUsed: ["SolidWorks CAD", "Material Selection Criteria", "Machining & Prototyping", "Mechanical Linkage Synthesis"],
  },
  {
    id: "biomimicry-angioplasty",
    schematicType: "biomimicry",
    title: "Bio-Mimicry of Angioplasty in Sewage Treatment System",
    role: "Research, Modeling & Data Analysis",
    category: "research-mechanics",
    categoryLabel: "Bio-Inspired Mechanics",
    timeline: "Minor Academic Project",
    institution: "Bangalore Institute of Technology",
    summary:
      "Investigated an innovative wastewater filtration concept applying the biomedical principles of balloon angioplasty and expandable stent meshes to unclog and filter high-turbidity sewage conduits.",
    challenge:
      "Municipal sewage lines suffer from catastrophic particulate blockages and bio-fouling. Conventional static filters require manual cleaning or replacement, resulting in massive operational downtime.",
    responsibilities: [
      "Conducted comprehensive scientific literature review on biological angioplasty expansion mechanics and modern wastewater treatment technologies.",
      "Performed systematic experimental data collection, parametric flow analysis, and interpretation of filtration efficiency results across varying flow regimes.",
      "Prepared technical documentation, graphical flow diagrams, and formal presentation materials.",
      "Presented and defended engineering project findings before university faculty and student peers.",
    ],
    technicalHighlights: [
      "Bio-mimetic expansion mechanism inspired by vascular angioplasty",
      "Experimental fluid flow data collection and filtration efficiency analysis",
      "Self-cleaning expandable conduit geometry to prevent line clogging",
      "Rigorous technical reporting and academic presentation",
    ],
    toolsUsed: ["Fluid Mechanics Principles", "Data Analysis", "Biomimicry Synthesis", "Technical Documentation"],
  },
];

export const workExperience = [
  {
    role: "Quality Assurance Engineer",
    company: "VE Commercial Vehicles Ltd.",
    companyAffiliation: "A Volvo Group and Eicher Motors Joint Venture",
    location: "Bangalore, Karnataka",
    period: "Jul 2023 – Present",
    status: "Current Position",
    type: "Full-Time",
    responsibilities: [
      "Perform incoming quality inspection of purchased automotive components to guarantee 100% conformance to engineering blueprints.",
      "Coordinate directly with component suppliers regarding quality concerns, root cause identification, and corrective actions.",
      "Conduct systematic Root Cause Analysis (RCA) leveraging 8D problem-solving methodology and 7 QC tools.",
      "Raise formal rejection reports and diligently monitor supplier Corrective and Preventive Action (CAPA) implementation.",
      "Monitor supplier performance metrics, defect rates (PPM), and maintain real-time quality scorecards.",
      "Prepare detailed inspection reports, Quality Incident Reports (QIR's), and technical quality documentation.",
      "Handle non-conforming materials and coordinate disposition activities (quarantine, rework, return to vendor).",
      "Coordinate with cross-functional teams (Product Development, Manufacturing, Supply Chain) for timely resolution of quality issues.",
      "Drive continuous development of suppliers in alignment with Volvo Group and VECV organizational quality benchmarks.",
    ],
  },
  {
    role: "Engineering Intern — Quality & Production Systems",
    company: "VE Commercial Vehicles Ltd.",
    companyAffiliation: "A Volvo Group and Eicher Motors Joint Venture",
    location: "Bangalore, Karnataka",
    period: "Aug 2022",
    status: "Internship Achievement",
    type: "Internship",
    responsibilities: [
      "Successfully completed an industrial project on KANBAN SYSTEM, 5S-Culture, and KAIZEN continuous improvement on the commercial vehicle assembly floor.",
      "Conducted in-depth study of automotive hardware components, fasteners, and their structural fitment specifications.",
      "Analyzed shop-floor material replenishment workflows to reduce line-side inventory holding and assembly delays.",
      "Formulated 5S implementation recommendations to enhance workstation ergonomics and reduce tool search time.",
    ],
  },
];

export const educationHistory = [
  {
    qualification: "Bachelor of Engineering (B.E.) — Mechanical Engineering",
    institution: "Bangalore Institute of Technology",
    location: "Bangalore, Karnataka",
    duration: "2019 – 2023",
    metric: "CGPA: 8.4 / 10",
    metricType: "Cumulative GPA",
    description:
      "Comprehensive coursework in Machine Design, Finite Element Method (FEM), Total Quality Management (TQM), Kinematics of Machines, Thermodynamics, and Manufacturing Technology.",
  },
  {
    qualification: "Pre-University Course (PUC) — Science",
    institution: "Sindhi PU College of Science",
    location: "Bangalore, Karnataka",
    duration: "2017 – 2019",
    metric: "Percentage: 75%",
    metricType: "Score",
    description: "Focus on Physics, Chemistry, Mathematics, and foundational sciences.",
  },
  {
    qualification: "SSLC (Secondary School Leaving Certificate)",
    institution: "Sindhi High School",
    location: "Bangalore, Karnataka",
    duration: "2016 – 2017",
    metric: "CGPA: 8.0 / 10",
    metricType: "Cumulative GPA",
    description: "Secondary education with strong foundation in mathematics and physical sciences.",
  },
];

export const languages = [
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Kannada", proficiency: "Native / Professional Working Proficiency" },
  { name: "Telugu", proficiency: "Professional Working Proficiency" },
  { name: "Tamil", proficiency: "Professional Working Proficiency" },
];

export const interests = [
  { name: "Machine Design", category: "Core Technical Discipline" },
  { name: "Designing", category: "CAD & Product Aesthetics" },
  { name: "Cricket", category: "Sport & Team Dynamics" },
  { name: "Travelling", category: "Exploration & Culture" },
  { name: "Games", category: "Strategy & Problem Solving" },
];

export interface Course {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  students: number
  discount?: number
  trainer: {
    name: string
    title: string
    experience: string
    education: string
    specialization: string
    bio: string
  }
  duration: string
  weeks: number
  image: string
  overview: {
    welcome: string
    description: string
    objectives: string[]
  }
  syllabus: {
    week: number
    title: string
    topics: string[]
  }[]
  schedule: {
    duration: string
    sessions: string
    mode: string
    tools: string[]
    fee: number
    breakdown: string
  }
  faqs: {
    question: string
    answer: string
  }[]
  materials: {
    type: string
    title: string
    description: string
  }[]
  certificate: {
    title: string
    description: string
    features: string[]
  }
  videos: {
    id: number
    title: string
    duration: string
    description: string
    url: string
    isFree: boolean
  }[]
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Design Verification",
    description:
      "The primary objective of the Design Verification Course is to equip engineers and VLSI professionals with the skills and methodologies necessary to validate the correctness, performance, and reliability of digital designs before fabrication. This course provides a comprehensive understanding of design verification concepts, methodologies, and practical skills required to verify digital designs effectively. The course focuses on industry-standard verification techniques, languages, and tools such as SystemVerilog, UVM (Universal Verification Methodology), and Assertion-Based Verification.",
    category: "VLSI Design",
    price: 250,
    rating: 4.8,
    students: 1100,
    discount: 10,
    trainer: {
      name: "Prof. Arun Kumar",
      title: "Senior Design Verification Engineer",
      experience: "15+ years in VLSI Design and Verification",
      education: "M.Tech/Ph.D. in VLSI Design / ECE, Alumni of IIT/NIT",
      specialization:
        "SystemVerilog & UVM, Functional and Formal Verification, RTL Design & Debug, SoC-level Verification and Assertion-based Verification",
      bio: "Senior Design Verification Engineer and Lead with 15+ years of experience in VLSI Design & Verification with industry background in top semiconductor companies.",
    },
    duration: "24 weeks",
    weeks: 24,
    image: "/course1.png",
    overview: {
      welcome: "Welcome to the Design Verification Course!",
      description:
        "The primary objective of the Design Verification Course is to equip engineers and VLSI professionals with the skills and methodologies necessary to validate the correctness, performance, and reliability of digital designs before fabrication. This course provides a comprehensive understanding of design verification concepts, methodologies, and practical skills required to verify digital designs effectively. The course focuses on industry-standard verification techniques, languages, and tools such as SystemVerilog, UVM (Universal Verification Methodology), and Assertion-Based Verification.",
      objectives: [
        "Develop high-quality SystemVerilog-based testbenches",
        "Master SystemVerilog constructs for verification",
        "Apply Universal Verification Methodology (UVM) for modular test environments",
        "Perform Constrained Random Verification (CRV) for thorough testing",
        "Utilize Assertion-Based Verification (ABV) to catch design errors early",
        "Achieve high functional and code coverage for design completeness",
        "Execute effective verification planning and management",
        "Troubleshoot and debug simulation failures efficiently",
        "Operate industry-standard verification tools",
        "Be industry-ready for roles like Verification Engineer and Verification Specialist",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Review of Digital Electronics and Logic Design - Part 1",
        topics: [
          "Number systems, Number conversions, Binary arithmetic",
          "Boolean algebra, Complements, Boolean expression",
          "Logic Gates, K-Map, Boolean expression implementation",
        ],
      },
      {
        week: 2,
        title: "Review of Digital Electronics and Logic Design - Part 2",
        topics: [
          "Combinational Circuits: Adders/Subtractors, Parallel adders",
          "Encoder, Decoder, Multiplexer, Demultiplexer, Code converters",
          "Sequential Circuits: Latches, Flip-Flops, FF Conversion",
          "Finite State Machine: Mealy/Moore machine, Sequence detector",
        ],
      },
      {
        week: 3,
        title: "System Design using Verilog HDL - Part 1",
        topics: [
          "Basic concepts: Lexical conventions, Operators, Data types",
          "System Tasks, Compiler Directives, File input and output",
          "Modules and Ports: Module definition, Port declaration",
        ],
      },
      {
        week: 4,
        title: "System Design using Verilog HDL - Part 2",
        topics: [
          "Behavioral Modelling: Initial and always, blocking and non-blocking statements",
          "Delay control, event control, conditional statements, loops",
          "Modelling Styles: Gate Level, Data flow, Behavioral level, Structural level",
        ],
      },
      {
        week: 5,
        title: "Essentials of Linux",
        topics: [
          "Introduction of Linux, Command line Operators",
          "File Operations, Processes, Text Editors",
          "Text Manipulating, Network Operations, Special Keystrokes",
        ],
      },
      {
        week: 6,
        title: "Scripting",
        topics: [
          "Introduction to Perl/Tcl/Shell/Python",
          "Interactive Mode Programming, Script Mode Programming",
          "Data types, Lists, Arrays, Operators, condition statements",
          "Subroutines and Modules, Reading and Writing files",
        ],
      },
      {
        week: 7,
        title: "SystemVerilog for Verification - Introduction & Data Types",
        topics: [
          "SV Architecture, Syntax, Data types and states values",
          "Variables, String, User-defined type, enumerated types",
          "Structures, static and dynamic casting",
        ],
      },
      {
        week: 8,
        title: "SystemVerilog - Procedural Blocks & Programming Statements",
        topics: [
          "Initial block, final block, always block, Function, Task",
          "Decision Statements: if-else, assert-else, case, case-inside",
          "Loop Statements: forever, repeat, while, do while, for, foreach",
        ],
      },
      {
        week: 9,
        title: "SystemVerilog - Operators & Arrays",
        topics: [
          "Bitwise, Reduction, Logical, Conditional, Shift Operators",
          "Fixed size Arrays, Packed Arrays, Dynamic Arrays",
          "Associative arrays, Queues, Array methods",
        ],
      },
      {
        week: 10,
        title: "SystemVerilog - Packages & Interfaces",
        topics: [
          "Packages: import Vs defines, nested packages",
          "Interfaces: inter-module communication, interface methods",
          "Virtual interfaces, clocking blocks",
        ],
      },
      {
        week: 11,
        title: "SystemVerilog - Object Oriented Programming",
        topics: [
          "Classes, Constructors, Handles and Objects",
          "Shallow, Deep Copy, Clone objects, Class declaration",
          "Class extension, Polymorphism, Abstract Classes, Virtual Methods",
        ],
      },
      {
        week: 12,
        title: "SystemVerilog - Constrained Random & Threads",
        topics: [
          "Distribution Constraints, Unique Constraints, Implication Constraints",
          "Fork-Join, Fork-Join_None, Fork-Join_Any, Wait Fork, Disable Fork",
        ],
      },
      {
        week: 13,
        title: "SystemVerilog - IPC & Functional Coverage",
        topics: [
          "Events, Semaphore, Mailbox",
          "Functional Coverage Flow, Cover Group, Sampling and Conditional coverage",
          "Cover point bins, Illegal and Ignore bins, Cross Coverage",
        ],
      },
      {
        week: 14,
        title: "SystemVerilog Assertions",
        topics: [
          "Immediate Assertions, Concurrent Assertions",
          "SV Assertion Sequence, Implication Operator",
          "Repetition Operator, Disable iff",
        ],
      },
      {
        week: 15,
        title: "Universal Verification Methodology - Overview",
        topics: ["UVM Architecture, UVM Topology, UVM Phases", "UVM Transactions and Sequences, UVM Stimulus"],
      },
      {
        week: 16,
        title: "UVM - Driver and Sequencer",
        topics: ["UVM TLM Communication, UVM Driver", "UVM Sequencer, UVM Interface", "Sequencer to Driver handshake"],
      },
      {
        week: 17,
        title: "UVM - Monitor and Agents",
        topics: ["UVM Monitor, UVM TLM Analysis Port", "UVM Agent, UVM Coverage Collector"],
      },
      {
        week: 18,
        title: "UVM - Scoreboard and Environments",
        topics: [
          "UVM Scoreboard Introduction, UVM Scoreboard Internals",
          "Hierarchical Scoreboard, Flat Scoreboard, UVM Environments",
        ],
      },
      {
        week: 19,
        title: "UVM - Configuration and Factory",
        topics: ["UVM Configuration, UVM Configuration Objects", "UVM Factory, UVM Factory Override"],
      },
      {
        week: 20,
        title: "UVM Tests",
        topics: [
          "UVM Test Architecture, Sharing sequencer Handles",
          "Controlling run phase, UVM Complex Sequences",
          "Complex Sequence – Arbitration",
        ],
      },
      {
        week: 21,
        title: "Working in Live Project - Week 1",
        topics: ["Real-world verification projects", "Testbench development assignments", "Project planning and setup"],
      },
      {
        week: 22,
        title: "Working in Live Project - Week 2",
        topics: [
          "Implementation and debugging",
          "Coverage analysis and optimization",
          "Code review and best practices",
        ],
      },
      {
        week: 23,
        title: "Working in Live Project - Week 3",
        topics: ["Final project completion", "Documentation and presentation", "Project evaluation and feedback"],
      },
      {
        week: 24,
        title: "Interview / Soft Skills",
        topics: [
          "Technical interview preparation",
          "Resume building and portfolio development",
          "Soft skills and communication training",
          "Mock interviews and feedback",
        ],
      },
    ],
    schedule: {
      duration: "24 weeks (48 sessions, 2 per week)",
      sessions: "Live sessions + practical assignments + live project work",
      mode: "Hybrid learning with hands-on labs and industry projects",
      tools: ["SystemVerilog", "UVM", "Questa Sim", "VCS", "Assertion tools"],
      fee: 250,
      breakdown:
        "Weekly assignments and Module Assessments will be conducted. Assessments will be in the form of written test / Presentation / MCQ / Coding.",
    },
    faqs: [
      {
        question: "Who can attend the course?",
        answer:
          "Engineering Students from ECE/EEE/EIE/VLSI/CSE programs, B.E/B.Tech fresh graduates from ECE/EEE/EIE/VLSI/CSE programs, Engineers already working in VLSI, Embedded Systems, ASIC/FPGA Design, or hardware/software co-design, looking to transition into or strengthen their knowledge of Verification, and Industry-Sponsored Trainees.",
      },
      {
        question: "What are the pre-requisites to attend this course?",
        answer:
          "Knowledge of Digital Electronics and Logic Design, Familiarity with HDLs like Verilog or VHDL, and Basic understanding of Computer Architecture.",
      },
      {
        question: "Is there a certificate provided?",
        answer: "Yes, we offer a certificate of completion which can be valuable for resumes and job applications.",
      },
      {
        question: "What is the duration of the course?",
        answer:
          "The course duration typically ranges from 24 to 28 weeks (for intensive offline batches) to 28 to 36 months (for part time / weekend batches).",
      },
      {
        question: "Is there any hands-on/project work?",
        answer:
          "Yes, this course includes Real-world verification projects, Assignments on testbench development, Debugging and coverage analysis, and Final capstone or mini-projects.",
      },
      {
        question: "Will this help me get a job?",
        answer:
          "Absolutely. Design Verification is in high demand in the VLSI and semiconductor industries. This course can strengthen your resume, prepare you for technical interviews, and help with internships or full-time roles in companies like Intel, Qualcomm, AMD, Cadence, Synopsys, etc.",
      },
      {
        question: "Are placement services provided?",
        answer: "Yes we offer Placement assistance, Mock interviews, and Resume building.",
      },
      {
        question: "Is this course online or in-person?",
        answer:
          "Yes this is offered in In-person offline sessions, Fully online (live or self-paced), and Hybrid (online + lab sessions) modes.",
      },
    ],
    materials: [
      {
        type: "Video Lectures",
        title: "Comprehensive Video Library",
        description: "60+ hours of detailed video lectures covering all verification concepts",
      },
      {
        type: "Lab Exercises",
        title: "Hands-on Verification Labs",
        description: "Practical exercises using industry-standard verification tools and methodologies",
      },
      {
        type: "Reference Materials",
        title: "Industry Documentation",
        description: "Access to industry-standard verification guidelines and best practices",
      },
      {
        type: "Project Templates",
        title: "Verification Project Templates",
        description: "Complete project templates for various verification scenarios",
      },
    ],
    certificate: {
      title: "Design Verification Professional Certificate",
      description: "Demonstrates comprehensive expertise in design verification and industry-standard methodologies",
      features: [
        "Industry-recognized certification",
        "Digital verification with unique ID",
        "Shareable on LinkedIn and other platforms",
        "Lifetime validity",
        "Endorsed by industry professionals",
      ],
    },
    videos: [
      {
        id: 1,
        title: "Introduction to Design Verification",
        duration: "22:30",
        description: "Overview of design verification flow and industry applications",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "SystemVerilog Fundamentals",
        duration: "28:45",
        description: "Deep dive into SystemVerilog language features for verification",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "UVM Methodology Overview",
        duration: "25:15",
        description: "Introduction to Universal Verification Methodology",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 4,
        title: "Assertion-Based Verification",
        duration: "35:20",
        description: "Comprehensive coverage of SystemVerilog assertions",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 2,
    title: "Design For Testability",
    description:
      "Learn design for testability (DFT) techniques to ensure efficient testing of digital circuits and improve manufacturing yield.",
    category: "VLSI Design",
    price: 199,
    rating: 4.6,
    students: 890,
    trainer: {
      name: "Dr. Anita Desai",
      title: "DFT Methodology Expert",
      experience: "12+ years in DFT and Test Engineering",
      education: "Ph.D. in Computer Science, IISc Bangalore",
      specialization: "DFT, BIST, Scan Design, Test Pattern Generation",
      bio: "Dr. Anita is a renowned expert in DFT methodologies with extensive experience in test engineering for complex SoC designs.",
    },
    duration: "8 weeks",
    weeks: 8,
    image: "/course2.png",
    overview: {
      welcome: "Welcome to Design For Testability Course!",
      description:
        "Master the design for testability techniques essential for modern VLSI circuits. Learn scan design, BIST implementation, and test pattern generation methodologies.",
      objectives: [
        "Understand DFT fundamentals and test principles",
        "Master scan design and implementation",
        "Learn BIST and test pattern generation",
        "Implement comprehensive test strategies",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "DFT Fundamentals",
        topics: [
          "Test principles and fault models",
          "Controllability and observability",
          "Test economics and quality",
          "DFT flow overview",
        ],
      },
      {
        week: 2,
        title: "Scan Design",
        topics: ["Scan chain concepts", "Scan flip-flop design", "Scan insertion flow", "Scan compression"],
      },
    ],
    schedule: {
      duration: "8 weeks (16 sessions, 2 per week)",
      sessions: "Live sessions + practical labs",
      mode: "Hands-on DFT implementation with real designs",
      tools: ["Synopsys DFT Compiler", "Cadence Modus", "TetraMAX", "Test tools"],
      fee: 199,
      breakdown: "DFT implementation projects, test pattern generation, and comprehensive testing methodologies",
    },
    faqs: [
      {
        question: "What is Design for Testability?",
        answer:
          "DFT is a design methodology that makes testing easier by adding testability features during the design phase.",
      },
    ],
    materials: [
      {
        type: "DFT Tools",
        title: "Industry DFT Tools",
        description: "Access to industry-standard DFT and test generation tools",
      },
    ],
    certificate: {
      title: "Design For Testability Expert Certificate",
      description: "Validates expertise in DFT methodologies and test engineering",
      features: [
        "DFT methodology certification",
        "Test engineering validation",
        "Industry recognition",
        "Professional credibility",
      ],
    },
    videos: [
      {
        id: 1,
        title: "DFT Introduction",
        duration: "20:15",
        description: "Overview of design for testability concepts",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 3,
    title: "Physical Design",
    description:
      "The VLSI Physical Design course explains how a high-level hardware design turns into a layout ready for chip fabrication. Covering the entire backend flow — from floorplanning, placement to routing and timing closure. Students learn about power planning, clock tree synthesis, DRC/LVS verification, and sign-off methodologies. This course is designed for students with a basic understanding of digital electronics, Verilog and CMOS concepts for them to handle critical roles in semiconductor design teams.",
    category: "Physical Design",
    price: 289,
    rating: 4.7,
    students: 456,
    trainer: {
      name: "Mr. Deepak Joshi",
      title: "Physical Design Manager",
      experience: "17+ years in Physical Design and Backend",
      education: "M.Tech in VLSI Design, IIT Kanpur",
      specialization: "Physical Design Flow, Timing Closure, Signal Integrity",
      bio: "Deepak is a physical design expert with extensive experience in advanced node implementations and has led multiple successful tape-outs.",
    },
    duration: "26 weeks",
    weeks: 26,
    image: "/course3.png",
    overview: {
      welcome: "Welcome to Physical Design Course!",
      description:
        "The VLSI Physical Design course explains how a high-level hardware design turns into a layout ready for chip fabrication. Covering the entire backend flow — from floorplanning, placement to routing and timing closure. Students learn about power planning, clock tree synthesis, DRC/LVS verification, and sign-off methodologies. This course is designed for students with a basic understanding of digital electronics, Verilog and CMOS concepts for them to handle critical roles in semiconductor design teams.",
      objectives: [
        "Understand complete physical design flow from RTL to GDSII",
        "Master floorplanning, placement, and routing techniques",
        "Learn clock tree synthesis and timing closure methodologies",
        "Implement power planning and analysis techniques",
        "Perform physical verification and sign-off procedures",
        "Handle advanced node design challenges and optimization",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Digital Logic & Verilog HDL - Week 1",
        topics: [
          "Digital logic fundamentals",
          "Boolean algebra and logic gates",
          "Combinational circuit design",
          "Introduction to Verilog HDL",
        ],
      },
      {
        week: 2,
        title: "Digital Logic & Verilog HDL - Week 2",
        topics: [
          "Sequential circuit design",
          "Flip-flops and latches",
          "Finite state machines",
          "Verilog modeling techniques",
        ],
      },
      {
        week: 3,
        title: "Digital Logic & Verilog HDL - Week 3",
        topics: [
          "Advanced Verilog constructs",
          "Testbench development",
          "Simulation and debugging",
          "Synthesis considerations",
        ],
      },
      {
        week: 4,
        title: "Digital Logic & Verilog HDL - Week 4",
        topics: [
          "Memory design and modeling",
          "Clock domain crossing",
          "Design for synthesis",
          "RTL coding guidelines",
        ],
      },
      {
        week: 5,
        title: "Digital Logic & Verilog HDL - Week 5",
        topics: [
          "Advanced sequential circuits",
          "Pipeline design concepts",
          "Timing analysis basics",
          "Power considerations in RTL",
        ],
      },
      {
        week: 6,
        title: "Digital Logic & Verilog HDL - Week 6",
        topics: [
          "System-level design",
          "Interface protocols",
          "Design verification basics",
          "RTL to synthesis handoff",
        ],
      },
      {
        week: 7,
        title: "Introduction to Physical Design",
        topics: [
          "VLSI Design Flow (Frontend vs Backend)",
          "Physical design stages overview",
          "Design abstraction and hierarchy",
          "EDA tools introduction",
        ],
      },
      {
        week: 8,
        title: "Design Libraries and Technology Files",
        topics: [
          "Standard cell libraries",
          "LEF, DEF, Liberty (.lib) files",
          "Technology file formats",
          "Library characterization",
        ],
      },
      {
        week: 9,
        title: "Floorplanning",
        topics: ["Chip size estimation", "Macro placement", "I/O placement", "Floorplan optimization"],
      },
      {
        week: 10,
        title: "Placement",
        topics: [
          "Standard cell placement algorithms",
          "Congestion estimation and optimization",
          "Cell legalization and spreading",
          "Timing-driven placement",
        ],
      },
      {
        week: 11,
        title: "Clock Tree Synthesis (CTS)",
        topics: [
          "Clock domains and skew",
          "CTS algorithms (H-tree, balanced tree)",
          "Insertion delay and buffering",
          "Clock tree optimization",
        ],
      },
      {
        week: 12,
        title: "Routing",
        topics: [
          "Global routing vs. Detailed routing",
          "Routing constraints (e.g., spacing, metal layers)",
          "Crosstalk and antenna effect",
          "Routing optimization",
        ],
      },
      {
        week: 13,
        title: "Static Timing Analysis (STA)",
        topics: [
          "Setup and hold timing",
          "Clock uncertainty, latency, and skew",
          "Timing closure and optimization",
          "Multi-corner analysis",
        ],
      },
      {
        week: 14,
        title: "Physical Verification",
        topics: [
          "Design Rule Checking (DRC)",
          "Layout vs. Schematic (LVS)",
          "Antenna and ERC checks",
          "Verification methodologies",
        ],
      },
      {
        week: 15,
        title: "Power Analysis",
        topics: [
          "IR drop and EM analysis",
          "Power grid integrity",
          "Dynamic and leakage power",
          "Power optimization techniques",
        ],
      },
      {
        week: 16,
        title: "Sign-Off and Tape-out",
        topics: [
          "Final checks before tape-out",
          "Parasitic extraction",
          "Final GDSII generation",
          "Manufacturing handoff",
        ],
      },
      {
        week: 17,
        title: "Optimization Techniques",
        topics: [
          "Timing optimization methods",
          "Power optimization strategies",
          "Area optimization techniques",
          "Multi-objective optimization",
        ],
      },
      {
        week: 18,
        title: "Advanced Physical Design Topics",
        topics: [
          "Advanced node challenges",
          "FinFET design considerations",
          "Double patterning effects",
          "Variability and yield",
        ],
      },
      {
        week: 19,
        title: "Lab/Project Work - Week 1",
        topics: [
          "Floorplanning and power planning lab",
          "Tool setup and environment",
          "Design database preparation",
          "Initial floorplan creation",
        ],
      },
      {
        week: 20,
        title: "Lab/Project Work - Week 2",
        topics: [
          "Placement and CTS implementation",
          "Standard cell placement",
          "Clock tree synthesis",
          "Timing analysis",
        ],
      },
      {
        week: 21,
        title: "Lab/Project Work - Week 3",
        topics: [
          "Routing and optimization",
          "Global and detailed routing",
          "Design rule fixing",
          "Performance optimization",
        ],
      },
      {
        week: 22,
        title: "Lab/Project Work - Week 4",
        topics: [
          "DRC/LVS verification",
          "Physical verification flow",
          "Error analysis and fixing",
          "Sign-off preparation",
        ],
      },
      {
        week: 23,
        title: "Lab/Project Work - Week 5",
        topics: [
          "Final project: Block-level implementation",
          "Complete backend flow execution",
          "Performance analysis",
          "Documentation",
        ],
      },
      {
        week: 24,
        title: "Lab/Project Work - Week 6",
        topics: [
          "Mini SoC physical implementation",
          "Integration and verification",
          "Final optimization",
          "Project presentation",
        ],
      },
      {
        week: 25,
        title: "Lab/Project Work - Week 7",
        topics: [
          "Project completion and review",
          "Best practices implementation",
          "Industry case studies",
          "Final evaluation",
        ],
      },
      {
        week: 26,
        title: "Interview / Soft Skills",
        topics: [
          "Technical interview preparation",
          "Resume building for physical design roles",
          "Industry trends and opportunities",
          "Mock interviews and feedback",
        ],
      },
    ],
    schedule: {
      duration: "26 weeks (52 sessions, 2 per week)",
      sessions: "Live sessions + extensive lab work + project implementation",
      mode: "Comprehensive hands-on learning with real physical design projects",
      tools: ["Cadence Innovus", "Synopsys IC Compiler", "Calibre", "PrimeTime", "Physical verification tools"],
      fee: 289,
      breakdown:
        "4-stage learning approach: Digital Logic & Verilog (6 weeks), Physical Design Theory (12 weeks), Lab/Project Work (7 weeks), Interview Preparation (1 week)",
    },
    faqs: [
      {
        question: "What is Physical Design in VLSI?",
        answer:
          "Physical Design is the process of transforming a gate-level netlist into a physical layout that can be manufactured. It includes floorplanning, placement, routing, and verification steps.",
      },
      {
        question: "What are the prerequisites for this course?",
        answer:
          "Basic understanding of digital electronics, Verilog HDL, and CMOS concepts. Knowledge of logic design and computer architecture is helpful.",
      },
      {
        question: "Will I work on real industry projects?",
        answer:
          "Yes, the course includes extensive lab work and projects including block-level and mini SoC physical implementation using industry-standard tools.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You'll work with industry-standard tools including Cadence Innovus, Synopsys IC Compiler, Calibre for verification, and PrimeTime for timing analysis.",
      },
      {
        question: "What career opportunities are available after this course?",
        answer:
          "Physical Design Engineer, Backend Engineer, CAD Engineer, Timing Analysis Engineer, and Physical Verification Engineer roles in semiconductor companies.",
      },
    ],
    materials: [
      {
        type: "EDA Tools",
        title: "Physical Design Tools",
        description: "Access to industry-standard physical design and verification tools",
      },
      {
        type: "Technology Files",
        title: "Advanced Node PDKs",
        description: "Process design kits for advanced technology nodes",
      },
      {
        type: "Reference Flows",
        title: "Industry Design Flows",
        description: "Complete reference flows and implementation scripts",
      },
      {
        type: "Lab Exercises",
        title: "Hands-on Projects",
        description: "Comprehensive lab exercises covering the complete physical design flow",
      },
    ],
    certificate: {
      title: "Physical Design and Layout Expert Certificate",
      description: "Validates expertise in complete physical design and backend implementation",
      features: [
        "Complete backend flow certification",
        "Physical design expertise validation",
        "Tool proficiency recognition",
        "Industry implementation skills",
        "Project-based learning validation",
      ],
    },
    videos: [
      {
        id: 1,
        title: "Physical Design Flow Introduction",
        duration: "28:45",
        description: "Overview of complete physical design flow and challenges",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "Floorplanning and Power Planning",
        duration: "35:20",
        description: "Comprehensive coverage of floorplanning and power planning",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "Placement and Routing Techniques",
        duration: "40:15",
        description: "Advanced placement and routing algorithms and optimization",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 4,
    title: "FPGA Based System Design",
    description:
      "Master FPGA design methodologies, HDL programming, and implementation techniques for reconfigurable computing systems.",
    category: "FPGA",
    price: 299,
    rating: 4.8,
    students: 445,
    trainer: {
      name: "Dr. Sanjay Mehta",
      title: "FPGA Design Specialist",
      experience: "13+ years in FPGA and Reconfigurable Computing",
      education: "Ph.D. in Computer Engineering, IIT Roorkee",
      specialization: "FPGA Architecture, High-Level Synthesis, DSP Implementation",
      bio: "Dr. Sanjay specializes in FPGA-based system design and has developed numerous high-performance computing solutions using reconfigurable architectures.",
    },
    duration: "12 weeks",
    weeks: 12,
    image: "/course4.png",
    overview: {
      welcome: "Welcome to FPGA Based System Design Course!",
      description:
        "Master FPGA design from fundamentals to advanced implementation techniques. Learn HDL programming, synthesis, timing closure, and system-level design for reconfigurable computing applications.",
      objectives: [
        "Understand FPGA architecture and capabilities",
        "Master HDL programming for FPGAs",
        "Learn synthesis and implementation flows",
        "Develop high-performance FPGA systems",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "FPGA Architecture Fundamentals",
        topics: [
          "FPGA vs ASIC comparison",
          "FPGA internal architecture",
          "CLBs, LUTs, and routing",
          "Memory and DSP blocks",
        ],
      },
    ],
    schedule: {
      duration: "12 weeks (24 sessions, 2 per week)",
      sessions: "Hands-on FPGA development + design projects",
      mode: "Project-based learning with real FPGA boards",
      tools: ["Xilinx Vivado", "Intel Quartus", "ModelSim", "FPGA development boards"],
      fee: 299,
      breakdown: "FPGA design projects, implementation exercises, and comprehensive system development",
    },
    faqs: [
      {
        question: "What is FPGA Based System Design?",
        answer:
          "FPGA-based system design involves creating digital systems using Field-Programmable Gate Arrays, which are reconfigurable hardware platforms.",
      },
    ],
    materials: [
      {
        type: "FPGA Boards",
        title: "Development Hardware",
        description: "Access to FPGA development boards and evaluation kits",
      },
    ],
    certificate: {
      title: "FPGA System Design Expert Certificate",
      description: "Validates expertise in FPGA design and reconfigurable computing",
      features: [
        "FPGA design methodology certification",
        "Implementation expertise validation",
        "Tool proficiency recognition",
        "System design capabilities",
      ],
    },
    videos: [
      {
        id: 1,
        title: "FPGA Architecture Overview",
        duration: "24:15",
        description: "Understanding FPGA internal architecture and capabilities",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 5,
    title: "Gate Level Simulation",
    description: "Master gate-level simulation techniques for digital circuit verification and timing analysis.",
    category: "VLSI Design",
    price: 199,
    rating: 4.8,
    students: 1250,
    trainer: {
      name: "Dr. Rajesh Sharma",
      title: "Senior VLSI Design Engineer",
      experience: "12+ years in Digital Design and Simulation",
      education: "Ph.D. in Electronics Engineering, IIT Bombay",
      specialization: "Gate Level Simulation, Timing Analysis, Digital Verification",
      bio: "Dr. Rajesh has extensive experience in gate-level simulation and has worked with major semiconductor companies on complex SoC designs.",
    },
    duration: "8 weeks",
    weeks: 8,
    image: "/course5.png",
    overview: {
      welcome: "Welcome to Gate Level Simulation Course!",
      description:
        "This comprehensive course covers gate-level simulation techniques essential for digital circuit verification. You'll learn industry-standard methodologies for timing analysis, power estimation, and functional verification at the gate level.",
      objectives: [
        "Understand gate-level netlist structure and simulation",
        "Master timing analysis and delay calculation",
        "Learn power estimation techniques",
        "Implement comprehensive test strategies",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Introduction to Gate Level Simulation",
        topics: [
          "Digital circuit fundamentals",
          "Gate-level netlist structure",
          "Simulation vs synthesis flow",
          "Industry tools overview",
        ],
      },
    ],
    schedule: {
      duration: "8 weeks (16 sessions, 2 per week)",
      sessions: "Live sessions + self-paced assignments",
      mode: "Hybrid (Online live sessions with hands-on labs)",
      tools: ["Synopsys VCS", "Cadence NC-Sim", "ModelSim", "Custom testbenches"],
      fee: 199,
      breakdown: "Weekly hands-on exercises, project-based assignments, and comprehensive assessments",
    },
    faqs: [
      {
        question: "What will I learn in this course?",
        answer:
          "You'll master gate-level simulation techniques, timing analysis, power estimation, and industry-standard verification methodologies used in modern semiconductor design.",
      },
    ],
    materials: [
      {
        type: "Video Lectures",
        title: "Comprehensive Video Library",
        description: "40+ hours of detailed video lectures covering all simulation concepts",
      },
    ],
    certificate: {
      title: "Gate Level Simulation Specialist Certificate",
      description: "Demonstrates expertise in gate-level simulation and timing analysis",
      features: [
        "Industry-recognized certification",
        "Digital verification with unique ID",
        "Shareable on professional platforms",
        "Lifetime validity",
      ],
    },
    videos: [
      {
        id: 1,
        title: "Introduction to Gate Level Simulation",
        duration: "15:30",
        description: "Overview of gate-level simulation concepts and industry applications",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 6,
    title: "IP Verification (APB, AHB, AXI)",
    description: "Comprehensive verification of AMBA protocol IPs including APB, AHB, and AXI interfaces.",
    category: "Verification",
    price: 249,
    rating: 4.9,
    students: 980,
    trainer: {
      name: "Ms. Priya Patel",
      title: "Verification Lead",
      experience: "10+ years in Protocol Verification",
      education: "M.Tech in VLSI Design, NIT Warangal",
      specialization: "AMBA Protocols, UVM, SystemVerilog",
      bio: "Priya is a verification expert specializing in AMBA protocol verification with extensive experience in automotive and mobile SoC verification.",
    },
    duration: "10 weeks",
    weeks: 10,
    image: "/course6.png",
    overview: {
      welcome: "Welcome to IP Verification Course!",
      description:
        "Master the verification of AMBA protocol IPs including APB, AHB, and AXI. Learn industry-standard verification methodologies using UVM and SystemVerilog.",
      objectives: [
        "Understand AMBA protocol specifications",
        "Develop comprehensive verification environments",
        "Master UVM methodology for IP verification",
        "Implement coverage-driven verification",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "AMBA Protocol Overview",
        topics: [
          "AMBA specification introduction",
          "APB protocol fundamentals",
          "AHB protocol basics",
          "AXI protocol overview",
        ],
      },
    ],
    schedule: {
      duration: "10 weeks (20 sessions, 2 per week)",
      sessions: "Live sessions + practical labs",
      mode: "Interactive online sessions with real-time protocol analysis",
      tools: ["Questa Sim", "UVM Library", "SystemVerilog", "Protocol Analyzers"],
      fee: 249,
      breakdown: "Protocol-specific assignments, verification environment development, and comprehensive testing",
    },
    faqs: [
      {
        question: "What protocols will I learn to verify?",
        answer:
          "You'll master verification of APB, AHB, and AXI protocols, covering all aspects from basic functionality to advanced performance verification.",
      },
    ],
    materials: [
      {
        type: "Protocol Specifications",
        title: "AMBA Protocol Documentation",
        description: "Complete ARM AMBA specification documents and reference materials",
      },
    ],
    certificate: {
      title: "AMBA Protocol Verification Expert Certificate",
      description: "Validates expertise in APB, AHB, and AXI protocol verification",
      features: [
        "Protocol-specific certification",
        "Industry recognition",
        "UVM methodology validation",
        "Professional credibility",
      ],
    },
    videos: [
      {
        id: 1,
        title: "AMBA Protocol Introduction",
        duration: "20:15",
        description: "Overview of AMBA protocol family and verification challenges",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 7,
    title: "On-Chip AMBA BUS AHB2AXI Bridge Verification",
    description: "Specialized verification of AHB to AXI bridge designs for on-chip interconnect systems.",
    category: "Verification",
    price: 299,
    rating: 4.7,
    students: 756,
    trainer: {
      name: "Mr. Vikram Singh",
      title: "Principal Verification Engineer",
      experience: "15+ years in SoC Verification",
      education: "M.S. in Computer Engineering, Stanford University",
      specialization: "Bridge Verification, Interconnect Design, System-level Verification",
      bio: "Vikram specializes in complex SoC verification with focus on interconnect and bridge verification for high-performance computing systems.",
    },
    duration: "12 weeks",
    weeks: 12,
    image: "/course7.png",
    overview: {
      welcome: "Welcome to AHB2AXI Bridge Verification Course!",
      description:
        "Master the verification of AHB to AXI bridge designs, essential for modern SoC interconnect systems. Learn advanced verification techniques for protocol conversion and data integrity.",
      objectives: [
        "Understand bridge architecture and functionality",
        "Develop comprehensive bridge verification environments",
        "Master protocol conversion verification",
        "Implement system-level verification strategies",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Bridge Architecture Fundamentals",
        topics: [
          "AHB2AXI bridge overview",
          "Protocol conversion concepts",
          "Bridge design requirements",
          "Performance considerations",
        ],
      },
    ],
    schedule: {
      duration: "12 weeks (24 sessions, 2 per week)",
      sessions: "Live sessions + intensive lab work",
      mode: "Project-based learning with real bridge designs",
      tools: ["Questa Sim", "Synopsys VCS", "Formal verification tools", "Custom bridge models"],
      fee: 299,
      breakdown: "Bridge-specific verification projects, performance analysis, and comprehensive system testing",
    },
    faqs: [
      {
        question: "What makes bridge verification unique?",
        answer:
          "Bridge verification requires understanding both protocols, protocol conversion mechanisms, data integrity across domains, and system-level integration challenges.",
      },
    ],
    materials: [
      {
        type: "Bridge Specifications",
        title: "AHB2AXI Bridge Documentation",
        description: "Detailed bridge specifications and implementation guidelines",
      },
    ],
    certificate: {
      title: "Bridge Verification Specialist Certificate",
      description: "Validates expertise in AHB2AXI bridge verification and system integration",
      features: [
        "Specialized bridge verification certification",
        "System-level verification validation",
        "Industry-recognized expertise",
        "Advanced verification methodology",
      ],
    },
    videos: [
      {
        id: 1,
        title: "AHB2AXI Bridge Overview",
        duration: "18:45",
        description: "Introduction to bridge architecture and verification challenges",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 8,
    title: "On-Chip AMBA BUS AXI2AHB Bridge Verification",
    description: "Specialized verification of AXI to AHB bridge designs for on-chip interconnect systems.",
    category: "Verification",
    price: 289,
    rating: 4.6,
    students: 634,
    trainer: {
      name: "Ms. Kavya Reddy",
      title: "Senior Verification Engineer",
      experience: "12+ years in Bridge Verification",
      education: "M.Tech in VLSI Design, IIT Hyderabad",
      specialization: "AXI2AHB Bridge Verification, Protocol Conversion, System Integration",
      bio: "Kavya is an expert in bridge verification with extensive experience in AXI to AHB protocol conversion and system-level verification.",
    },
    duration: "11 weeks",
    weeks: 11,
    image: "/course8.png",
    overview: {
      welcome: "Welcome to AXI2AHB Bridge Verification Course!",
      description:
        "Master the verification of AXI to AHB bridge designs for modern SoC interconnect systems. Learn advanced verification techniques for reverse protocol conversion and system integration.",
      objectives: [
        "Understand AXI2AHB bridge architecture",
        "Master reverse protocol conversion verification",
        "Implement comprehensive test scenarios",
        "Learn system-level integration testing",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "AXI2AHB Bridge Fundamentals",
        topics: [
          "AXI2AHB bridge overview",
          "Reverse protocol conversion",
          "Bridge design challenges",
          "Performance considerations",
        ],
      },
    ],
    schedule: {
      duration: "11 weeks (22 sessions, 2 per week)",
      sessions: "Live sessions + bridge verification labs",
      mode: "Hands-on verification with real bridge implementations",
      tools: ["Questa Sim", "VCS", "Bridge verification IP", "Protocol analyzers"],
      fee: 289,
      breakdown: "AXI2AHB specific verification projects and comprehensive testing methodologies",
    },
    faqs: [
      {
        question: "How is AXI2AHB different from AHB2AXI verification?",
        answer:
          "AXI2AHB involves reverse protocol conversion with different challenges in handling AXI's advanced features when converting to simpler AHB protocol.",
      },
    ],
    materials: [
      {
        type: "Bridge Models",
        title: "AXI2AHB Bridge IP",
        description: "Complete bridge models and verification IP for hands-on learning",
      },
    ],
    certificate: {
      title: "AXI2AHB Bridge Verification Expert Certificate",
      description: "Validates expertise in AXI2AHB bridge verification and protocol conversion",
      features: [
        "Reverse bridge verification certification",
        "Protocol conversion expertise",
        "System integration validation",
        "Industry recognition",
      ],
    },
    videos: [
      {
        id: 1,
        title: "AXI2AHB Bridge Introduction",
        duration: "22:30",
        description: "Overview of AXI to AHB bridge architecture and verification",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 9,
    title: "On-Chip AMBA BUS AHB2APB Bridge Verification",
    description: "Comprehensive verification of AHB to APB bridge designs for peripheral interface systems.",
    category: "Verification",
    price: 259,
    rating: 4.5,
    students: 567,
    trainer: {
      name: "Mr. Arjun Kumar",
      title: "Bridge Verification Specialist",
      experience: "10+ years in AMBA Bridge Verification",
      education: "M.Tech in Electronics, IIT Delhi",
      specialization: "AHB2APB Bridge, Peripheral Verification, System Integration",
      bio: "Arjun specializes in AHB to APB bridge verification with extensive experience in peripheral interface verification and system integration.",
    },
    duration: "9 weeks",
    weeks: 9,
    image: "/course9.png",
    overview: {
      welcome: "Welcome to AHB2APB Bridge Verification Course!",
      description:
        "Master the verification of AHB to APB bridge designs for peripheral interface systems. Learn verification techniques for high-speed to low-speed protocol conversion.",
      objectives: [
        "Understand AHB2APB bridge functionality",
        "Master peripheral interface verification",
        "Learn protocol downgrade verification",
        "Implement comprehensive bridge testing",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "AHB2APB Bridge Overview",
        topics: [
          "AHB2APB bridge architecture",
          "Protocol downgrade concepts",
          "Peripheral interface requirements",
          "Bridge timing considerations",
        ],
      },
    ],
    schedule: {
      duration: "9 weeks (18 sessions, 2 per week)",
      sessions: "Interactive sessions + peripheral verification labs",
      mode: "Practical verification with real peripheral interfaces",
      tools: ["Simulation tools", "Bridge verification IP", "Protocol checkers", "Debug tools"],
      fee: 259,
      breakdown: "AHB2APB bridge verification projects and peripheral interface testing",
    },
    faqs: [
      {
        question: "What is unique about AHB2APB bridge verification?",
        answer:
          "AHB2APB verification focuses on protocol downgrade from high-speed AHB to simple APB, ensuring proper peripheral access and timing compliance.",
      },
    ],
    materials: [
      {
        type: "Bridge IP",
        title: "AHB2APB Verification IP",
        description: "Complete verification IP and testbench components for AHB2APB bridges",
      },
    ],
    certificate: {
      title: "AHB2APB Bridge Verification Certificate",
      description: "Validates expertise in AHB2APB bridge verification and peripheral interfaces",
      features: [
        "Bridge verification certification",
        "Peripheral interface expertise",
        "Protocol conversion validation",
        "Industry standard recognition",
      ],
    },
    videos: [
      {
        id: 1,
        title: "AHB2APB Bridge Fundamentals",
        duration: "19:45",
        description: "Introduction to AHB2APB bridge verification concepts",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 10,
    title: "On-Chip AMBA BUS AHB-LITE DECODER Bridge Verification",
    description:
      "Specialized verification of AHB-LITE decoder bridge designs for address decoding and routing systems.",
    category: "Verification",
    price: 239,
    rating: 4.4,
    students: 423,
    trainer: {
      name: "Dr. Meera Nair",
      title: "System Verification Lead",
      experience: "11+ years in System and Bridge Verification",
      education: "Ph.D. in VLSI Design, IISc Bangalore",
      specialization: "AHB-LITE Decoder, Address Decoding, System Verification",
      bio: "Dr. Meera is an expert in system-level verification with focus on AHB-LITE decoder bridges and address routing verification.",
    },
    duration: "8 weeks",
    weeks: 8,
    image: "/course10.png",
    overview: {
      welcome: "Welcome to AHB-LITE DECODER Bridge Verification Course!",
      description:
        "Master the verification of AHB-LITE decoder bridge designs for address decoding and routing systems. Learn verification techniques for multi-slave systems and address mapping.",
      objectives: [
        "Understand AHB-LITE decoder functionality",
        "Master address decoding verification",
        "Learn multi-slave system verification",
        "Implement routing verification strategies",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "AHB-LITE Decoder Fundamentals",
        topics: [
          "AHB-LITE decoder overview",
          "Address decoding concepts",
          "Multi-slave system architecture",
          "Routing mechanisms",
        ],
      },
    ],
    schedule: {
      duration: "8 weeks (16 sessions, 2 per week)",
      sessions: "Live sessions + decoder verification labs",
      mode: "Hands-on verification with multi-slave systems",
      tools: ["SystemVerilog", "UVM", "Decoder verification IP", "Address analyzers"],
      fee: 239,
      breakdown: "Decoder verification projects and multi-slave system testing",
    },
    faqs: [
      {
        question: "What is AHB-LITE decoder verification?",
        answer:
          "AHB-LITE decoder verification focuses on validating address decoding logic, slave selection, and proper routing in multi-slave systems.",
      },
    ],
    materials: [
      {
        type: "Decoder Models",
        title: "AHB-LITE Decoder IP",
        description: "Complete decoder models and verification components",
      },
    ],
    certificate: {
      title: "AHB-LITE Decoder Verification Certificate",
      description: "Validates expertise in AHB-LITE decoder verification and address routing",
      features: [
        "Decoder verification certification",
        "Address routing expertise",
        "Multi-slave system validation",
        "System verification skills",
      ],
    },
    videos: [
      {
        id: 1,
        title: "AHB-LITE Decoder Overview",
        duration: "17:20",
        description: "Introduction to AHB-LITE decoder verification",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 11,
    title: "On-Chip AMBA BUS AHB-LITE2AHB CONVERTOR Bridge Verification",
    description: "Verification of AHB-LITE to AHB converter bridge designs for protocol compatibility systems.",
    category: "Verification",
    price: 269,
    rating: 4.3,
    students: 389,
    trainer: {
      name: "Mr. Rohit Sharma",
      title: "Protocol Verification Engineer",
      experience: "9+ years in Protocol Bridge Verification",
      education: "M.Tech in VLSI, NIT Calicut",
      specialization: "AHB-LITE2AHB Conversion, Protocol Compatibility, Bridge Verification",
      bio: "Rohit specializes in protocol conversion verification with expertise in AHB-LITE to AHB converter bridges and compatibility testing.",
    },
    duration: "10 weeks",
    weeks: 10,
    image: "/course11.png",
    overview: {
      welcome: "Welcome to AHB-LITE2AHB CONVERTOR Bridge Verification Course!",
      description:
        "Master the verification of AHB-LITE to AHB converter bridge designs for protocol compatibility systems. Learn verification techniques for protocol enhancement and feature addition.",
      objectives: [
        "Understand AHB-LITE2AHB conversion",
        "Master protocol enhancement verification",
        "Learn compatibility testing techniques",
        "Implement converter bridge verification",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "AHB-LITE2AHB Converter Fundamentals",
        topics: [
          "AHB-LITE vs AHB differences",
          "Protocol conversion requirements",
          "Feature enhancement concepts",
          "Converter bridge architecture",
        ],
      },
    ],
    schedule: {
      duration: "10 weeks (20 sessions, 2 per week)",
      sessions: "Interactive sessions + converter verification labs",
      mode: "Practical verification with protocol conversion",
      tools: ["Verification tools", "Protocol analyzers", "Converter IP", "Debug utilities"],
      fee: 269,
      breakdown: "Converter bridge verification projects and protocol compatibility testing",
    },
    faqs: [
      {
        question: "Why is AHB-LITE2AHB conversion needed?",
        answer:
          "AHB-LITE2AHB conversion is needed to interface AHB-LITE masters with full AHB systems, adding features like split transactions and retry responses.",
      },
    ],
    materials: [
      {
        type: "Converter IP",
        title: "AHB-LITE2AHB Converter Models",
        description: "Complete converter bridge models and verification IP",
      },
    ],
    certificate: {
      title: "AHB-LITE2AHB Converter Verification Certificate",
      description: "Validates expertise in protocol converter verification and compatibility testing",
      features: [
        "Protocol converter certification",
        "Compatibility testing expertise",
        "Bridge verification validation",
        "System integration skills",
      ],
    },
    videos: [
      {
        id: 1,
        title: "AHB-LITE2AHB Converter Introduction",
        duration: "21:15",
        description: "Overview of AHB-LITE to AHB converter verification",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
  {
    id: 12,
    title: "Embedded and IoT",
    description: "Comprehensive course on embedded systems design and IoT applications with hands-on projects.",
    category: "Embedded Systems",
    price: 229,
    rating: 4.5,
    students: 567,
    trainer: {
      name: "Mr. Karthik Nair",
      title: "Embedded Systems Architect",
      experience: "11+ years in Embedded and IoT Development",
      education: "M.Tech in Embedded Systems, BITS Pilani",
      specialization: "IoT Architecture, Embedded Programming, Wireless Communication",
      bio: "Karthik is an embedded systems expert with extensive experience in IoT product development and has led multiple successful IoT deployments.",
    },
    duration: "10 weeks",
    weeks: 10,
    image: "/course12.png",
    overview: {
      welcome: "Welcome to Embedded and IoT Course!",
      description:
        "Master embedded systems design and IoT applications. Learn microcontroller programming, sensor integration, wireless communication, and cloud connectivity.",
      objectives: [
        "Understand embedded systems architecture",
        "Master microcontroller programming",
        "Learn IoT protocols and communication",
        "Develop complete IoT applications",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Embedded Systems Fundamentals",
        topics: ["Embedded systems overview", "Microcontroller architecture", "Memory systems", "I/O interfacing"],
      },
    ],
    schedule: {
      duration: "10 weeks (20 sessions, 2 per week)",
      sessions: "Hands-on development + IoT project work",
      mode: "Project-based learning with real hardware",
      tools: ["Arduino/ESP32", "Raspberry Pi", "Cloud platforms", "Development tools"],
      fee: 229,
      breakdown: "Hardware projects, IoT system development, and complete end-to-end application implementation",
    },
    faqs: [
      {
        question: "Do I need prior embedded programming experience?",
        answer:
          "Basic C programming knowledge is helpful but not mandatory. We'll cover embedded programming from fundamentals to advanced concepts.",
      },
    ],
    materials: [
      {
        type: "Hardware Kits",
        title: "IoT Development Kits",
        description: "Complete hardware kits with microcontrollers, sensors, and communication modules",
      },
    ],
    certificate: {
      title: "Embedded and IoT Developer Certificate",
      description: "Validates skills in embedded systems and IoT application development",
      features: [
        "Embedded systems certification",
        "IoT development validation",
        "Hardware-software integration",
        "Industry project experience",
      ],
    },
    videos: [
      {
        id: 1,
        title: "Embedded Systems Introduction",
        duration: "19:30",
        description: "Overview of embedded systems and IoT applications",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
    ],
  },
]

export function getCourseById(id: number): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

export function getAllCourses(): Course[] {
  return coursesData
}

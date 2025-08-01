export interface Course {
  id: number
  title: string
  description: string
  category: string
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
    stages?: {
      stage: string
      description: string
      duration: string
    }[]
  }
  faqs: {
    question: string
    answer: string
  }[]
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Design Verification",
    description:
      "The primary objective of the Design Verification Course is to equip engineers and VLSI professionals with the skills and methodologies necessary to validate the correctness, performance, and reliability of digital designs before fabrication. This course provides a comprehensive understanding of design verification concepts, methodologies, and practical skills required to verify digital designs effectively. The course focuses on industry-standard verification techniques, languages, and tools such as SystemVerilog, UVM (Universal Verification Methodology), and Assertion-Based Verification.",
    category: "VLSI Design",
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
          "RAM, ROM, FIFO – Synchronous and asynchronous, FIFO depth calculation",
          "Setup and Hold time, Frequency divisions",
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
  },
  {
    id: 2,
    title: "Design For Testability",
    description:
      "Design For Testability is a specialization in the SOC design cycle, which facilitates design for detecting manufacturing defects. With the increase in size and complexity of chips, facilitated by the advancement of manufacturing technologies, Design for Testability has evolved as a specialization in itself over a period of time. In the design for Test Course the importance is given to cover the concepts, methodology thoroughly with the right emphasis on hands-on training, using Synopsys DFT Tools with at least 50% time allocated to lab Sessions.",
    category: "VLSI Design",
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
    duration: "24 weeks",
    weeks: 24,
    image: "/course2.png",
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
          "RAM, ROM, FIFO – Synchronous and asynchronous, FIFO depth calculation",
          "Setup and Hold time, Frequency divisions",
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
        title: "Introduction To DFT, DFT Basics",
        topics: ["ASIC FLOW", "DFT Basics", "Chip Fabrication process", "ATE Basics"],
      },
      {
        week: 8,
        title: "Scan Insertion",
        topics: [
          "Scan Architecture overview",
          "Scan design basics",
          "Scan Golden Rules",
          "Scan DRC Checks",
          "Scan Insertion",
          "Generate test protocol and understanding",
          "Lock-Up Latches",
        ],
      },
      {
        week: 9,
        title: "Scan Compression",
        topics: ["Basics /Need for compression", "Compression Techniques", "On-Chip-Clocking", "At-Speed Testing"],
      },
      {
        week: 10,
        title: "Hierarchical Scan And Boundary Scan",
        topics: ["Hierarchical Scan", "Bscan (Boundary Scan)", "jtag 1149.1"],
      },
      {
        week: 11,
        title: "Introduction To ATPG, ATPG Basics",
        topics: ["ATPG Basics", "Faults Collapsing", "ATPG Algorithms"],
      },
      {
        week: 12,
        title: "Fault Models, Fault Classes",
        topics: ["Fault Models", "ATPG DRC", "Fault Classes", "ATPG"],
      },
      {
        week: 13,
        title: "Pattern Generation and Simulations",
        topics: ["Simulation basics", "ATPG Simulations", "Coverage Improvement"],
      },
      {
        week: 14,
        title: "At-Speed ATPG and Simulations",
        topics: ["At-Speed ATPG", "LOC and LOS", "At-Speed Simulations"],
      },
      {
        week: 15,
        title: "Simulations and Debugging",
        topics: ["Scan Simulations Debug", "Diagnosis Flow", "Fault Simulation"],
      },
      {
        week: 16,
        title: "BIST",
        topics: ["BIST Architecture", "Memory BIST", "Logic BIST"],
      },
      {
        week: 17,
        title: "Project - Week 1",
        topics: ["DFT implementation project setup", "Scan insertion practical", "Tool setup and environment"],
      },
      {
        week: 18,
        title: "Project - Week 2",
        topics: ["ATPG pattern generation", "Coverage analysis", "Debug and optimization"],
      },
      {
        week: 19,
        title: "Project - Week 3",
        topics: ["At-speed testing implementation", "BIST implementation", "Final project completion"],
      },
      {
        week: 20,
        title: "Project - Week 4",
        topics: ["Project documentation", "Results analysis", "Presentation preparation"],
      },
      {
        week: 21,
        title: "Working in Live Project - Week 1",
        topics: ["Real-world DFT projects", "Industry-standard flows", "Project planning and setup"],
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
      sessions: "Live sessions + practical labs",
      mode: "Hands-on DFT implementation with real designs",
      tools: ["Synopsys DFT Compiler", "Cadence Modus", "TetraMAX", "Test tools"],
      fee: 199,
      breakdown:
        "Weekly assignments and Module Assessments will be conducted. Assessments will be in the form of written test / Presentation / MCQ / Coding.",
    },
    faqs: [
      {
        question: "Who should take this course?",
        answer:
          "This course is ideal for VLSI/ASIC/FPGA design engineers, Verification engineers transitioning into DFT roles, Electrical/Electronics engineering students, and Professionals preparing for roles in semiconductor test and product engineering.",
      },
      {
        question: "What are the prerequisites?",
        answer:
          "You should have basic knowledge of Digital Electronics, familiarity with Verilog/VHDL, and some exposure to ASIC design flow and timing concepts.",
      },
      {
        question: "Is the course theoretical or hands-on?",
        answer:
          "The course is a blend of theory and hands-on labs. You will use tools like DFTAdvisor, FastScan, or Tessent, insert scan chains, generate patterns, and simulate faults, and work on a DFT-enabled RTL-to-GDS flow.",
      },
      {
        question: "What kind of projects will I work on?",
        answer:
          "Example projects include scan insertion and ATPG pattern generation for an RTL block, fault coverage analysis and improvement, BIST controller design and implementation, and boundary scan implementation for a SoC block.",
      },
      {
        question: "Will I get a certificate?",
        answer:
          "Yes. Upon successful completion of assignments and final project, a Certificate of Completion will be issued.",
      },
      {
        question: "Are there career opportunities in DFT?",
        answer:
          "Absolutely. DFT is a core specialization in the semiconductor industry. Roles include DFT Engineer, Test/Validation Engineer, Product Engineer, and SoC Integration Engineer (with DFT knowledge).",
      },
    ],
  },
  {
    id: 3,
    title: "Physical Design",
    description:
      "The VLSI Physical Design course explains how a high-level hardware design turns into a layout ready for chip fabrication. Covering the entire backend flow — from floorplanning, placement to routing and timing closure. Students learn about power planning, clock tree synthesis, DRC/LVS verification, and sign-off methodologies. This course is designed for students with a basic understanding of digital electronics, Verilog and CMOS concepts for them to handle critical roles in semiconductor design teams.",
    category: "Physical Design",
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
    duration: "24 weeks",
    weeks: 24,
    image: "/course3.png",
    syllabus: [
      {
        week: 1,
        title: "Review of Digital Electronics and Logic Design - Week 1",
        topics: [
          "Digital logic fundamentals",
          "Boolean algebra and logic gates",
          "Combinational circuit design",
          "Introduction to Verilog HDL",
        ],
      },
      {
        week: 2,
        title: "Review of Digital Electronics and Logic Design - Week 2",
        topics: [
          "Sequential circuit design",
          "Flip-flops and latches",
          "Finite state machines",
          "Verilog modeling techniques",
        ],
      },
      {
        week: 3,
        title: "System Design using Verilog HDL - Week 1",
        topics: [
          "Advanced Verilog constructs",
          "Testbench development",
          "Simulation and debugging",
          "Synthesis considerations",
        ],
      },
      {
        week: 4,
        title: "System Design using Verilog HDL - Week 2",
        topics: [
          "Memory design and modeling",
          "Clock domain crossing",
          "Design for synthesis",
          "RTL coding guidelines",
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
        title: "STA and Sign-off - Week 1",
        topics: [
          "Advanced timing analysis",
          "Multi-corner multi-mode analysis",
          "Timing optimization techniques",
          "Sign-off timing closure",
        ],
      },
      {
        week: 18,
        title: "STA and Sign-off - Week 2",
        topics: [
          "Power analysis and optimization",
          "Signal integrity analysis",
          "Final verification and sign-off",
          "Tape-out preparation",
        ],
      },
      {
        week: 19,
        title: "STA and Sign-off - Week 3",
        topics: [
          "Advanced node challenges",
          "Variability and yield optimization",
          "Manufacturing considerations",
          "Final sign-off procedures",
        ],
      },
      {
        week: 20,
        title: "STA and Sign-off - Week 4",
        topics: [
          "Complete sign-off flow",
          "Final verification checks",
          "GDSII generation and validation",
          "Manufacturing handoff procedures",
        ],
      },
      {
        week: 21,
        title: "Working in Live Project - Week 1",
        topics: [
          "Real-world physical design projects",
          "Complete backend flow execution",
          "Project planning and setup",
          "Tool setup and environment",
        ],
      },
      {
        week: 22,
        title: "Working in Live Project - Week 2",
        topics: [
          "Implementation and debugging",
          "Performance optimization",
          "Coverage analysis and optimization",
          "Code review and best practices",
        ],
      },
      {
        week: 23,
        title: "Working in Live Project - Week 3",
        topics: [
          "Final project completion",
          "Documentation and presentation",
          "Project evaluation and feedback",
          "Industry best practices",
        ],
      },
      {
        week: 24,
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
      duration: "24 weeks (48 sessions, 2 per week)",
      sessions: "Live sessions + extensive lab work + project implementation",
      mode: "Comprehensive hands-on learning with real physical design projects",
      tools: ["Cadence Innovus", "Synopsys IC Compiler", "Calibre", "PrimeTime", "Physical verification tools"],
      fee: 289,
      breakdown:
        "8-stage learning approach: Digital Logic & Verilog (4 weeks), Linux & Scripting (2 weeks), Physical Design Theory (10 weeks), STA and Sign-off (4 weeks), Live Project Work (3 weeks), Interview Preparation (1 week)",
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
  },
  {
    id: 4,
    title: "FPGA Based System Design",
    description:
      "The FPGA Based System Design course aims to equip students with a solid foundation in designing and implementing digital systems using Field Programmable Gate Arrays (FPGAs). The course focuses on teaching hardware description languages like Verilog or VHDL for modeling and simulating digital logic, along with practical exposure to FPGA toolchains for synthesis, place-and-route, and implementation. Candidates will learn to build system-level designs by integrating IP cores, soft-core processors, and custom hardware accelerators. Emphasis is placed on hands-on development using industry-standard FPGA platforms, enabling learners to prototype embedded systems that combine both hardware and software components.",
    category: "FPGA",
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
        title: "FPGA Architecture & Tools",
        topics: [
          "Overview of FPGA & CPLD",
          "Architecture of popular FPGAs (Xilinx/Intel Lattice)",
          "CLBs, LUTs, FFs, DSP Blocks, BRAM, IOs",
          "Introduction to Vivado / Quartus Prime / Diamond",
        ],
      },
      {
        week: 6,
        title: "Simulation & Synthesis",
        topics: [
          "Functional Simulation (ModelSim/XSIM)",
          "Timing Simulation",
          "Synthesis Flow & Constraints",
          "Netlist, RTL Schematic, Technology Mapping",
        ],
      },
      {
        week: 7,
        title: "FPGA Implementation Flow",
        topics: [
          "Floorplanning, Timing Constraints (XDC)",
          "Clocking & Reset Strategies",
          "Static Timing Analysis",
          "Bitstream Generation",
          "On-chip Debugging (ILA/Chipscope)",
        ],
      },
      {
        week: 8,
        title: "Protocol Implementation on FPGA",
        topics: ["AXI/AHB Bus Overview", "Interfacing with ADC/DAC and Sensors"],
      },
      {
        week: 9,
        title: "Embedded System on FPGA",
        topics: ["MicroBlaze / Nios II Processor Integration"],
      },
      {
        week: 10,
        title: "Real-Time Projects (Hands-On) - Week 1",
        topics: ["Project 1: Traffic Light Controller (FSM)", "Project 2: Audio/Video Processing (Basic)"],
      },
      {
        week: 11,
        title: "Real-Time Projects (Hands-On) - Week 2",
        topics: ["Project 3: Sensor Interfacing (e.g., DHT11 or MPU6050)", "Project 4: AXI-based Custom IP in Vivado"],
      },
      {
        week: 12,
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
      duration: "12 weeks (24 sessions, 2 per week)",
      sessions: "Project-based learning with real FPGA boards",
      mode: "Hands-on FPGA development + design projects",
      tools: ["Xilinx Vivado", "Intel Quartus", "ModelSim", "FPGA development boards"],
      fee: 299,
      breakdown: "FPGA design projects, implementation exercises, and comprehensive system development",
    },
    faqs: [
      {
        question: "What is the objective of this course?",
        answer:
          "The course aims to provide hands-on, industry-relevant skills in FPGA System Design, focusing on RTL coding, simulation, synthesis, and real-time project implementation using Verilog and popular FPGA toolchains like Xilinx Vivado or Intel Quartus.",
      },
      {
        question: "Who can enroll in this course?",
        answer:
          "B.E./B.Tech/M.E./M.Tech students from ECE, EEE, Instrumentation, Working professionals looking to switch to FPGA/VLSI domain, Faculty members upskilling in Digital/Embedded domains, and Fresh graduates aiming for core hardware jobs.",
      },
      {
        question: "Do I need prior knowledge of Verilog or FPGA?",
        answer:
          "No prior FPGA experience is required. Basic digital electronics knowledge (gates, flip-flops, counters, FSMs) is recommended. The course starts from fundamentals and moves to advanced topics.",
      },
      {
        question: "What tools and software will I learn?",
        answer:
          "Xilinx Vivado or Intel Quartus Prime (depending on FPGA board), ModelSim/QuestaSim for simulation, Git/GitHub (basic version control), and optionally: Vivado IP Integrator, MicroBlaze/Nios II.",
      },
      {
        question: "Will I get hands-on experience?",
        answer:
          "Yes, this is a project-driven course. Students will implement multiple real-time digital systems and communication protocols on FPGA, along with testbenches and simulations.",
      },
      {
        question: "Is hardware mandatory for this course?",
        answer: "Yes.",
      },
      {
        question: "What are the key job roles after this course?",
        answer: "FPGA Design Engineer, RTL Design Engineer, Embedded FPGA Developer.",
      },
      {
        question: "Will I get a certificate?",
        answer:
          "Yes, participants will receive a course completion certificate. For those completing all project submissions, a Project Excellence Certificate will also be awarded.",
      },
      {
        question: "Will this help in VLSI/FPGA job interviews?",
        answer:
          "Absolutely. The course includes interview preparation, resume review, and mock interviews focused on RTL, FPGA, and system design topics commonly asked in companies like Intel, Xilinx, AMD, Wipro, Tata Elxsi, etc.",
      },
      {
        question: "Is placement assistance provided?",
        answer:
          "Yes, job-oriented batches may include: Resume forwarding to hiring partners, Mock interviews, and Job alerts in FPGA/VLSI domain. (Note: Final selection depends on individual performance and company criteria.)",
      },
    ],
  },
  {
    id: 5,
    title: "Gate Level Simulation",
    description:
      "This course is designed to provide a comprehensive understanding of Gate-Level Simulation (GLS) - a critical verification step in the ASIC design flow that ensures the synthesized netlist behaves functionally equivalent to the RTL, meets timing, and integrates correctly with the back-end flow. Learners will gain in-depth knowledge of how GLS fits into the ASIC design and verification lifecycle, focusing on the transition from RTL to synthesized gate-level netlist, and addressing timing verification, power-aware simulation, glitch detection, and X-propagation handling. The course covers functional and timing simulation using Standard Delay Format (SDF), setup for zero-delay and annotated simulations, as well as techniques to debug mismatches between RTL and post-synthesis behavior. It emphasizes practical setup, scripting, waveform analysis, and identifying issues such as uninitialized signals and race conditions. Participants will simulate both clean and X-check-enabled GLS environments using industry tools like VCS, ModelSim, or QuestaSim, and understand how to validate the final netlist before tape-out.",
    category: "VLSI Design",
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
    duration: "4 Weeks",
    weeks: 4,
    image: "/course5.png",
    syllabus: [
      {
        week: 1,
        title: "Introduction to GLS & ASIC Flow",
        topics: [
          "ASIC design and verification flow overview",
          "Role of Gate-Level Simulation in sign-off",
          "Netlist generation: RTL → synthesis → gate-level netlist",
          "Types of simulations: RTL vs GLS vs Post-layout",
          "Zero-delay and unit-delay simulations",
          "Reading and understanding the synthesized netlist",
          "Lab: Simulate a basic netlist with zero delay",
        ],
      },
      {
        week: 2,
        title: "SDF and Timing-Back-Annotation",
        topics: [
          "Introduction to SDF (Standard Delay Format)",
          "Setup of SDF-annotated GLS: tools, options, and configurations",
          "File hierarchy: .v, .sdf, .sdc, .spef",
          "SDF annotation modes: max, min, typical",
          "Gate-level timing violations: setup, hold, and path delays",
          "Lab: Simulate with SDF annotation and debug violations",
        ],
      },
      {
        week: 3,
        title: "X-Propagation, Glitch Handling & Scan Insertion",
        topics: [
          "Causes of X-propagation in gate-level simulation",
          "Simulation options: +no_notifier, +transport_path, +delay_mode",
          "Glitch detection and uninitialized net behavior",
          "Reset sequencing and power-up conditions",
          "Lab: Debug an X-mismatch and simulate scan-enabled netlist",
        ],
      },
      {
        week: 4,
        title: "Debug, Sign-off, and Project Work",
        topics: [
          "Debugging tools and techniques: waveform viewers, logs",
          "Integration of GLS in regression flow",
          "Final checklist before tape-out: LINT, CDC, timing, and GLS",
          "Final Project: End-to-end GLS setup and simulation",
          "Interview preparation: GLS-related questions and scenarios",
          "Lab: Full GLS simulation with waveform analysis and report generation",
        ],
      },
    ],
    schedule: {
      duration: "4 Weeks",
      stages: [
        {
          stage: "I",
          description: "Introduction to GLS & ASIC Flow",
          duration: "1 Week",
        },
        {
          stage: "II",
          description: "SDF and Timing-Back-Annotation",
          duration: "1 Week",
        },
        {
          stage: "III",
          description: "X-Propagation, Glitch Handling",
          duration: "1 Week",
        },
        {
          stage: "IV",
          description: "Debug, Sign-off, and Project Work",
          duration: "1 Week",
        },
      ],
      sessions: "Live sessions + practical labs",
      mode: "Interactive online sessions with real-time protocol analysis",
      tools: ["VCS", "ModelSim", "QuestaSim"],
      fee: 299,
      breakdown: "Weekly assignments and Assessments will be conducted.",
    },
    faqs: [
      {
        question: "Who should take this course?",
        answer:
          "Design Verification Engineers, DFT Engineers, Physical Design and STA Engineers, and graduate students preparing for RTL-to-GDSII flow roles.",
      },
      {
        question: "What are the prerequisites?",
        answer:
          "Basic knowledge of digital logic design, familiarity with Verilog/SystemVerilog, and some exposure to simulation tools like ModelSim, VCS, or QuestaSim.",
      },
      {
        question: "What are the key tools used?",
        answer:
          "Simulators: VCS, ModelSim, QuestaSim. Optional tools include DVE and GTKWave for waveform analysis. Formats used include Verilog netlist, SDF, and SDC.",
      },
      {
        question: "What kind of netlists are simulated?",
        answer:
          "Synthesized gate-level netlists with and without timing. Optionally, post-layout netlists with parasitic annotations are also simulated.",
      },
      {
        question: "Will this help with job interviews?",
        answer:
          "Absolutely. GLS is a critical skill for backend, DFT, and late-stage verification engineers. This course covers interview-relevant questions and practical flows.",
      },
      {
        question: "Will I receive any certificate upon completion?",
        answer:
          "Yes, after successful completion of the course, a course completion certificate is usually provided.",
      },
    ],
  },
  {
    id: 6,
    title: "AMBA IP Verification (APB, AHB, AXI) ",
    description:
      "The primary objective of AMBA protocol verification using SystemVerilog and UVM is to ensure that the design under test (DUT) strictly adheres to the protocol specifications (e.g., AXI, AHB, APB) in both functional behavior and timing. A UVM-based testbench is developed to generate legal and corner-case stimulus, using sequences to simulate various bus transactions while drivers, monitors, and scoreboards check correctness and data integrity. SystemVerilog Assertions (SVA) are integrated to enforce protocol rules such as proper handshakes, signal stability, ordering, and exclusive access conditions, catching violations early during simulation.",
    category: "Verification",
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
    duration: "4 weeks",
    weeks: 4,
    image: "/course6.png",
    syllabus: [
      {
        week: 1,
        title: "AMBA Fundamentals and APB Protocol",
        topics: [
          "Overview of AMBA and the ARM ecosystem",
          "Importance of protocols in SoC design",
          "Evolution of AMBA: APB, AHB, AXI, and ACE",
          "Use-cases and real-world applications",
          "APB signal description and timing diagram",
          "Read/write transaction flow",
          "APB use in low-bandwidth peripherals",
          "Modeling APB Master and Slave behavior",
        ],
      },
      {
        week: 2,
        title: "AHB and AXI Protocols",
        topics: [
          "AHB architecture and features",
          "Transaction types: single, burst, split, retry",
          "Bus arbitration and pipelining",
          "Designing and verifying AHB master/slave interfaces",
          "AXI features: multiple outstanding transactions, QoS, burst types",
          "AXI signal groups: Read/Write address, data, response channels",
          "AXI4 vs AXI4-Lite",
          "Transaction flow and timing diagrams",
        ],
      },
      {
        week: 3,
        title: "Building UVM Testbenches and Simulation Debug",
        topics: [
          "UVM agent development for APB/AHB/AXI",
          "Writing sequences and transaction classes",
          "Integrating UVM agents into an environment",
          "Functional and assertion-based protocol checking",
          "Using simulators (VCS/Questa/Xcelium)",
          "Waveform debugging",
          "Identifying and fixing protocol violations",
          "Log-based and GUI-based debug techniques",
        ],
      },
      {
        week: 4,
        title: "Assertions, Coverage and Capstone Project",
        topics: [
          "Binding assertions to interfaces or modules",
          "Passive checkers for protocol compliance",
          "Reusable assertion libraries for AMBA",
          "Assertion failures: debug and diagnosis",
          "Assertion coverage (assertion-based metrics)",
          "Designing covergroups for protocol verification",
          "Writing cross-coverage and coverpoints for APB/AHB/AXI",
          "Coverage-driven verification methodology",
          "Regression setup and reporting",
          "Developing a complete UVM testbench for an AMBA-compliant IP (e.g., APB UART, AHB Memory Controller, AXI DMA)",
          "Achieving functional and code coverage targets",
          "Debugging real-world issues",
          "Final report and presentation",
        ],
      },
    ],
    schedule: {
      duration: "4 weeks (8 sessions, 2 per week)",
      sessions: "Live sessions + practical labs",
      mode: "Interactive online sessions with real-time protocol analysis",
      tools: ["Questa Sim", "UVM Library", "SystemVerilog", "Protocol Analyzers"],
      fee: 249,
      breakdown: "Weekly assignments and Assessments will be conducted.",
    },
    faqs: [
      {
        question: "Who is this course intended for?",
        answer:
          "This course is designed for VLSI design and verification engineers, Students pursuing a career in semiconductor or embedded systems, Professionals looking to upskill in protocol-based verification using UVM, and Anyone with a background in digital design and basic Verilog/SystemVerilog.",
      },
      {
        question: "What are the prerequisites for this course?",
        answer:
          "Basic knowledge of Digital Electronics and Computer Architecture, Familiarity with Verilog/SystemVerilog, and Understanding of simulation tools (like ModelSim/VCS/Questa) is helpful but not mandatory.",
      },
      {
        question: "What will I learn by the end of the course?",
        answer:
          "You will be able to understand and verify AMBA protocols (APB, AHB, AXI), build a complete UVM-based testbench, write SystemVerilog test cases and sequences for AMBA-based DUTs, analyze functional coverage, assertions, and debug failures, and apply reusable verification methodologies in real-world SoC projects.",
      },
      {
        question: "Which AMBA protocols are covered in this course?",
        answer:
          "APB (Advanced Peripheral Bus), AHB (Advanced High-performance Bus), and AXI (Advanced eXtensible Interface) – including AXI4 and AXI-Lite.",
      },
      {
        question: "Will there be hands-on labs or projects?",
        answer:
          "Yes. The course includes: Lab sessions using SystemVerilog and UVM, Step-by-step projects for verifying APB, AHB, and AXI, and Debugging and simulation exercises using industry-standard tools.",
      },
      {
        question: "What tools and simulators will be used?",
        answer:
          "SystemVerilog simulators such as Mentor Questa, Synopsys VCS, or Cadence Xcelium. Open-source tools may also be introduced for practice (e.g., edaplayground).",
      },
      {
        question: "Will I get a certificate?",
        answer:
          "Yes, a certificate of completion will be provided upon: Successful completion of assignments/projects and Attendance and/or performance-based criteria.",
      },
      {
        question: "What kind of support is provided during the course?",
        answer:
          "Depending on the course provider, support may include: Instructor Q&A sessions, Forums or chat groups, and 1:1 mentorship or project reviews.",
      },
    ],
  },
  {
    id: 7,
    title: "Verification of AMBA Bridge - AHB2AXI",
    description:
      "This course is designed to equip learners with the skills and knowledge required to verify an AXI to AHB Bridge, a critical IP used in SoCs to enable communication between high-performance AXI masters and legacy AHB-based subsystems. The focus is on functional verification using SystemVerilog and UVM, with an emphasis on protocol compliance, data integrity, and performance validation. Participants will explore the AXI and AHB protocol architectures, including their handshaking, data transfer mechanisms, and transaction types. The course then dives into the design intent and functional behavior of the AXI2AHB bridge, detailing how AXI transactions are converted to AHB-compliant ones. A complete UVM-based verification environment will be developed, including stimulus generation, monitors, checkers, scoreboards, functional coverage, and assertion-based verification. Students will also gain hands-on experience in writing reusable and scalable testbenches, debugging with waveforms, and analyzing coverage metrics for verification closure.",
    category: "Verification",
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
    duration: "4 Weeks",
    weeks: 4,
    image: "/course7.png",
    syllabus: [
      {
        week: 1,
        title: "AMBA Protocols & Bridge Fundamentals",
        topics: [
          "Introduction to AMBA protocols (AXI & AHB)",
          "AXI protocol deep dive: channels, bursts, responses",
          "AHB protocol overview: timing, transfers, handshaking",
          "AXI vs AHB: key differences",
          "AXI2AHB Bridge architecture and functional behavior",
          "Lab: Simple AXI/AHB traffic generation in SystemVerilog",
        ],
      },
      {
        week: 2,
        title: "UVM Agent Development",
        topics: [
          "SystemVerilog constructs for verification",
          "UVM testbench architecture overview",
          "AXI Master UVM agent: driver, sequencer, monitor",
          "AHB Slave UVM agent: monitor and driver behavior",
          "Transaction classes and virtual interfaces",
          "Connecting agents using UVM factory and config_db",
          "Lab: AXI and AHB UVM agent development and basic test",
        ],
      },
      {
        week: 3,
        title: "Environment Integration & Testcases",
        topics: [
          "DUT integration: AXI2AHB Bridge instantiation",
          "Building UVM environment and top-level testbench",
          "Writing sequences: aligned, unaligned, bursts",
          "Scoreboard development for transaction checking",
          "Functional coverage: covergroups and sampling",
          "Assertions: interface-level and protocol assertions",
          "Lab: Directed and random testcases for bridge verification",
        ],
      },
      {
        week: 4,
        title: "Verification Closure & Project",
        topics: [
          "Advanced scenarios: back-to-back, wait states, errors",
          "Assertion and Coverage analysis and closure strategy",
          "Debugging using waveforms and logs",
          "Final project: complete AXI2AHB bridge verification",
          "Documentation and testcase checklist",
          "Interview preparation and verification FAQ",
          "Lab: Full functional verification with coverage report",
        ],
      },
    ],
    schedule: {
      duration: "4 Weeks",
      stages: [
        {
          stage: "I",
          description: "Introduction to AMBA Protocols & Bridge Fundamentals",
          duration: "1 Week",
        },
        {
          stage: "II",
          description: "UVM Agent Development",
          duration: "1 Week",
        },
        {
          stage: "III",
          description: "Environment Integration & Testcases",
          duration: "1 Week",
        },
        {
          stage: "IV",
          description: "Verification Closure & Project",
          duration: "1 Week",
        },
      ],
      sessions: "Live sessions + intensive lab work",
      mode: "Project-based learning with real bridge designs",
      tools: ["Questa Sim", "Synopsys VCS", "Formal verification tools", "Custom bridge models"],
      fee: 299,
      breakdown: "Weekly assignments and Assessments will be conducted.",
    },
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer:
          "Basic understanding of digital design and Verilog\nFamiliarity with SystemVerilog syntax\nSome exposure to UVM is helpful but not mandatory",
      },
      {
        question: "What is the main goal of this course?",
        answer:
          "To develop a complete UVM-based verification environment for the AXI2AHB bridge and understand how to test and validate its protocol conversion functionality.",
      },
      {
        question: "What tools are used during the course?",
        answer:
          "Commonly used tools include ModelSim, QuestaSim, VCS, or any simulator that supports SystemVerilog and UVM.",
      },
      {
        question: "Will I learn assertion-based verification in this course?",
        answer:
          "Yes, basic interface-level assertions and protocol assertions will be introduced and applied during bridge verification.",
      },
      {
        question: "Is this course suitable for job preparation in verification?",
        answer:
          "Absolutely. The course includes interview preparation, covers real-world SoC verification scenarios, and focuses on industry-relevant skills.",
      },
      {
        question: "Will I receive any certificate upon completion?",
        answer:
          "Yes, if this course is offered through a training institute or platform, a completion certificate is usually provided.",
      },
      {
        question: "Can I use this knowledge for other AMBA bridges?",
        answer:
          "Yes. Understanding AXI2AHB verification provides a strong foundation for verifying other AMBA bridges like AHB2AXI or AXI2APB.",
      },
    ],
  },
  {
    id: 8,
    title: "Verification of AMBA Bridge - AXI2AHB",
    description:
      "This course is designed to equip learners with the skills and knowledge required to verify an AXI to AHB Bridge, a critical IP used in SoCs to enable communication between high-performance AXI masters and legacy AHB-based subsystems. The focus is on functional verification using SystemVerilog and UVM, with an emphasis on protocol compliance, data integrity, and performance validation. Participants will explore the AXI and AHB protocol architectures, including their handshaking, data transfer mechanisms, and transaction types. The course then dives into the design intent and functional behavior of the AXI2AHB bridge, detailing how AXI transactions are converted to AHB-compliant ones. A complete UVM-based verification environment will be developed, including stimulus generation, monitors, checkers, scoreboards, functional coverage, and assertion-based verification. Students will also gain hands-on experience in writing reusable and scalable testbenches, debugging with waveforms, and analyzing coverage metrics for verification closure.",
    category: "Verification",
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
    duration: "4 Weeks",
    weeks: 4,
    image: "/course7.png",
    syllabus: [
      {
        week: 1,
        title: "AMBA Protocols & Bridge Fundamentals",
        topics: [
          "Introduction to AMBA protocols (AXI & AHB)",
          "AXI protocol deep dive: channels, bursts, responses",
          "AHB protocol overview: timing, transfers, handshaking",
          "AXI vs AHB: key differences",
          "AXI2AHB Bridge architecture and functional behavior",
          "Lab: Simple AXI/AHB traffic generation in SystemVerilog",
        ],
      },
      {
        week: 2,
        title: "UVM Agent Development",
        topics: [
          "SystemVerilog constructs for verification",
          "UVM testbench architecture overview",
          "AXI Master UVM agent: driver, sequencer, monitor",
          "AHB Slave UVM agent: monitor and driver behavior",
          "Transaction classes and virtual interfaces",
          "Connecting agents using UVM factory and config_db",
          "Lab: AXI and AHB UVM agent development and basic test",
        ],
      },
      {
        week: 3,
        title: "Environment Integration & Testcases",
        topics: [
          "DUT integration: AXI2AHB Bridge instantiation",
          "Building UVM environment and top-level testbench",
          "Writing sequences: aligned, unaligned, bursts",
          "Scoreboard development for transaction checking",
          "Functional coverage: covergroups and sampling",
          "Assertions: interface-level and protocol assertions",
          "Lab: Directed and random testcases for bridge verification",
        ],
      },
      {
        week: 4,
        title: "Verification Closure & Project",
        topics: [
          "Advanced scenarios: back-to-back, wait states, errors",
          "Assertion and Coverage analysis and closure strategy",
          "Debugging using waveforms and logs",
          "Final project: complete AXI2AHB bridge verification",
          "Documentation and testcase checklist",
          "Interview preparation and verification FAQ",
          "Lab: Full functional verification with coverage report",
        ],
      },
    ],
    schedule: {
      duration: "4 Weeks",
      stages: [
        {
          stage: "I",
          description: "Introduction to AMBA Protocols & Bridge Fundamentals",
          duration: "1 Week",
        },
        {
          stage: "II",
          description: "UVM Agent Development",
          duration: "1 Week",
        },
        {
          stage: "III",
          description: "Environment Integration & Testcases",
          duration: "1 Week",
        },
        {
          stage: "IV",
          description: "Verification Closure & Project",
          duration: "1 Week",
        },
      ],
      sessions: "Live sessions + intensive lab work",
      mode: "Project-based learning with real bridge designs",
      tools: ["Questa Sim", "Synopsys VCS", "Formal verification tools", "Custom bridge models"],
      fee: 299,
      breakdown: "Weekly assignments and Assessments will be conducted.",
    },
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer:
          "Basic understanding of digital design and Verilog\nFamiliarity with SystemVerilog syntax\nSome exposure to UVM is helpful but not mandatory",
      },
      {
        question: "What is the main goal of this course?",
        answer:
          "To develop a complete UVM-based verification environment for the AXI2AHB bridge and understand how to test and validate its protocol conversion functionality.",
      },
      {
        question: "What tools are used during the course?",
        answer:
          "Commonly used tools include ModelSim, QuestaSim, VCS, or any simulator that supports SystemVerilog and UVM.",
      },
      {
        question: "Will I learn assertion-based verification in this course?",
        answer:
          "Yes, basic interface-level assertions and protocol assertions will be introduced and applied during bridge verification.",
      },
      {
        question: "Is this course suitable for job preparation in verification?",
        answer:
          "Absolutely. The course includes interview preparation, covers real-world SoC verification scenarios, and focuses on industry-relevant skills.",
      },
      {
        question: "Will I receive any certificate upon completion?",
        answer:
          "Yes, if this course is offered through a training institute or platform, a completion certificate is usually provided.",
      },
      {
        question: "Can I use this knowledge for other AMBA bridges?",
        answer:
          "Yes. Understanding AXI2AHB verification provides a strong foundation for verifying other AMBA bridges like AHB2AXI or AXI2APB.",
      },
    ],
  },
  {
    id: 9,
    title: "Verification of AMBA Bridge - AHB2APB",
    description:
      "This course provides a comprehensive understanding of the functional verification of the AHB to APB bridge, a critical component used in SoCs to interface high-speed AHB buses with low-power APB peripherals. The course focuses on both protocol understanding and UVM-based testbench development, making it ideal for engineers aiming to master real-time SoC verification workflows. The course begins with an in-depth study of AMBA AHB and APB protocols, covering signal definitions, timing diagrams, and data transfer operations. It then delves into the AHB2APB bridge design architecture, exploring how AHB transactions are translated into APB accesses and how control logic manages the protocol differences. Participants will then learn to build a modular and reusable UVM testbench for verifying the AHB2APB bridge. Emphasis is placed on developing UVM agents, sequences, monitors, and scoreboards, along with applying assertion-based verification and functional coverage to ensure protocol and design correctness.",
    category: "Verification",
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
    duration: "4 Weeks",
    weeks: 4,
    image: "/course9.png",
    syllabus: [
      {
        week: 1,
        title: "AMBA Protocols & Bridge Architecture",
        topics: [
          "Introduction to AMBA protocols: AHB and APB",
          "AHB protocol deep dive: signals, bursts, handshaking",
          "APB protocol fundamentals: simple bus protocol, PSEL/PENABLE",
          "AHB vs APB: timing and structural differences",
          "AHB2APB Bridge architecture and control logic",
          "Use cases and placement in SoC designs",
          "Lab: Develop basic AHB/APB signal generators in SystemVerilog",
        ],
      },
      {
        week: 2,
        title: "Building UVM Agents",
        topics: [
          "SystemVerilog refresher: interfaces, OOP, classes",
          "UVM testbench architecture and simulation flow",
          "AHB Master agent development (driver, sequencer, monitor)",
          "APB Slave agent development (driver, monitor)",
          "Defining transaction classes for AHB and APB",
          "UVM configuration database and virtual interface handling",
          "Lab: Develop and test standalone AHB/APB agents",
        ],
      },
      {
        week: 3,
        title: "Integration and Verification Environment",
        topics: [
          "DUT integration: connecting AHB2APB Bridge with UVM agents",
          "Developing the UVM environment and top-level test",
          "Writing sequences: read/write, back-to-back, wait states",
          "Building scoreboard and data checking logic",
          "Functional coverage: covergroups for AHB and APB operations",
          "Assertions: signal-level and protocol compliance",
          "Lab: Run directed testcases and evaluate functional coverage",
        ],
      },
      {
        week: 4,
        title: "Project, Debug, and Closure",
        topics: [
          "Final project setup: full AHB2APB bridge verification",
          "Randomized testing and protocol stress scenarios",
          "Debug techniques: waveform analysis, log tracing",
          "Coverage closure and gap analysis",
          "Writing test plan and verification report",
          "Interview preparation: common questions in AHB/APB verification",
          "Lab: Final project execution and result review",
        ],
      },
    ],
    schedule: {
      duration: "4 Weeks",
      stages: [
        {
          stage: "I",
          description: "Introduction to AMBA Protocols & Bridge Fundamentals",
          duration: "1 Week",
        },
        {
          stage: "II",
          description: "UVM Agent Development",
          duration: "1 Week",
        },
        {
          stage: "III",
          description: "Environment Integration & Testcases",
          duration: "1 Week",
        },
        {
          stage: "IV",
          description: "Verification Closure & Project",
          duration: "1 Week",
        },
      ],
      sessions: "Interactive sessions + peripheral verification labs",
      mode: "Practical verification with real peripheral interfaces",
      tools: ["Simulation tools", "Bridge verification IP", "Protocol checkers", "Debug tools"],
      fee: 259,
      breakdown: "AHB2APB bridge verification projects and peripheral interface testing",
    },
    faqs: [
      {
        question: "What is the AHB2APB bridge and why is it important?",
        answer:
          "The AHB2APB bridge connects the high-speed AHB bus to the low-power APB bus, enabling communication between a system's performance-critical core and its peripheral devices like UART, timers, and GPIO.",
      },
      {
        question: "Who should take this course?",
        answer:
          "This course is ideal for:\n•\tVLSI and embedded engineers\n•\tStudents and graduates preparing for SoC/ASIC verification roles\n•\tProfessionals upskilling in UVM and AMBA protocol verification",
      },
      {
        question: "What are the prerequisites for this course?",
        answer:
          "Basic knowledge of digital design and Verilog\n•\tFamiliarity with SystemVerilog is recommended\n•\tUVM experience is helpful ",
      },
      {
        question: "What simulators or tools are used?",
        answer:
          "The course uses industry-standard simulators like ModelSim, QuestaSim, or Synopsys VCS. Students can also work with open-source tools if needed.",
      },
      {
        question: "Will I learn to use assertions and functional coverage?",
        answer:
          "Yes. You'll implement SystemVerilog assertions (SVAs) and functional coverage to validate protocol correctness and ensure verification completeness.",
      },
      {
        question: "Will I get a certificate after completion?",
        answer:
          "Yes, after successful completion of the course, a course completion certificate is usually provided.",
      },
      {
        question: "Will this help me in job interviews?",
        answer:
          "Definitely. The course covers real-time verification scenarios, includes interview preparation, and provides experience with industry practices relevant to job roles in ASIC and IP verification.",
      },
    ],
  },
  {
    id: 10,
    title: "Verification of AHB-Lite Decoder",
    description:
      "This course is designed to provide a solid foundation in the functional verification of an AHB-Lite Decoder, a key component in AMBA-based SoCs used to decode addresses and route AHB transactions to multiple slave peripherals. The focus is on understanding both the AHB-Lite protocol and building a SystemVerilog UVM-based verification environment for the decoder. Participants will begin with a detailed study of the AMBA AHB-Lite protocol, including signal definitions, transaction types, bus arbitration, and timing behavior. The course then moves to the design and functional role of an AHB-Lite decoder, which selects target slaves based on address decoding logic. Participants will build a UVM testbench for the AHB-Lite decoder, including a master agent, a multi-slave setup, and a coverage-driven verification environment. The training will emphasize writing directed and randomized testcases, functional coverage, assertions, and using waveform debugging tools to ensure complete verification.",
    category: "Verification",
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
    duration: "4 Weeks",
    weeks: 4,
    image: "/course10.png",
    syllabus: [
      {
        week: 1,
        title: "AHB-Lite Protocol & Decoder Design",
        topics: [
          "Introduction to the AMBA family and AHB-Lite protocol",
          "AHB-Lite signals: HADDR, HTRANS, HREADY, HRESP, HWRITE, etc.",
          "Transaction types: IDLE, NONSEQ, SEQ",
          "Timing diagrams and bus cycles",
          "Address decoding logic and decoder functionality",
          "Use of decoders in SoCs with multiple slave peripherals",
          "Lab: Model a simple AHB-Lite transaction in SystemVerilog",
        ],
      },
      {
        week: 2,
        title: "UVM Agent Development",
        topics: [
          "UVM architecture overview and base classes",
          "Developing an AHB-Lite Master UVM agent",
          "Sequence item, driver, sequencer, monitor",
          "Modeling multiple AHB-Lite slaves (passive/reactive)",
          "Writing reusable transaction classes",
          "UVM configuration and virtual interface usage",
          "Lab: Simulate basic AHB read/write traffic with one slave",
        ],
      },
      {
        week: 3,
        title: "Environment Integration & Decoder Verification",
        topics: [
          "Instantiating and connecting the AHB-Lite Decoder DUT",
          "Building the UVM environment: env, agent, scoreboard",
          "Test scenarios:",
          "Valid address routing",
          "Invalid/masked address handling",
          "Back-to-back transactions",
          "Developing a reference model or decoder logic checker",
          "Coverage points: address range, HTRANS types, slave hit/miss",
          "Interface assertions to check protocol compliance",
          "Lab: Write and run directed testcases with multiple slaves",
        ],
      },
      {
        week: 4,
        title: "Advanced Testing & Project Completion",
        topics: [
          "Randomized sequences and coverage-driven verification",
          "Debugging waveform and transaction mismatches",
          "Generating functional coverage reports and merging results",
          "Final project: Full UVM testbench for AHB-Lite decoder",
          "Writing a test plan and result documentation",
          "Interview Q&A on AHB protocol and decoder logic",
          "Lab: Final verification project and review session",
        ],
      },
    ],
    schedule: {
      duration: "4 Weeks",
      stages: [
        {
          stage: "I",
          description: "AHB-Lite Protocol & Decoder Design",
          duration: "1 Week",
        },
        {
          stage: "II",
          description: "UVM Agent Development",
          duration: "1 Week",
        },
        {
          stage: "III",
          description: "Environment Integration & Decoder Verification",
          duration: "1 Week",
        },
        {
          stage: "IV",
          description: "Advanced Testing & Project Completion",
          duration: "1 Week",
        },
      ],
      sessions: "Live sessions + decoder verification labs",
      mode: "Hands-on verification with multi-slave systems",
      tools: ["SystemVerilog", "UVM", "Decoder verification IP", "Address analyzers"],
      fee: 239,
      breakdown: "Decoder verification projects and multi-slave system testing",
    },
    faqs: [
      {
        question: "What are the prerequisites?",
        answer:
          "Basic digital design and Verilog/SystemVerilog knowledge, Interest in functional verification and SoC design",
      },
      {
        question: "What tools are used in this course?",
        answer:
          "Industry-standard tools like ModelSim, QuestaSim, or VCS for simulation. You can also use open-source simulators for practice.",
      },
      {
        question: "Will I build a real verification project?",
        answer:
          "Yes, the final week involves developing a complete UVM testbench for a multi-slave AHB-Lite decoder and verifying its functionality.",
      },
      {
        question: "Will I learn assertions and coverage?",
        answer: "Yes, both SystemVerilog Assertions (SVA) and functional coverage are part of the curriculum.",
      },
      {
        question: "Is this course useful for job interviews?",
        answer:
          "Absolutely. AHB-Lite is widely used, and decoder verification is a common task in IP/SOC verification interviews. The course includes interview preparation tips as well.",
      },
      {
        question: "Will I receive any certificate upon completion?",
        answer:
          "Yes, after successful completion of the course, a course completion certificate is usually provided.",
      },
    ],
  },
  {
    id: 11,
    title: "Verification of AHB-Lite to AHB Converter",
    description: "This course is designed to provide a comprehensive understanding of Gate-Level Simulation (GLS) - a critical verification step in the ASIC design flow that ensures the synthesized netlist behaves functionally equivalent to the RTL, meets timing, and integrates correctly with the back-end flow. Learners will gain in-depth knowledge of how GLS fits into the ASIC design and verification lifecycle, focusing on the transition from RTL to synthesized gate-level netlist, and addressing timing verification, power-aware simulation, glitch detection, and X-propagation handling. The course covers functional and timing simulation using Standard Delay Format (SDF), setup for zero-delay and annotated simulations, as well as techniques to debug mismatches between RTL and post-synthesis behavior. It emphasizes practical setup, scripting, waveform analysis, and identifying issues such as uninitialized signals and race conditions. Participants will simulate both clean and X-check-enabled GLS environments using industry tools like VCS, ModelSim, or QuestaSim, and understand how to validate the final netlist before tape-out.",
    category: "Verification",
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
    duration: "4 Weeks",
    weeks: 4,
    image: "/course11.png",
    syllabus: [
      {
        week: 1,
        title: "Introduction to GLS & ASIC Flow",
        topics: [
          "ASIC design and verification flow overview",
          "Role of Gate-Level Simulation in sign-off",
          "Netlist generation: RTL → synthesis → gate-level netlist",
          "Types of simulations: RTL vs GLS vs Post-layout",
          "Zero-delay and unit-delay simulations",
          "Reading and understanding the synthesized netlist",
          "Lab: Simulate a basic netlist with zero delay",
        ],
      },
      {
        week: 2,
        title: "SDF and Timing-Back-Annotation",
        topics: [
          "Introduction to SDF (Standard Delay Format)",
          "Setup of SDF-annotated GLS: tools, options, and configurations",
          "File hierarchy: .v, .sdf, .sdc, .spef",
          "SDF annotation modes: max, min, typical",
          "Gate-level timing violations: setup, hold, and path delays",
          "Lab: Simulate with SDF annotation and debug violations",
        ],
      },
      {
        week: 3,
        title: "X-Propagation, Glitch Handling & Scan Insertion",
        topics: [
          "Causes of X-propagation in gate-level simulation",
          "Simulation options: +no_notifier, +transport_path, +delay_mode",
          "Glitch detection and uninitialized net behavior",
          "Reset sequencing and power-up conditions",
          "Lab: Debug an X-mismatch and simulate scan-enabled netlist",
        ],
      },
      {
        week: 4,
        title: "Debug, Sign-off, and Project Work",
        topics: [
          "Debugging tools and techniques: waveform viewers, logs",
          "Integration of GLS in regression flow",
          "Final checklist before tape-out: LINT, CDC, timing, and GLS",
          "Final Project: End-to-end GLS setup and simulation",
          "Interview preparation: GLS-related questions and scenarios",
          "Lab: Full GLS simulation with waveform analysis and report generation",
        ],
      },
    ],
    schedule: {
      duration: "4 Weeks",
      stages: [
        {
          stage: "I",
          description: "Introduction to GLS & ASIC Flow",
          duration: "1 Week",
        },
        {
          stage: "II",
          description: "SDF and Timing-Back-Annotation",
          duration: "1 Week",
        },
        {
          stage: "III",
          description: "X-Propagation, Glitch Handling",
          duration: "1 Week",
        },
        {
          stage: "IV",
          description: "Debug, Sign-off, and Project Work",
          duration: "1 Week",
        },
      ],
      sessions: "Live sessions + practical labs",
      mode: "Interactive online sessions with real-time protocol analysis",
      tools: ["VCS", "ModelSim", "QuestaSim"],
      fee: 299,
      breakdown: "Weekly assignments and Assessments will be conducted.",
    },
    faqs: [
      {
        question: "Who should take this course?",
        answer:
          "Design Verification Engineers, DFT Engineers, Physical Design and STA Engineers, and graduate students preparing for RTL-to-GDSII flow roles.",
      },
      {
        question: "What are the prerequisites?",
        answer:
          "Basic knowledge of digital logic design, familiarity with Verilog/SystemVerilog, and some exposure to simulation tools like ModelSim, VCS, or QuestaSim.",
      },
      {
        question: "What are the key tools used?",
        answer:
          "Simulators: VCS, ModelSim, QuestaSim. Optional tools include DVE and GTKWave for waveform analysis. Formats used include Verilog netlist, SDF, and SDC.",
      },
      {
        question: "What kind of netlists are simulated?",
        answer:
          "Synthesized gate-level netlists with and without timing. Optionally, post-layout netlists with parasitic annotations are also simulated.",
      },
      {
        question: "Will this help with job interviews?",
        answer:
          "Absolutely. GLS is a critical skill for backend, DFT, and late-stage verification engineers. This course covers interview-relevant questions and practical flows.",
      },
      {
        question: "Will I receive any certificate upon completion?",
        answer:
          "Yes, after successful completion of the course, a course completion certificate is usually provided.",
      },
    ],
  },
  {
    id: 12,
    title: "Embedded and IoT",
    description: "Comprehensive course on embedded systems design and IoT applications with hands-on projects.",
    category: "Embedded Systems",
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
    syllabus: [
      {
        week: 1,
        title: "Embedded Systems Fundamentals",
        topics: ["Embedded systems overview", "Microcontroller architecture", "Memory systems", "I/O interfacing"],
      },
      {
        week: 2,
        title: "Programming Fundamentals",
        topics: ["C programming for embedded", "Memory management", "Interrupt handling", "Real-time concepts"],
      },
      {
        week: 3,
        title: "Hardware Interfacing",
        topics: ["GPIO programming", "ADC/DAC interfacing", "Communication protocols", "Sensor integration"],
      },
      {
        week: 4,
        title: "Communication Protocols",
        topics: ["UART, SPI, I2C", "Wireless protocols", "Network communication", "Protocol implementation"],
      },
      {
        week: 5,
        title: "IoT Fundamentals",
        topics: ["IoT architecture", "Cloud connectivity", "Data transmission", "Security basics"],
      },
      {
        week: 6,
        title: "IoT Platforms",
        topics: ["Arduino/ESP32", "Raspberry Pi", "Cloud platforms", "Development environments"],
      },
      {
        week: 7,
        title: "Project Development - Phase 1",
        topics: ["Project planning", "Hardware setup", "Basic implementation", "Testing"],
      },
      {
        week: 8,
        title: "Project Development - Phase 2",
        topics: ["Advanced features", "Cloud integration", "Data analytics", "User interface"],
      },
      {
        week: 9,
        title: "System Integration",
        topics: ["Complete system testing", "Performance optimization", "Debugging", "Documentation"],
      },
      {
        week: 10,
        title: "Final Presentation",
        topics: ["Project demonstration", "Technical review", "Industry applications", "Career guidance"],
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
      {
        question: "What hardware will I work with?",
        answer:
          "Arduino, ESP32, Raspberry Pi, various sensors, and communication modules for complete IoT system development.",
      },
      {
        question: "Will I build real IoT applications?",
        answer:
          "Yes, you'll develop complete IoT applications from sensor data collection to cloud analytics and user interfaces.",
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

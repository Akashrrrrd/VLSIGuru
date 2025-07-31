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
    description: "Master gate-level simulation techniques for digital circuit verification and timing analysis.",
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
    duration: "8 weeks",
    weeks: 8,
    image: "/course5.png",
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
      {
        week: 2,
        title: "Timing Analysis Basics",
        topics: ["Setup and hold timing", "Delay calculation", "Critical path analysis", "Timing constraints"],
      },
      {
        week: 3,
        title: "Power Estimation Techniques",
        topics: ["Static power analysis", "Dynamic power calculation", "Power optimization", "Low power design"],
      },
      {
        week: 4,
        title: "Functional Verification",
        topics: ["Test pattern generation", "Coverage analysis", "Fault simulation", "Debug techniques"],
      },
      {
        week: 5,
        title: "Advanced Simulation Topics",
        topics: ["Multi-corner analysis", "Process variation", "Temperature effects", "Voltage scaling"],
      },
      {
        week: 6,
        title: "Industry Tools and Flows",
        topics: ["Commercial simulators", "Tool setup", "Script automation", "Result analysis"],
      },
      {
        week: 7,
        title: "Project Work",
        topics: ["Hands-on simulation project", "Real design analysis", "Report generation", "Optimization"],
      },
      {
        week: 8,
        title: "Final Assessment",
        topics: ["Project presentation", "Technical review", "Industry best practices", "Career guidance"],
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
      {
        question: "What are the prerequisites?",
        answer: "Basic knowledge of digital electronics, Verilog/VHDL, and computer architecture.",
      },
      {
        question: "Is this course hands-on?",
        answer: "Yes, the course includes extensive hands-on exercises using industry-standard simulation tools.",
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
    title: "Verification of AMBA Bridge AHB2AXI",
    description:
      "This course is designed to equip learners with the practical and theoretical skills needed to verify an AMBA AHB to AXI Bridge, a critical component in modern SoC interconnect systems. The bridge plays a vital role in enabling communication between modules using different protocols—AHB (Advanced High-performance Bus) and AXI (Advanced eXtensible Interface). The course takes a hands-on approach, guiding students through the design behavior of the bridge and building a SystemVerilog UVM-based verification environment to verify its correctness and compliance. The focus is on functional verification, including transaction modeling, protocol conversion validation, coverage closure, and debugging.",
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
    duration: "4 weeks",
    weeks: 4,
    image: "/course7.png",
    syllabus: [
      {
        week: 1,
        title: "Introduction to AMBA Protocols and Bridge Architecture",
        topics: [
          "Overview of AHB and AXI",
          "Signal-level and transaction-level comparison",
          "Role of AHB-AXI Bridge in SoC",
          "Read/Write operation flow through the bridge",
          "Handling protocol differences (e.g., burst types, handshakes, pipelining)",
          "Timing and latency considerations",
        ],
      },
      {
        week: 2,
        title: "SystemVerilog for Verification and Protocol Compliance",
        topics: [
          "Classes, randomization, interfaces, and assertions",
          "Writing testbenches for bridge DUTs",
          "Checking data integrity across the bridge",
          "Handling burst conversion and transaction splitting",
          "Assertions for handshake and response correctness",
        ],
      },
      {
        week: 3,
        title: "UVM-Based Verification Environment",
        topics: [
          "UVM component hierarchy: agents, sequences, monitors, scoreboards",
          "Writing reusable and modular code for AHB master and AXI slave agents",
          "Integrating UVM components to test the bridge",
        ],
      },
      {
        week: 4,
        title: "Coverage, Debugging, and Final Integration",
        topics: [
          "Functional coverage design and analysis",
          "Using waveform viewers and logs for debugging",
          "Achieving coverage closure and regression strategies",
        ],
      },],
    schedule: {
      duration: "4 weeks (8 sessions, 2 per week)",
      sessions: "Live sessions + intensive lab work",
      mode: "Project-based learning with real bridge designs",
      tools: ["Questa Sim", "Synopsys VCS", "Formal verification tools", "Custom bridge models"],
      fee: 299,
      breakdown: "Weekly assignments and Assessments will be conducted.",
    },
    faqs: [
      {
        question: "What is the AHB to AXI bridge?",
        answer:
          "It is a hardware module that enables communication between IP blocks using the AHB protocol and those using the AXI protocol, ensuring compatibility and data transfer across different AMBA interfaces.",
      },
      {
        question: "What makes this course different?",
        answer:
          "This course specifically focuses on protocol bridge verification, a real-world scenario in SoC design, using SystemVerilog and UVM, covering both technical depth and practical implementation.",
      },
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, if you already have: Basic knowledge of digital design and Some familiarity with Verilog/SystemVerilog and UVM.",
      },
      {
        question: "Will I work on real hardware or IP?",
        answer:
          "No physical hardware is required. You'll verify a synthesizable RTL model of a bridge. The course focuses on simulation and testbench development, which reflects standard industry practice.",
      },
      {
        question: "Will I get hands-on experience?",
        answer:
          "Yes, the course includes: Labs after each module, Full project from scratch, and Debugging tasks and coverage analysis.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes, upon successful completion of the course and final project submission, you'll receive a certificate of completion.",
      },
      {
        question: "Can I reuse the UVM components I build?",
        answer:
          "Yes, the UVM agents for AHB and AXI are developed as modular and reusable components, suitable for use in future IP or SoC-level verification environments.",
      },
      {
        question: "Does the course cover assertions?",
        answer:
          "Yes. You'll learn how to write SystemVerilog assertions for protocol-level checks, such as handshake timing, burst length correctness, and data/response verification.",
      },
      {
        question: "What kind of support is provided?",
        answer: "Instructor-led Q&A sessions, Debug help during labs/projects, and Community/forum support.",
      },
    ],
  },
  {
    id: 8,
    title: "Verification of AMBA Bridge AXI2AHB",
    description: "Specialized verification of AXI to AHB bridge designs for on-chip interconnect systems.",
    category: "Verification",
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
      {
        week: 2,
        title: "Protocol Analysis",
        topics: ["AXI to AHB mapping", "Signal conversion", "Timing requirements", "Error handling"],
      },
      {
        week: 3,
        title: "Verification Environment Setup",
        topics: ["UVM testbench architecture", "Agent development", "Interface design", "Test planning"],
      },
      {
        week: 4,
        title: "Test Development",
        topics: ["Basic functionality tests", "Corner case scenarios", "Error injection", "Performance tests"],
      },
      {
        week: 5,
        title: "Coverage and Assertions",
        topics: ["Functional coverage", "Code coverage", "Assertion development", "Coverage analysis"],
      },
      {
        week: 6,
        title: "Debug and Analysis",
        topics: ["Waveform analysis", "Debug techniques", "Issue resolution", "Performance tuning"],
      },
      {
        week: 7,
        title: "Advanced Topics",
        topics: ["Multi-master scenarios", "Outstanding transactions", "QoS handling", "Power considerations"],
      },
      {
        week: 8,
        title: "Integration Testing",
        topics: ["System-level testing", "Integration scenarios", "Regression testing", "Automation"],
      },
      {
        week: 9,
        title: "Project Work - Phase 1",
        topics: ["Project setup", "Initial implementation", "Basic testing", "Review and feedback"],
      },
      {
        week: 10,
        title: "Project Work - Phase 2",
        topics: ["Advanced testing", "Coverage closure", "Debug and optimization", "Documentation"],
      },
      {
        week: 11,
        title: "Final Assessment",
        topics: ["Project presentation", "Technical review", "Best practices", "Career guidance"],
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
      {
        question: "What are the prerequisites?",
        answer: "Basic knowledge of AMBA protocols, SystemVerilog, and UVM methodology.",
      },
      {
        question: "Will I get hands-on experience?",
        answer: "Yes, extensive hands-on labs and project work with real bridge designs.",
      },
    ],
  },
  {
    id: 9,
    title: "Verification of AMBA Bridge AHB2APB",
    description: "Comprehensive verification of AHB to APB bridge designs for peripheral interface systems.",
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
    duration: "9 weeks",
    weeks: 9,
    image: "/course9.png",
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
      {
        week: 2,
        title: "Protocol Fundamentals",
        topics: ["AHB protocol review", "APB protocol details", "Bridge functionality", "Design constraints"],
      },
      {
        week: 3,
        title: "Verification Planning",
        topics: ["Test plan development", "Coverage planning", "Verification strategy", "Tool selection"],
      },
      {
        week: 4,
        title: "Testbench Development",
        topics: ["UVM environment setup", "Agent development", "Sequence creation", "Scoreboard design"],
      },
      {
        week: 5,
        title: "Test Implementation",
        topics: ["Basic tests", "Error scenarios", "Edge cases", "Performance validation"],
      },
      {
        week: 6,
        title: "Coverage and Debug",
        topics: ["Coverage analysis", "Debug techniques", "Issue resolution", "Optimization"],
      },
      {
        week: 7,
        title: "Advanced Verification",
        topics: ["System integration", "Multi-peripheral testing", "Power verification", "Timing analysis"],
      },
      {
        week: 8,
        title: "Project Work",
        topics: ["Complete verification project", "Implementation", "Testing", "Documentation"],
      },
      {
        week: 9,
        title: "Final Review",
        topics: ["Project presentation", "Results analysis", "Best practices", "Industry insights"],
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
      {
        question: "What are the career opportunities?",
        answer: "Bridge verification engineer, peripheral verification specialist, system integration engineer.",
      },
      {
        question: "Is this suitable for beginners?",
        answer: "Yes, with basic knowledge of digital design and AMBA protocols. The course starts with fundamentals.",
      },
    ],
  },
  {
    id: 10,
    title: "Verification of AHB-Lite Decoder",
    description:
      "Specialized verification of AHB-LITE decoder bridge designs for address decoding and routing systems.",
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
    duration: "8 weeks",
    weeks: 8,
    image: "/course10.png",
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
      {
        week: 2,
        title: "Address Decoding Logic",
        topics: ["Address mapping", "Decode logic design", "Error handling", "Default slave response"],
      },
      {
        week: 3,
        title: "Verification Environment",
        topics: ["Testbench architecture", "Multi-slave agents", "Address generators", "Response checkers"],
      },
      {
        week: 4,
        title: "Test Development",
        topics: ["Address range tests", "Boundary conditions", "Error scenarios", "Performance tests"],
      },
      {
        week: 5,
        title: "Coverage Analysis",
        topics: ["Address coverage", "Functional coverage", "Code coverage", "Coverage closure"],
      },
      {
        week: 6,
        title: "Debug and Optimization",
        topics: ["Debug techniques", "Performance analysis", "Optimization strategies", "Best practices"],
      },
      {
        week: 7,
        title: "Project Implementation",
        topics: ["Complete decoder verification", "Multi-slave testing", "Integration scenarios", "Documentation"],
      },
      {
        week: 8,
        title: "Final Assessment",
        topics: ["Project review", "Results presentation", "Industry applications", "Career guidance"],
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
      {
        question: "What are the prerequisites?",
        answer: "Basic understanding of AMBA protocols, address decoding concepts, and verification methodologies.",
      },
      {
        question: "Will I work on real projects?",
        answer: "Yes, hands-on projects with multi-slave decoder systems and real-world scenarios.",
      },
    ],
  },
  {
    id: 11,
    title: "Verification of AHBLite to AHB Convertor ",
    description: "Verification of AHB-LITE to AHB converter bridge designs for protocol compatibility systems.",
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
    duration: "10 weeks",
    weeks: 10,
    image: "/course11.png",
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
      {
        week: 2,
        title: "Protocol Conversion Analysis",
        topics: ["Signal mapping", "Feature addition", "Timing considerations", "Compatibility issues"],
      },
      {
        week: 3,
        title: "Verification Strategy",
        topics: ["Test planning", "Coverage strategy", "Verification methodology", "Tool selection"],
      },
      {
        week: 4,
        title: "Environment Development",
        topics: ["UVM testbench", "Protocol agents", "Converters", "Monitors and scoreboards"],
      },
      {
        week: 5,
        title: "Test Implementation",
        topics: ["Basic conversion tests", "Feature verification", "Error handling", "Edge cases"],
      },
      {
        week: 6,
        title: "Advanced Testing",
        topics: ["Performance testing", "Stress scenarios", "Compatibility validation", "System integration"],
      },
      {
        week: 7,
        title: "Coverage and Debug",
        topics: ["Coverage analysis", "Debug methodologies", "Issue resolution", "Optimization"],
      },
      {
        week: 8,
        title: "Project Development",
        topics: ["Complete converter verification", "Implementation", "Testing", "Analysis"],
      },
      {
        week: 9,
        title: "Integration and Validation",
        topics: ["System-level testing", "Integration scenarios", "Final validation", "Documentation"],
      },
      {
        week: 10,
        title: "Final Review",
        topics: ["Project presentation", "Results analysis", "Industry best practices", "Career opportunities"],
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
      {
        question: "What skills will I gain?",
        answer:
          "Protocol conversion verification, compatibility testing, bridge design understanding, and system integration skills.",
      },
      {
        question: "Is this course industry-relevant?",
        answer:
          "Yes, protocol converters are widely used in modern SoC designs for backward compatibility and system integration.",
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

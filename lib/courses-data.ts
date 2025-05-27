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
    image: "/placeholder.svg?height=400&width=600",
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
      {
        week: 2,
        title: "Timing Analysis Fundamentals",
        topics: ["Setup and hold time analysis", "Clock domain crossing", "Timing constraints", "SDF annotation"],
      },
      {
        week: 3,
        title: "Simulation Methodologies",
        topics: [
          "Event-driven simulation",
          "Cycle-based simulation",
          "Mixed-signal simulation",
          "Testbench development",
        ],
      },
      {
        week: 4,
        title: "Power Analysis",
        topics: ["Static power analysis", "Dynamic power estimation", "Power-aware simulation", "Low power techniques"],
      },
      {
        week: 5,
        title: "Advanced Simulation Techniques",
        topics: ["Hierarchical simulation", "Parallel simulation", "Acceleration techniques", "Debug methodologies"],
      },
      {
        week: 6,
        title: "Industry Tools and Flows",
        topics: ["Synopsys VCS simulation", "Cadence NC-Sim", "Mentor ModelSim", "Tool comparison and selection"],
      },
      {
        week: 7,
        title: "Verification Strategies",
        topics: [
          "Coverage analysis",
          "Assertion-based verification",
          "Formal verification integration",
          "Regression testing",
        ],
      },
      {
        week: 8,
        title: "Project and Case Studies",
        topics: [
          "Real-world simulation project",
          "Performance optimization",
          "Industry best practices",
          "Final assessment",
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
      {
        question: "Is this course suitable for beginners?",
        answer:
          "This course requires basic knowledge of digital circuits and Verilog. We recommend completing our Digital Design Fundamentals course first if you're new to the field.",
      },
      {
        question: "What tools will I use?",
        answer:
          "You'll work with industry-standard tools including Synopsys VCS, Cadence NC-Sim, and Mentor ModelSim. All tool licenses are provided during the course.",
      },
    ],
    materials: [
      {
        type: "Video Lectures",
        title: "Comprehensive Video Library",
        description: "40+ hours of detailed video lectures covering all simulation concepts",
      },
      {
        type: "Lab Exercises",
        title: "Hands-on Lab Sessions",
        description: "Practical exercises using real industry tools and methodologies",
      },
      {
        type: "Reference Materials",
        title: "Industry Documentation",
        description: "Access to industry-standard documentation and best practices guides",
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
      {
        id: 2,
        title: "Digital Circuit Fundamentals",
        duration: "22:45",
        description: "Basic digital circuit concepts and gate-level representation",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "Netlist Structure and Analysis",
        duration: "18:20",
        description: "Understanding gate-level netlist structure and components",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 2,
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
    image: "/placeholder.svg?height=400&width=600",
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
      {
        week: 2,
        title: "APB Protocol Deep Dive",
        topics: ["APB signal descriptions", "APB transfer types", "APB timing requirements", "APB error handling"],
      },
      {
        week: 3,
        title: "AHB Protocol Analysis",
        topics: ["AHB signal interface", "AHB transfer types and sizes", "AHB burst operations", "AHB arbitration"],
      },
      {
        week: 4,
        title: "AXI Protocol Mastery",
        topics: ["AXI4 signal descriptions", "Read and write channels", "AXI burst types", "AXI ordering requirements"],
      },
      {
        week: 5,
        title: "SystemVerilog for Verification",
        topics: [
          "SystemVerilog classes and objects",
          "Randomization and constraints",
          "Interfaces and modports",
          "Assertions and coverage",
        ],
      },
      {
        week: 6,
        title: "UVM Methodology",
        topics: [
          "UVM testbench architecture",
          "UVM components and phases",
          "UVM sequences and drivers",
          "UVM monitors and scoreboards",
        ],
      },
      {
        week: 7,
        title: "APB Verification Environment",
        topics: [
          "APB UVM testbench development",
          "APB sequence library",
          "APB protocol checking",
          "APB coverage implementation",
        ],
      },
      {
        week: 8,
        title: "AHB Verification Environment",
        topics: [
          "AHB UVM testbench setup",
          "AHB master and slave agents",
          "AHB protocol compliance",
          "AHB performance verification",
        ],
      },
      {
        week: 9,
        title: "AXI Verification Environment",
        topics: [
          "AXI UVM testbench architecture",
          "AXI channel verification",
          "AXI ordering verification",
          "AXI performance analysis",
        ],
      },
      {
        week: 10,
        title: "Advanced Verification Techniques",
        topics: [
          "Cross-protocol verification",
          "System-level verification",
          "Formal verification integration",
          "Final project presentation",
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
      {
        question: "Do I need prior UVM experience?",
        answer:
          "Basic SystemVerilog knowledge is required. We'll teach UVM methodology from fundamentals, making it accessible for verification beginners.",
      },
      {
        question: "Will I work with real protocol IPs?",
        answer:
          "Yes, you'll work with industry-standard protocol IP models and develop complete verification environments for each protocol type.",
      },
    ],
    materials: [
      {
        type: "Protocol Specifications",
        title: "AMBA Protocol Documentation",
        description: "Complete ARM AMBA specification documents and reference materials",
      },
      {
        type: "UVM Libraries",
        title: "Verification IP Libraries",
        description: "Industry-standard UVM verification IP libraries for AMBA protocols",
      },
      {
        type: "Lab Projects",
        title: "Protocol Verification Projects",
        description: "Real-world verification projects for each protocol type",
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
      {
        id: 2,
        title: "APB Protocol Fundamentals",
        duration: "25:30",
        description: "Deep dive into APB protocol signals and timing",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "SystemVerilog for Protocol Verification",
        duration: "30:45",
        description: "SystemVerilog features essential for protocol verification",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 3,
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
    image: "/placeholder.svg?height=400&width=600",
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
      {
        week: 2,
        title: "AHB Protocol Review",
        topics: ["AHB signal interface", "AHB transfer mechanisms", "AHB burst operations", "AHB error responses"],
      },
      {
        week: 3,
        title: "AXI Protocol Review",
        topics: [
          "AXI4 channel architecture",
          "AXI read/write operations",
          "AXI burst handling",
          "AXI response mechanisms",
        ],
      },
      {
        week: 4,
        title: "Bridge Functional Verification",
        topics: [
          "Protocol conversion verification",
          "Data integrity checking",
          "Address translation verification",
          "Timing relationship validation",
        ],
      },
      {
        week: 5,
        title: "Advanced Verification Environment",
        topics: [
          "UVM testbench architecture",
          "Bridge-specific verification components",
          "Scoreboard implementation",
          "Coverage model development",
        ],
      },
      {
        week: 6,
        title: "Error Scenario Verification",
        topics: [
          "Error injection techniques",
          "Error propagation verification",
          "Recovery mechanism testing",
          "Boundary condition testing",
        ],
      },
      {
        week: 7,
        title: "Performance Verification",
        topics: ["Throughput analysis", "Latency measurement", "Bandwidth utilization", "Performance optimization"],
      },
      {
        week: 8,
        title: "System Integration Testing",
        topics: [
          "Multi-master scenarios",
          "Concurrent transaction handling",
          "System-level verification",
          "Integration challenges",
        ],
      },
      {
        week: 9,
        title: "Formal Verification Techniques",
        topics: [
          "Formal property specification",
          "Assertion-based verification",
          "Model checking applications",
          "Formal tool usage",
        ],
      },
      {
        week: 10,
        title: "Debug and Analysis",
        topics: ["Debug methodologies", "Waveform analysis", "Performance profiling", "Issue resolution techniques"],
      },
      {
        week: 11,
        title: "Industry Case Studies",
        topics: [
          "Real-world bridge implementations",
          "Industry best practices",
          "Common pitfalls and solutions",
          "Design optimization techniques",
        ],
      },
      {
        week: 12,
        title: "Final Project and Assessment",
        topics: [
          "Complete bridge verification project",
          "Comprehensive test plan execution",
          "Results analysis and reporting",
          "Course completion assessment",
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
      {
        question: "Will I work with real bridge designs?",
        answer:
          "Yes, you'll work with industry-standard AHB2AXI bridge implementations and develop complete verification environments for real designs.",
      },
      {
        question: "Is this course suitable for system-level verification engineers?",
        answer:
          "This course is ideal for engineers working on SoC verification, interconnect design, and system-level integration.",
      },
    ],
    materials: [
      {
        type: "Bridge Specifications",
        title: "AHB2AXI Bridge Documentation",
        description: "Detailed bridge specifications and implementation guidelines",
      },
      {
        type: "Verification Models",
        title: "Bridge Verification IP",
        description: "Complete verification IP libraries for bridge verification",
      },
      {
        type: "Case Studies",
        title: "Industry Bridge Implementations",
        description: "Real-world bridge design case studies and verification approaches",
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
      {
        id: 2,
        title: "Protocol Conversion Fundamentals",
        duration: "28:20",
        description: "Understanding protocol conversion mechanisms and requirements",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "Bridge Verification Environment Setup",
        duration: "35:15",
        description: "Setting up comprehensive verification environment for bridge testing",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 4,
    title: "Design Verification",
    description:
      "Learn the fundamentals of VLSI design verification, including CMOS technology, digital logic, and circuit layout.",
    category: "VLSI Design",
    price: 250,
    rating: 4.8,
    students: 1100,
    discount: 10,
    trainer: {
      name: "Prof. Arun Kumar",
      title: "Professor of VLSI Design",
      experience: "15+ years in VLSI Design and Verification",
      education: "Ph.D. in Electrical Engineering, IIT Delhi",
      specialization: "Digital Design, Low Power VLSI, ASIC Design",
      bio: "Professor Arun Kumar is a distinguished expert in VLSI design with over 15 years of experience in both academia and industry. He has worked with leading semiconductor companies and has published numerous research papers in top-tier journals.",
    },
    duration: "12 weeks",
    weeks: 12,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to the VLSI Design Course!",
      description:
        "This comprehensive course is designed to teach you how to design and analyze cutting-edge semiconductor devices and integrated circuits. You'll dive deep into the principles of Very Large Scale Integration (VLSI), covering the entire design flow from front-end design to back-end implementation. Over the course of 12 weeks, you'll gain hands-on experience with industry-standard tools and techniques, preparing you for a career in the semiconductor industry.",
      objectives: [
        "Master VLSI design fundamentals and methodologies",
        "Understand CMOS technology and device physics",
        "Learn HDL coding and RTL design techniques",
        "Gain experience with industry-standard EDA tools",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Digital Electronics Fundamentals",
        topics: [
          "Boolean algebra and logic gates",
          "Combinational and sequential circuits",
          "CMOS technology basics",
          "Design flow overview",
        ],
      },
      {
        week: 2,
        title: "CMOS Technology Deep Dive",
        topics: [
          "MOSFET device physics",
          "CMOS fabrication process",
          "Device characteristics and modeling",
          "Process variations and corners",
        ],
      },
      {
        week: 3,
        title: "HDL Programming Fundamentals",
        topics: ["Verilog HDL basics", "SystemVerilog for design", "Testbench development", "Simulation and debugging"],
      },
      {
        week: 4,
        title: "RTL Design Methodology",
        topics: ["RTL coding guidelines", "Finite state machines", "Datapath design", "Clock domain crossing"],
      },
      {
        week: 5,
        title: "Logic Synthesis",
        topics: ["Synthesis fundamentals", "Timing constraints", "Area and power optimization", "Technology mapping"],
      },
      {
        week: 6,
        title: "Verification Fundamentals",
        topics: [
          "Verification planning",
          "Testbench architecture",
          "Coverage analysis",
          "Assertion-based verification",
        ],
      },
      {
        week: 7,
        title: "Physical Design Introduction",
        topics: ["Floorplanning concepts", "Placement and routing", "Clock tree synthesis", "Timing closure"],
      },
      {
        week: 8,
        title: "Low Power Design",
        topics: [
          "Power analysis and estimation",
          "Low power techniques",
          "Power gating and clock gating",
          "Dynamic voltage scaling",
        ],
      },
      {
        week: 9,
        title: "Design for Test (DFT)",
        topics: [
          "Test principles and fault models",
          "Scan chain insertion",
          "BIST implementation",
          "Test coverage analysis",
        ],
      },
      {
        week: 10,
        title: "Advanced Design Techniques",
        topics: [
          "High-speed design considerations",
          "Signal integrity analysis",
          "Electromagnetic compatibility",
          "Reliability and aging effects",
        ],
      },
      {
        week: 11,
        title: "Industry Tools and Flows",
        topics: [
          "Synopsys design flow",
          "Cadence tool suite",
          "Mentor Graphics tools",
          "Tool integration and scripting",
        ],
      },
      {
        week: 12,
        title: "Final Project and Assessment",
        topics: [
          "Complete design project",
          "Design review and optimization",
          "Industry best practices",
          "Course completion assessment",
        ],
      },
    ],
    schedule: {
      duration: "12 weeks (24 sessions, 2 per week)",
      sessions: "Live sessions + self-paced assignments + 1-on-1 mentor support",
      mode: "Hybrid learning with hands-on labs and industry projects",
      tools: ["Synopsys Design Compiler", "Cadence Virtuoso", "Mentor Graphics", "Custom design tools"],
      fee: 250,
      breakdown:
        "Weekly hands-on exercises, project-based assignments, and comprehensive assessments covering the entire VLSI design flow",
    },
    faqs: [
      {
        question: "What will I learn in this course?",
        answer:
          "You will learn VLSI design concepts including CMOS fundamentals, HDL coding, ASIC/FPGA design, synthesis, timing analysis, and layout design. By the end of the course, you'll have hands-on experience with industry-standard tools.",
      },
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, this course is designed for both beginners and those with some electronics background. We start with fundamentals and gradually progress to advanced topics.",
      },
      {
        question: "What tools do I need for this course?",
        answer:
          "All necessary software tools and licenses will be provided during the course. You'll work with industry-standard EDA tools from Synopsys, Cadence, and Mentor Graphics.",
      },
      {
        question: "Will I get hands-on experience?",
        answer:
          "The course includes extensive hands-on labs, real design projects, and practical exercises using industry-standard tools and methodologies.",
      },
    ],
    materials: [
      {
        type: "Video Lectures",
        title: "Comprehensive Video Library",
        description: "60+ hours of detailed video lectures covering all VLSI design concepts",
      },
      {
        type: "Lab Exercises",
        title: "Hands-on Design Labs",
        description: "Practical design exercises using industry-standard EDA tools",
      },
      {
        type: "Reference Materials",
        title: "Industry Documentation",
        description: "Access to industry-standard design guidelines and best practices",
      },
      {
        type: "Project Templates",
        title: "Design Project Templates",
        description: "Complete project templates for various VLSI design scenarios",
      },
    ],
    certificate: {
      title: "VLSI Design Professional Certificate",
      description: "Demonstrates comprehensive expertise in VLSI design and verification",
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
        title: "Introduction to VLSI Design",
        duration: "22:30",
        description: "Overview of VLSI design flow and industry applications",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "CMOS Technology Fundamentals",
        duration: "28:45",
        description: "Deep dive into CMOS device physics and technology",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "Digital Logic Design",
        duration: "25:15",
        description: "Boolean algebra and combinational logic design",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 4,
        title: "Verilog HDL Programming",
        duration: "35:20",
        description: "Comprehensive Verilog programming for digital design",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 5,
    title: "SystemVerilog for Verification",
    description:
      "Master SystemVerilog programming language for advanced verification methodologies and testbench development.",
    category: "Programming",
    price: 199,
    rating: 4.6,
    students: 890,
    trainer: {
      name: "Dr. Anita Desai",
      title: "Verification Methodology Expert",
      experience: "12+ years in Verification and SystemVerilog",
      education: "Ph.D. in Computer Science, IISc Bangalore",
      specialization: "SystemVerilog, UVM, Formal Verification",
      bio: "Dr. Anita is a renowned expert in verification methodologies with extensive experience in SystemVerilog and UVM development for complex SoC designs.",
    },
    duration: "8 weeks",
    weeks: 8,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to SystemVerilog for Verification Course!",
      description:
        "Master the SystemVerilog programming language specifically for verification applications. Learn advanced language features, object-oriented programming, and verification-specific constructs.",
      objectives: [
        "Master SystemVerilog language features",
        "Understand object-oriented programming for verification",
        "Learn advanced verification constructs",
        "Develop efficient testbench architectures",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "SystemVerilog Basics",
        topics: [
          "SystemVerilog vs Verilog differences",
          "Data types and variables",
          "Arrays and structures",
          "Basic programming constructs",
        ],
      },
      {
        week: 2,
        title: "Object-Oriented Programming",
        topics: [
          "Classes and objects",
          "Inheritance and polymorphism",
          "Encapsulation concepts",
          "Virtual methods and interfaces",
        ],
      },
      {
        week: 3,
        title: "Advanced Data Types",
        topics: [
          "Dynamic arrays and queues",
          "Associative arrays",
          "Packed and unpacked structures",
          "Unions and enumerations",
        ],
      },
      {
        week: 4,
        title: "Randomization and Constraints",
        topics: [
          "Random variables and methods",
          "Constraint programming",
          "Constraint solving techniques",
          "Advanced randomization patterns",
        ],
      },
      {
        week: 5,
        title: "Interfaces and Modports",
        topics: ["Interface concepts", "Modport declarations", "Interface arrays", "Virtual interfaces"],
      },
      {
        week: 6,
        title: "Assertions and Coverage",
        topics: ["SystemVerilog assertions", "Temporal logic", "Functional coverage", "Coverage-driven verification"],
      },
      {
        week: 7,
        title: "Advanced Verification Features",
        topics: [
          "Mailboxes and semaphores",
          "Process control",
          "Inter-process communication",
          "Verification libraries",
        ],
      },
      {
        week: 8,
        title: "Testbench Development",
        topics: [
          "Testbench architecture",
          "Driver and monitor development",
          "Scoreboard implementation",
          "Complete verification environment",
        ],
      },
    ],
    schedule: {
      duration: "8 weeks (16 sessions, 2 per week)",
      sessions: "Interactive coding sessions + practical exercises",
      mode: "Hands-on programming with real verification examples",
      tools: ["Questa Sim", "VCS", "SystemVerilog compiler", "Debug tools"],
      fee: 199,
      breakdown: "Programming exercises, verification projects, and comprehensive language mastery assessments",
    },
    faqs: [
      {
        question: "Do I need prior Verilog experience?",
        answer:
          "Basic Verilog knowledge is recommended but not mandatory. We'll cover the transition from Verilog to SystemVerilog comprehensively.",
      },
      {
        question: "How is this different from basic Verilog?",
        answer:
          "SystemVerilog adds object-oriented programming, advanced data types, randomization, assertions, and many verification-specific features not available in Verilog.",
      },
      {
        question: "Will I learn UVM in this course?",
        answer:
          "This course focuses on SystemVerilog language features. UVM methodology is covered in our separate UVM course, which builds upon these SystemVerilog concepts.",
      },
    ],
    materials: [
      {
        type: "Code Examples",
        title: "SystemVerilog Code Library",
        description: "Comprehensive collection of SystemVerilog code examples and templates",
      },
      {
        type: "Programming Exercises",
        title: "Hands-on Coding Labs",
        description: "Progressive programming exercises from basic to advanced concepts",
      },
      {
        type: "Language Reference",
        title: "SystemVerilog Language Guide",
        description: "Complete language reference and best practices documentation",
      },
    ],
    certificate: {
      title: "SystemVerilog Programming Expert Certificate",
      description: "Validates proficiency in SystemVerilog programming for verification",
      features: [
        "Programming language certification",
        "Verification methodology validation",
        "Industry-standard recognition",
        "Advanced language expertise",
      ],
    },
    videos: [
      {
        id: 1,
        title: "SystemVerilog Introduction",
        duration: "16:20",
        description: "Overview of SystemVerilog features and verification applications",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "Object-Oriented Programming Basics",
        duration: "24:35",
        description: "Introduction to classes, objects, and OOP concepts",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "Advanced Data Types",
        duration: "21:45",
        description: "Dynamic arrays, queues, and associative arrays",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 6,
    title: "UVM Methodology",
    description:
      "Master the Universal Verification Methodology (UVM) for scalable and reusable verification environments.",
    category: "Verification",
    price: 349,
    rating: 4.9,
    students: 654,
    trainer: {
      name: "Mr. Suresh Reddy",
      title: "UVM Methodology Lead",
      experience: "14+ years in Advanced Verification",
      education: "M.Tech in VLSI, IIT Madras",
      specialization: "UVM, Verification Planning, Methodology Development",
      bio: "Suresh is a UVM expert who has developed verification methodologies for major semiconductor companies and trained hundreds of verification engineers.",
    },
    duration: "14 weeks",
    weeks: 14,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to UVM Methodology Course!",
      description:
        "Master the Universal Verification Methodology (UVM) for developing scalable, reusable, and maintainable verification environments. Learn industry best practices and advanced UVM techniques.",
      objectives: [
        "Understand UVM architecture and philosophy",
        "Develop reusable verification components",
        "Master UVM sequences and virtual sequences",
        "Implement advanced UVM features and patterns",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "UVM Introduction and Philosophy",
        topics: [
          "UVM overview and benefits",
          "UVM vs other methodologies",
          "UVM library structure",
          "Verification planning with UVM",
        ],
      },
      {
        week: 2,
        title: "UVM Base Classes",
        topics: [
          "uvm_object and uvm_component",
          "UVM factory mechanism",
          "UVM phases and objections",
          "UVM reporting and messaging",
        ],
      },
      {
        week: 3,
        title: "UVM Testbench Architecture",
        topics: [
          "UVM testbench hierarchy",
          "Test, environment, and agent structure",
          "Component communication",
          "Configuration and resource database",
        ],
      },
      {
        week: 4,
        title: "UVM Agents and Components",
        topics: [
          "Driver implementation",
          "Monitor development",
          "Sequencer functionality",
          "Agent configuration and modes",
        ],
      },
      {
        week: 5,
        title: "UVM Sequences",
        topics: [
          "Sequence and sequence_item",
          "Sequence library development",
          "Sequence arbitration",
          "Layered sequences",
        ],
      },
      {
        week: 6,
        title: "Virtual Sequences",
        topics: [
          "Virtual sequencer concept",
          "Multi-interface coordination",
          "Virtual sequence development",
          "Complex scenario generation",
        ],
      },
      {
        week: 7,
        title: "UVM Scoreboards",
        topics: [
          "Scoreboard architecture",
          "Prediction and comparison",
          "TLM analysis ports",
          "Advanced scoreboard patterns",
        ],
      },
      {
        week: 8,
        title: "UVM Coverage",
        topics: [
          "Functional coverage integration",
          "Coverage-driven verification",
          "Coverage analysis and closure",
          "Coverage optimization techniques",
        ],
      },
      {
        week: 9,
        title: "UVM Configuration and Factory",
        topics: [
          "Configuration database usage",
          "Factory overrides and types",
          "Runtime configuration",
          "Parameterization strategies",
        ],
      },
      {
        week: 10,
        title: "Advanced UVM Features",
        topics: [
          "UVM callbacks and hooks",
          "Register layer integration",
          "Memory modeling",
          "Advanced debugging techniques",
        ],
      },
      {
        week: 11,
        title: "UVM Best Practices",
        topics: [
          "Coding guidelines and standards",
          "Reusability patterns",
          "Performance optimization",
          "Maintenance and scalability",
        ],
      },
      {
        week: 12,
        title: "System-Level Verification",
        topics: [
          "Multi-agent environments",
          "System-level scenarios",
          "Cross-cutting concerns",
          "Integration challenges",
        ],
      },
      {
        week: 13,
        title: "UVM Acceleration and Optimization",
        topics: ["Simulation acceleration", "Emulation integration", "Performance tuning", "Resource optimization"],
      },
      {
        week: 14,
        title: "Final Project and Certification",
        topics: [
          "Complete UVM environment development",
          "Industry-standard verification project",
          "Best practices implementation",
          "Final assessment and certification",
        ],
      },
    ],
    schedule: {
      duration: "14 weeks (28 sessions, 2 per week)",
      sessions: "Intensive UVM development sessions + mentoring",
      mode: "Project-based learning with real UVM environments",
      tools: ["Questa Sim", "UVM Library", "SystemVerilog", "Advanced debug tools"],
      fee: 349,
      breakdown:
        "Progressive UVM component development, complete environment creation, and industry-standard project implementation",
    },
    faqs: [
      {
        question: "Why is UVM important for verification engineers?",
        answer:
          "UVM is the industry-standard methodology for verification, providing reusable, scalable, and maintainable verification environments essential for modern SoC verification.",
      },
      {
        question: "Do I need SystemVerilog knowledge before learning UVM?",
        answer:
          "Yes, solid SystemVerilog knowledge is essential. We recommend completing our SystemVerilog course before enrolling in UVM methodology.",
      },
      {
        question: "Will I develop complete verification environments?",
        answer:
          "You'll develop multiple complete UVM environments from scratch, including all components, sequences, and verification infrastructure.",
      },
    ],
    materials: [
      {
        type: "UVM Library",
        title: "Complete UVM Framework",
        description: "Full UVM library with documentation and examples",
      },
      {
        type: "Verification Projects",
        title: "Industry-Standard Projects",
        description: "Real-world verification projects using UVM methodology",
      },
      {
        type: "Best Practices Guide",
        title: "UVM Coding Standards",
        description: "Industry best practices and coding guidelines for UVM",
      },
    ],
    certificate: {
      title: "UVM Methodology Expert Certificate",
      description: "Validates mastery of UVM methodology and verification environment development",
      features: [
        "Industry-standard UVM certification",
        "Methodology expertise validation",
        "Advanced verification skills",
        "Professional recognition",
      ],
    },
    videos: [
      {
        id: 1,
        title: "UVM Methodology Overview",
        duration: "25:40",
        description: "Introduction to UVM philosophy and verification benefits",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "UVM Testbench Architecture",
        duration: "32:15",
        description: "Understanding UVM component hierarchy and communication",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "UVM Sequences and Drivers",
        duration: "28:50",
        description: "Developing UVM sequences and driver components",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 7,
    title: "ASIC Design Flow",
    description:
      "Comprehensive coverage of ASIC design flow from RTL to GDSII including synthesis, place & route, and timing closure.",
    category: "VLSI Design",
    price: 279,
    rating: 4.7,
    students: 723,
    trainer: {
      name: "Dr. Ramesh Gupta",
      title: "ASIC Design Director",
      experience: "18+ years in ASIC Design and Implementation",
      education: "Ph.D. in Microelectronics, IIT Kharagpur",
      specialization: "ASIC Design Flow, Physical Design, Timing Closure",
      bio: "Dr. Ramesh has led multiple successful ASIC tape-outs and has extensive experience in advanced node designs for mobile and automotive applications.",
    },
    duration: "16 weeks",
    weeks: 16,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to ASIC Design Flow Course!",
      description:
        "Master the complete ASIC design flow from RTL to GDSII. Learn industry-standard methodologies, tools, and techniques used in modern semiconductor design houses.",
      objectives: [
        "Understand complete ASIC design flow",
        "Master synthesis and optimization techniques",
        "Learn physical design and implementation",
        "Achieve timing and power closure",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "ASIC Design Flow Overview",
        topics: [
          "ASIC vs FPGA comparison",
          "Design flow stages",
          "EDA tool ecosystem",
          "Design constraints and requirements",
        ],
      },
      {
        week: 2,
        title: "RTL Design and Coding",
        topics: [
          "RTL coding guidelines",
          "Synthesizable constructs",
          "Design partitioning",
          "RTL optimization techniques",
        ],
      },
      {
        week: 3,
        title: "Logic Synthesis Fundamentals",
        topics: [
          "Synthesis process overview",
          "Technology libraries",
          "Timing constraints",
          "Area and power optimization",
        ],
      },
      {
        week: 4,
        title: "Advanced Synthesis Techniques",
        topics: ["Multi-Vt optimization", "Clock gating synthesis", "Retiming and pipelining", "Synthesis for test"],
      },
      {
        week: 5,
        title: "Static Timing Analysis",
        topics: [
          "Timing analysis fundamentals",
          "Setup and hold analysis",
          "Clock domain crossing",
          "Timing exceptions",
        ],
      },
      {
        week: 6,
        title: "Physical Design Introduction",
        topics: ["Physical design flow", "Floorplanning concepts", "Power planning", "I/O planning"],
      },
      {
        week: 7,
        title: "Placement and Optimization",
        topics: ["Placement algorithms", "Congestion analysis", "Timing-driven placement", "Power-aware placement"],
      },
      {
        week: 8,
        title: "Clock Tree Synthesis",
        topics: ["Clock tree requirements", "CTS algorithms", "Clock skew and jitter", "Useful skew techniques"],
      },
      {
        week: 9,
        title: "Routing and Optimization",
        topics: ["Global and detailed routing", "Routing congestion", "Signal integrity", "Crosstalk analysis"],
      },
      {
        week: 10,
        title: "Timing Closure",
        topics: ["Timing optimization techniques", "ECO implementation", "Multi-corner analysis", "Timing sign-off"],
      },
      {
        week: 11,
        title: "Power Analysis and Optimization",
        topics: [
          "Power analysis methodologies",
          "Dynamic and static power",
          "Power optimization techniques",
          "Power sign-off",
        ],
      },
      {
        week: 12,
        title: "Design for Manufacturing",
        topics: ["DFM guidelines", "Yield optimization", "OPC and RET", "Manufacturing constraints"],
      },
      {
        week: 13,
        title: "Physical Verification",
        topics: ["DRC and LVS checks", "Antenna and density rules", "Parasitic extraction", "Sign-off verification"],
      },
      {
        week: 14,
        title: "Advanced Node Challenges",
        topics: [
          "FinFET design considerations",
          "Advanced node effects",
          "Variability and reliability",
          "Design optimization strategies",
        ],
      },
      {
        week: 15,
        title: "Industry Tools and Flows",
        topics: ["Synopsys design flow", "Cadence implementation", "Tool integration", "Flow automation"],
      },
      {
        week: 16,
        title: "Final Project and Tape-out",
        topics: [
          "Complete ASIC implementation",
          "Design review and optimization",
          "Tape-out preparation",
          "Post-silicon considerations",
        ],
      },
    ],
    schedule: {
      duration: "16 weeks (32 sessions, 2 per week)",
      sessions: "Comprehensive design implementation + tool training",
      mode: "Complete ASIC design project from RTL to GDSII",
      tools: ["Synopsys Design Compiler", "IC Compiler", "PrimeTime", "Cadence Innovus"],
      fee: 279,
      breakdown: "Full ASIC implementation project, tool training, and industry-standard design methodologies",
    },
    faqs: [
      {
        question: "Will I complete a full ASIC design?",
        answer:
          "Yes, you'll implement a complete ASIC design from RTL to GDSII, including all major design flow steps and sign-off requirements.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You'll work with industry-standard tools from Synopsys and Cadence, including Design Compiler, IC Compiler, PrimeTime, and Innovus.",
      },
      {
        question: "Is this suitable for physical design engineers?",
        answer:
          "This course covers the complete flow but has strong emphasis on physical design, timing closure, and implementation challenges.",
      },
    ],
    materials: [
      {
        type: "Design Kits",
        title: "Process Design Kits",
        description: "Industry-standard PDKs for advanced technology nodes",
      },
      {
        type: "Tool Scripts",
        title: "EDA Tool Scripts",
        description: "Complete tool scripts and flows for ASIC implementation",
      },
      {
        type: "Design Examples",
        title: "Reference Designs",
        description: "Industry reference designs and implementation examples",
      },
    ],
    certificate: {
      title: "ASIC Design Implementation Expert Certificate",
      description: "Validates expertise in complete ASIC design flow and implementation",
      features: [
        "Full design flow certification",
        "Industry tool proficiency",
        "Implementation expertise",
        "Sign-off methodology validation",
      ],
    },
    videos: [
      {
        id: 1,
        title: "ASIC Design Flow Introduction",
        duration: "30:25",
        description: "Overview of complete ASIC design flow and industry practices",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "Logic Synthesis Deep Dive",
        duration: "38:40",
        description: "Comprehensive coverage of synthesis techniques and optimization",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "Physical Design Fundamentals",
        duration: "42:15",
        description: "Introduction to physical design concepts and methodologies",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 8,
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
    image: "/placeholder.svg?height=400&width=600",
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
      {
        week: 2,
        title: "Microcontroller Programming",
        topics: [
          "C programming for embedded",
          "Register-level programming",
          "Interrupt handling",
          "Timer and counter programming",
        ],
      },
      {
        week: 3,
        title: "Sensor Integration",
        topics: [
          "Analog and digital sensors",
          "ADC and DAC interfacing",
          "Sensor calibration",
          "Data acquisition systems",
        ],
      },
      {
        week: 4,
        title: "Communication Protocols",
        topics: ["UART, SPI, I2C protocols", "CAN bus communication", "USB interfacing", "Protocol implementation"],
      },
      {
        week: 5,
        title: "Real-Time Operating Systems",
        topics: ["RTOS concepts", "Task scheduling", "Inter-task communication", "FreeRTOS implementation"],
      },
      {
        week: 6,
        title: "Wireless Communication",
        topics: ["WiFi and Bluetooth", "LoRa and LoRaWAN", "Cellular communication", "Protocol selection criteria"],
      },
      {
        week: 7,
        title: "IoT Architecture",
        topics: ["IoT system design", "Edge computing", "Gateway implementation", "Security considerations"],
      },
      {
        week: 8,
        title: "Cloud Integration",
        topics: ["Cloud platforms (AWS, Azure)", "MQTT protocol", "Data analytics", "Remote monitoring"],
      },
      {
        week: 9,
        title: "Power Management",
        topics: ["Low power design", "Sleep modes", "Battery management", "Energy harvesting"],
      },
      {
        week: 10,
        title: "IoT Project Development",
        topics: [
          "Complete IoT system design",
          "Prototype development",
          "Testing and validation",
          "Deployment strategies",
        ],
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
        question: "Will I work with real hardware?",
        answer:
          "Yes, you'll work with microcontrollers, sensors, and development boards to build real IoT applications and prototypes.",
      },
      {
        question: "What IoT applications will I develop?",
        answer:
          "You'll develop various IoT applications including sensor monitoring, home automation, industrial IoT, and cloud-connected systems.",
      },
    ],
    materials: [
      {
        type: "Hardware Kits",
        title: "IoT Development Kits",
        description: "Complete hardware kits with microcontrollers, sensors, and communication modules",
      },
      {
        type: "Software Tools",
        title: "Development Environment",
        description: "IDE setup, cloud platform access, and development tools",
      },
      {
        type: "Project Templates",
        title: "IoT Project Examples",
        description: "Complete IoT project templates and reference implementations",
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
      {
        id: 2,
        title: "Microcontroller Programming Basics",
        duration: "26:45",
        description: "Introduction to microcontroller programming and interfacing",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "IoT Communication Protocols",
        duration: "23:20",
        description: "Understanding various IoT communication protocols and selection",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 9,
    title: "FPGA Design and Implementation",
    description:
      "Master FPGA design methodologies, HDL programming, and implementation techniques for reconfigurable computing.",
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
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to FPGA Design and Implementation Course!",
      description:
        "Master FPGA design from fundamentals to advanced implementation techniques. Learn HDL programming, synthesis, timing closure, and system-level design.",
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
      {
        week: 2,
        title: "HDL for FPGA Design",
        topics: [
          "VHDL and Verilog for FPGAs",
          "Synthesizable coding styles",
          "FPGA-specific constructs",
          "Resource utilization optimization",
        ],
      },
      {
        week: 3,
        title: "FPGA Design Flow",
        topics: ["Design entry and synthesis", "Implementation flow", "Place and route", "Bitstream generation"],
      },
      {
        week: 4,
        title: "Timing Analysis and Constraints",
        topics: ["FPGA timing concepts", "Clock domain crossing", "Timing constraints", "Timing closure techniques"],
      },
      {
        week: 5,
        title: "Memory Systems in FPGAs",
        topics: ["Block RAM utilization", "Distributed RAM", "External memory interfacing", "Memory controller design"],
      },
      {
        week: 6,
        title: "DSP Implementation",
        topics: [
          "DSP block utilization",
          "Filter implementation",
          "FFT and signal processing",
          "High-speed arithmetic",
        ],
      },
      {
        week: 7,
        title: "High-Level Synthesis",
        topics: ["HLS concepts and tools", "C/C++ to HDL conversion", "Optimization techniques", "HLS design flow"],
      },
      {
        week: 8,
        title: "Communication Interfaces",
        topics: ["PCIe implementation", "Ethernet interfaces", "Serial communication", "Custom protocol development"],
      },
      {
        week: 9,
        title: "System-Level Design",
        topics: [
          "Embedded processor integration",
          "SoC design with FPGAs",
          "Hardware-software co-design",
          "System optimization",
        ],
      },
      {
        week: 10,
        title: "Advanced FPGA Techniques",
        topics: [
          "Partial reconfiguration",
          "Multi-clock domain design",
          "Power optimization",
          "Reliability considerations",
        ],
      },
      {
        week: 11,
        title: "FPGA Tools and Flows",
        topics: [
          "Xilinx Vivado design suite",
          "Intel Quartus Prime",
          "Tool comparison",
          "Flow automation and scripting",
        ],
      },
      {
        week: 12,
        title: "Final Project and Implementation",
        topics: [
          "Complete FPGA system design",
          "Performance optimization",
          "Design verification",
          "Project presentation",
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
        question: "Do I need prior HDL experience?",
        answer:
          "Basic Verilog or VHDL knowledge is recommended. We'll cover FPGA-specific coding techniques and optimization strategies.",
      },
      {
        question: "Will I work with real FPGA hardware?",
        answer:
          "Yes, you'll work with FPGA development boards and implement real designs, from basic logic to complex systems.",
      },
      {
        question: "How is FPGA design different from ASIC design?",
        answer:
          "FPGA design focuses on reconfigurable architectures, different timing models, and resource optimization specific to FPGA fabrics.",
      },
    ],
    materials: [
      {
        type: "FPGA Boards",
        title: "Development Hardware",
        description: "Access to FPGA development boards and evaluation kits",
      },
      {
        type: "Design Tools",
        title: "EDA Tool Access",
        description: "Xilinx Vivado and Intel Quartus Prime tool licenses",
      },
      {
        type: "Reference Designs",
        title: "FPGA Design Examples",
        description: "Complete reference designs and implementation examples",
      },
    ],
    certificate: {
      title: "FPGA Design and Implementation Expert Certificate",
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
      {
        id: 2,
        title: "HDL Coding for FPGAs",
        duration: "31:20",
        description: "FPGA-specific HDL coding techniques and optimization",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "FPGA Design Flow",
        duration: "27:45",
        description: "Complete FPGA design flow from synthesis to bitstream",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 10,
    title: "Digital Signal Processing",
    description:
      "Comprehensive DSP course covering algorithms, implementation, and FPGA/ASIC realization of signal processing systems.",
    category: "Signal Processing",
    price: 259,
    rating: 4.6,
    students: 389,
    trainer: {
      name: "Dr. Kavitha Rao",
      title: "DSP Algorithm Specialist",
      experience: "14+ years in DSP and Algorithm Development",
      education: "Ph.D. in Signal Processing, IISc Bangalore",
      specialization: "Digital Filters, FFT Implementation, Adaptive Algorithms",
      bio: "Dr. Kavitha is a DSP expert with extensive experience in algorithm development and hardware implementation for communication and multimedia systems.",
    },
    duration: "11 weeks",
    weeks: 11,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to Digital Signal Processing Course!",
      description:
        "Master digital signal processing algorithms and their hardware implementation. Learn filter design, FFT algorithms, and DSP system development.",
      objectives: [
        "Understand DSP fundamentals and algorithms",
        "Master filter design and implementation",
        "Learn FFT and spectral analysis",
        "Implement DSP systems in hardware",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "DSP Fundamentals",
        topics: [
          "Discrete-time signals and systems",
          "Sampling and quantization",
          "Z-transform and frequency domain",
          "DSP system characteristics",
        ],
      },
      {
        week: 2,
        title: "Digital Filter Design",
        topics: ["FIR filter design", "IIR filter design", "Filter specifications", "Window functions"],
      },
      {
        week: 3,
        title: "Filter Implementation",
        topics: [
          "Direct form implementations",
          "Cascade and parallel forms",
          "Fixed-point considerations",
          "Quantization effects",
        ],
      },
      {
        week: 4,
        title: "FFT Algorithms",
        topics: ["DFT and FFT concepts", "Radix-2 FFT algorithms", "Mixed-radix FFT", "FFT implementation techniques"],
      },
      {
        week: 5,
        title: "Spectral Analysis",
        topics: ["Power spectral density", "Windowing effects", "Spectral estimation", "Time-frequency analysis"],
      },
      {
        week: 6,
        title: "Adaptive Filtering",
        topics: ["LMS algorithm", "RLS algorithm", "Adaptive filter applications", "Convergence analysis"],
      },
      {
        week: 7,
        title: "Multirate DSP",
        topics: ["Decimation and interpolation", "Polyphase structures", "Filter banks", "Multirate system design"],
      },
      {
        week: 8,
        title: "DSP Hardware Implementation",
        topics: ["DSP processor architectures", "FPGA implementation", "Pipeline design", "Parallel processing"],
      },
      {
        week: 9,
        title: "Communication DSP",
        topics: ["Modulation and demodulation", "Channel equalization", "Error correction coding", "OFDM systems"],
      },
      {
        week: 10,
        title: "Audio and Image Processing",
        topics: ["Audio signal processing", "Image filtering", "Compression algorithms", "Real-time processing"],
      },
      {
        week: 11,
        title: "DSP System Design Project",
        topics: [
          "Complete DSP system design",
          "Algorithm optimization",
          "Hardware implementation",
          "Performance analysis",
        ],
      },
    ],
    schedule: {
      duration: "11 weeks (22 sessions, 2 per week)",
      sessions: "Algorithm development + hardware implementation",
      mode: "Theory with extensive MATLAB and hardware labs",
      tools: ["MATLAB/Simulink", "Xilinx System Generator", "DSP development boards", "Simulation tools"],
      fee: 259,
      breakdown: "Algorithm development, simulation projects, and hardware implementation of DSP systems",
    },
    faqs: [
      {
        question: "Do I need strong mathematics background?",
        answer:
          "Basic knowledge of signals and systems is helpful. We'll cover the mathematical concepts needed for DSP algorithm understanding.",
      },
      {
        question: "Will I implement algorithms in hardware?",
        answer:
          "Yes, you'll implement DSP algorithms in both MATLAB and hardware platforms including FPGAs and DSP processors.",
      },
      {
        question: "What applications will be covered?",
        answer:
          "We'll cover communication systems, audio processing, image processing, and control systems applications of DSP.",
      },
    ],
    materials: [
      {
        type: "Software Tools",
        title: "MATLAB and Simulink",
        description: "Complete MATLAB toolboxes for signal processing and system design",
      },
      {
        type: "Hardware Platforms",
        title: "DSP Development Kits",
        description: "DSP processor and FPGA boards for algorithm implementation",
      },
      {
        type: "Algorithm Library",
        title: "DSP Algorithm Collection",
        description: "Comprehensive library of DSP algorithms and implementations",
      },
    ],
    certificate: {
      title: "Digital Signal Processing Expert Certificate",
      description: "Validates expertise in DSP algorithms and hardware implementation",
      features: [
        "DSP algorithm certification",
        "Hardware implementation validation",
        "System design expertise",
        "Industry application knowledge",
      ],
    },
    videos: [
      {
        id: 1,
        title: "DSP Fundamentals Introduction",
        duration: "21:40",
        description: "Overview of digital signal processing concepts and applications",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "Digital Filter Design",
        duration: "29:15",
        description: "Comprehensive coverage of FIR and IIR filter design",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "FFT Algorithms and Implementation",
        duration: "33:25",
        description: "Understanding FFT algorithms and efficient implementation",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 11,
    title: "Low Power Design Techniques",
    description: "Advanced course on low power design methodologies for modern VLSI circuits and systems.",
    category: "VLSI Design",
    price: 319,
    rating: 4.9,
    students: 234,
    trainer: {
      name: "Dr. Neha Agarwal",
      title: "Low Power Design Expert",
      experience: "16+ years in Low Power VLSI Design",
      education: "Ph.D. in VLSI Design, IIT Delhi",
      specialization: "Power Management, Energy Harvesting, Ultra-Low Power Circuits",
      bio: "Dr. Neha is a leading expert in low power design with extensive experience in mobile and IoT chip design for major semiconductor companies.",
    },
    duration: "14 weeks",
    weeks: 14,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to Low Power Design Techniques Course!",
      description:
        "Master advanced low power design techniques essential for modern VLSI circuits. Learn power analysis, optimization strategies, and implementation methodologies.",
      objectives: [
        "Understand power consumption mechanisms",
        "Master low power design techniques",
        "Learn power analysis and optimization",
        "Implement energy-efficient systems",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Power Fundamentals",
        topics: [
          "Static and dynamic power",
          "Power consumption sources",
          "Power models and analysis",
          "Energy vs power trade-offs",
        ],
      },
      {
        week: 2,
        title: "Low Power Design Strategies",
        topics: [
          "Voltage scaling techniques",
          "Frequency scaling",
          "Power gating strategies",
          "Clock gating implementation",
        ],
      },
      {
        week: 3,
        title: "Multi-Threshold Voltage Design",
        topics: [
          "Multi-Vt cell libraries",
          "Threshold voltage optimization",
          "Leakage power reduction",
          "Performance-power trade-offs",
        ],
      },
      {
        week: 4,
        title: "Power Gating Techniques",
        topics: [
          "Power gating architectures",
          "Sleep transistor design",
          "Wake-up strategies",
          "State retention techniques",
        ],
      },
      {
        week: 5,
        title: "Dynamic Voltage and Frequency Scaling",
        topics: [
          "DVFS concepts and implementation",
          "Voltage regulator design",
          "Frequency scaling algorithms",
          "Adaptive voltage scaling",
        ],
      },
      {
        week: 6,
        title: "Clock Power Optimization",
        topics: [
          "Clock gating techniques",
          "Clock tree power optimization",
          "Gated clock implementation",
          "Clock domain management",
        ],
      },
      {
        week: 7,
        title: "Memory Power Optimization",
        topics: [
          "Memory power characteristics",
          "Low power memory design",
          "Memory partitioning",
          "Cache power optimization",
        ],
      },
      {
        week: 8,
        title: "System-Level Power Management",
        topics: ["Power management units", "System power states", "Power islands", "Cross-domain optimization"],
      },
      {
        week: 9,
        title: "Advanced Low Power Techniques",
        topics: ["Near-threshold computing", "Subthreshold design", "Adiabatic logic", "Reversible computing"],
      },
      {
        week: 10,
        title: "Power Analysis and Verification",
        topics: [
          "Power analysis tools",
          "Power estimation techniques",
          "Power verification flows",
          "Sign-off methodologies",
        ],
      },
      {
        week: 11,
        title: "Low Power Physical Design",
        topics: ["Power-aware placement", "Power grid design", "IR drop analysis", "Electromigration considerations"],
      },
      {
        week: 12,
        title: "Energy Harvesting Systems",
        topics: [
          "Energy harvesting techniques",
          "Power management for harvesting",
          "Ultra-low power design",
          "Self-powered systems",
        ],
      },
      {
        week: 13,
        title: "Industry Case Studies",
        topics: [
          "Mobile processor power design",
          "IoT device power optimization",
          "Automotive low power design",
          "Data center power efficiency",
        ],
      },
      {
        week: 14,
        title: "Final Project and Optimization",
        topics: [
          "Complete low power design project",
          "Power optimization strategies",
          "Design trade-off analysis",
          "Industry best practices",
        ],
      },
    ],
    schedule: {
      duration: "14 weeks (28 sessions, 2 per week)",
      sessions: "Advanced design techniques + optimization projects",
      mode: "Comprehensive low power design methodology",
      tools: ["Synopsys PrimePower", "Cadence Voltus", "Low power libraries", "Analysis tools"],
      fee: 319,
      breakdown: "Advanced low power design projects, power analysis, and comprehensive optimization techniques",
    },
    faqs: [
      {
        question: "Why is low power design critical today?",
        answer:
          "With mobile devices, IoT, and data centers, power efficiency is crucial for battery life, thermal management, and operational costs.",
      },
      {
        question: "Will I learn both circuit and system-level techniques?",
        answer:
          "Yes, the course covers techniques from transistor level to system level, including circuit design, architecture, and system power management.",
      },
      {
        question: "Is this suitable for analog designers?",
        answer:
          "While focused on digital design, many concepts apply to analog circuits. We cover power management circuits and mixed-signal considerations.",
      },
    ],
    materials: [
      {
        type: "Power Analysis Tools",
        title: "EDA Power Tools",
        description: "Access to industry-standard power analysis and optimization tools",
      },
      {
        type: "Low Power Libraries",
        title: "Multi-Vt Cell Libraries",
        description: "Complete low power cell libraries and characterization data",
      },
      {
        type: "Design Examples",
        title: "Low Power Reference Designs",
        description: "Industry reference designs and power optimization case studies",
      },
    ],
    certificate: {
      title: "Low Power Design Specialist Certificate",
      description: "Validates expertise in advanced low power design techniques",
      features: [
        "Advanced low power certification",
        "Power optimization expertise",
        "Industry methodology validation",
        "System-level design skills",
      ],
    },
    videos: [
      {
        id: 1,
        title: "Low Power Design Introduction",
        duration: "26:30",
        description: "Overview of power consumption and low power design challenges",
        url: "/placeholder-video.mp4",
        isFree: true,
      },
      {
        id: 2,
        title: "Power Gating Techniques",
        duration: "34:20",
        description: "Comprehensive coverage of power gating implementation",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
      {
        id: 3,
        title: "DVFS Implementation",
        duration: "31:45",
        description: "Dynamic voltage and frequency scaling techniques",
        url: "/placeholder-video.mp4",
        isFree: false,
      },
    ],
  },
  {
    id: 12,
    title: "Physical Design and Layout",
    description:
      "Comprehensive course on physical design flow, layout techniques, and backend implementation for VLSI circuits.",
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
    duration: "15 weeks",
    weeks: 15,
    image: "/placeholder.svg?height=400&width=600",
    overview: {
      welcome: "Welcome to Physical Design and Layout Course!",
      description:
        "Master the complete physical design flow from netlist to GDSII. Learn advanced layout techniques, timing closure, and backend implementation.",
      objectives: [
        "Understand complete physical design flow",
        "Master layout and placement techniques",
        "Learn timing closure methodologies",
        "Implement advanced node designs",
      ],
    },
    syllabus: [
      {
        week: 1,
        title: "Physical Design Overview",
        topics: [
          "Physical design flow introduction",
          "Backend design challenges",
          "Technology scaling effects",
          "Design rule overview",
        ],
      },
      {
        week: 2,
        title: "Floorplanning Fundamentals",
        topics: [
          "Floorplan objectives",
          "Aspect ratio and utilization",
          "Macro placement",
          "Pin assignment strategies",
        ],
      },
      {
        week: 3,
        title: "Power Planning",
        topics: ["Power grid design", "IR drop analysis", "Electromigration rules", "Power ring and stripe planning"],
      },
      {
        week: 4,
        title: "Placement Techniques",
        topics: [
          "Global and detailed placement",
          "Placement algorithms",
          "Congestion analysis",
          "Timing-driven placement",
        ],
      },
      {
        week: 5,
        title: "Clock Tree Synthesis",
        topics: [
          "Clock tree objectives",
          "CTS algorithms and techniques",
          "Clock skew optimization",
          "Useful skew implementation",
        ],
      },
      {
        week: 6,
        title: "Routing Fundamentals",
        topics: [
          "Global routing concepts",
          "Detailed routing algorithms",
          "Via minimization",
          "Routing congestion management",
        ],
      },
      {
        week: 7,
        title: "Timing Analysis and Optimization",
        topics: [
          "Static timing analysis",
          "Setup and hold fixing",
          "Multi-corner analysis",
          "Timing optimization techniques",
        ],
      },
      {
        week: 8,
        title: "Signal Integrity",
        topics: ["Crosstalk analysis", "Noise effects", "Signal integrity fixes", "Shielding techniques"],
      },
      {
        week: 9,
        title: "Power Analysis and Optimization",
        topics: ["Dynamic power analysis", "IR drop fixing", "Power optimization", "Voltage drop analysis"],
      },
      {
        week: 10,
        title: "Design for Manufacturing",
        topics: ["DFM guidelines", "OPC and RET effects", "Yield optimization", "Manufacturing constraints"],
      },
      {
        week: 11,
        title: "Physical Verification",
        topics: ["DRC and LVS verification", "Antenna rule checking", "Density rules", "Metal fill insertion"],
      },
      {
        week: 12,
        title: "Advanced Node Challenges",
        topics: ["FinFET design rules", "Double patterning", "Advanced node effects", "Design optimization"],
      },
      {
        week: 13,
        title: "ECO and Timing Closure",
        topics: [
          "Engineering change orders",
          "Incremental optimization",
          "Timing closure strategies",
          "Sign-off preparation",
        ],
      },
      {
        week: 14,
        title: "Industry Tools and Flows",
        topics: ["Cadence Innovus flow", "Synopsys IC Compiler", "Tool integration", "Flow automation"],
      },
      {
        week: 15,
        title: "Final Implementation Project",
        topics: [
          "Complete backend implementation",
          "Multi-corner sign-off",
          "GDSII generation",
          "Tape-out preparation",
        ],
      },
    ],
    schedule: {
      duration: "15 weeks (30 sessions, 2 per week)",
      sessions: "Complete backend implementation + tool training",
      mode: "Hands-on implementation with industry tools",
      tools: ["Cadence Innovus", "Synopsys IC Compiler", "Calibre", "Physical verification tools"],
      fee: 289,
      breakdown: "Complete physical design implementation, timing closure projects, and industry-standard backend flow",
    },
    faqs: [
      {
        question: "Will I complete a full backend implementation?",
        answer:
          "Yes, you'll implement a complete design from netlist to GDSII, including all physical design steps and sign-off verification.",
      },
      {
        question: "What makes physical design challenging?",
        answer:
          "Physical design involves complex trade-offs between timing, power, area, and manufacturability, especially at advanced technology nodes.",
      },
      {
        question: "Is this suitable for frontend designers?",
        answer:
          "Understanding physical design helps frontend designers write better RTL and make informed design decisions.",
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
    ],
    certificate: {
      title: "Physical Design and Layout Expert Certificate",
      description: "Validates expertise in complete physical design and backend implementation",
      features: [
        "Complete backend flow certification",
        "Physical design expertise",
        "Tool proficiency validation",
        "Industry implementation skills",
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
]

export function getCourseById(id: number): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

export function getAllCourses(): Course[] {
  return coursesData
}

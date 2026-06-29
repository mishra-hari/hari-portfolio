export const profile = {
  name: "Hari Prapanna Mishra",
  highLights: "Available for new opportunities",
  shortName: "Hari Mishra",
  title: "Associate Manager & Frontend Architect",
  tagline: "11+ years building enterprise-scale web applications",
  location: "Pune, India",
  email: "hari.mishra.in@gmail.com",
  phone: "+91 8319245456",
  links: {
    linkedin: "https://www.linkedin.com/in/hari-mishra",
    github: "https://github.com/harimishra",
    patent: "https://patents.google.com/patent/US12210855B2",
    portfolio: "https://harimishra.com",
  },
  summary:
  "Associate Manager with 11+ years of progressive experience in enterprise front-end development and technical leadership. Proven track record of leading cross-functional engineering teams, driving architectural decisions, and delivering scalable web applications across financial services, telecom, media, and marketing analytics domains. Experienced in building and mentoring high-performing teams, translating complex business requirements into clean technical solutions, and managing end-to-end delivery in agile environments. Actively integrating AI into day-to-day development workflows to enhance productivity, code quality, and innovation.",

  workStatus: "Available to join immediately. Notice period: 0 days.",

  experience: [
    {
      "company": "Omnicom Global Solutions (OGS)",
      "location": "Pune, India",
      "roles": [
        {
          "title": "Associate Manager",
          "period": "Apr 2026 – Present",
          "duration": "3 mos",
          "highlights": [
            "Lead and mentor a cross-functional front-end development team, driving technical governance and career growth paths.",
            "Conduct technical feasibility assessments and spearhead architectural blueprints for high-scale marketing analytics platforms.",
            "Collaborate with product owners and global stakeholders to translate business requirements into technical design specifications.",
            "Orchestrate the end-to-end software development lifecycle (SDLC) from structural planning through global production deployment.",
            "Direct the engineering of the next-generation analytics and activation engine (Omni Customization Track)."
          ]
        },
        {
          "title": "Engineering Lead",
          "period": "Dec 2022 – Mar 2026",
          "duration": "3 yrs 3 mos",
          "highlights": [
            "Architected and deployed high-performance UI ecosystems leveraging modern Web Components via Lit, Vite, and strict TypeScript.",
            "Pioneered enterprise-wide adoption of next-gen frontend tooling, atomic configurations, and component-driven architecture.",
            "Led the end-to-end development of GeoLift Planner, an advanced geo-based experimentation platform utilizing synthetic control generation.",
            "Established a unified, shared component registry yielding 95%+ cross-platform code reusability and minimizing technical debt."
          ]
        }
      ]
    },
    {
      "company": "Rakuten Symphony",
      "location": "Indore, Madhya Pradesh, India",
      "roles": [
        {
          "title": "Technical Lead",
          "period": "Jul 2020 – Dec 2022",
          "duration": "2 yrs 5 mos",
          "highlights": [
            "Formulated frontend technical strategy, structural migration plans, and core architectural decisions for enterprise-scale platforms.",
            "Mentored senior software engineers, established rigid code review gates, and optimized client-side performance standards.",
            "Coordinated multi-disciplinary agile squads to guarantee reliable, on-time delivery of feature roadmaps."
          ]
        },
        {
          "title": "Senior Software Engineer",
          "period": "Feb 2015 – Jul 2020",
          "duration": "5 yrs 5 mos",
          "highlights": [
            "Engineered full-featured single-page web applications utilizing robust Angular ecosystems and core modern JavaScript.",
            "Built highly responsive web layouts and systematically optimized browser rendering pipelines to improve performance metrics.",
            "Collaborated directly with downstream engineering groups on RESTful API contracts, data orchestration, and deep state visualization."
          ]
        }
      ]
    }
],

  projects: [
    {
      name: "GeoLift Planner",
      category: "OCS — Omni Customization Track",
      description:
        "Sophisticated platform for planning, executing, and measuring geo-based lift experiments at scale. Enables accurate measurement of incremental advertising impact using synthetic control methodology without requiring individual-level data matching.",
      features: [
        "Synthetic control generation",
        "Power analysis & experiment design simulation",
        "Statistical significance testing",
        "Real-time reporting dashboards",
      ],
      tech: ["Lit", "Web Components", "Vite", "TypeScript"],
      role: "Architected and built the core platform UI, simulation engines, and real-time reporting dashboards.",
    },
    {
      name: "Agile MMM Explorer",
      category: "OCS — Omni Customization Track",
      description:
        "Comprehensive Marketing Mix Modeling platform enabling data-driven budget optimization across marketing channels. Provides insights on channel contribution, ROI, diminishing returns analysis, and optimal budget allocation strategies.",
      features: [
        "Budget optimization & channel performance analysis",
        "Marginal activity insights & forecasting",
        "Portfolio planning",
        "Unit tested with Vitest",
      ],
      tech: ["React", "Python", "Lit", "Web Components", "Data Visualization", "Vitest", "REST APIs"],
      role: "Developed comprehensive MMM platform; used React + Python for core analytics, Lit Web Components for shared reusable UI.",
    },
    {
      name: "Video Intelligence",
      category: "OCS — Omni Customization Track",
      description:
        "ML-powered YouTube brand safety platform. Proprietary video curation tool leveraging machine learning to optimize YouTube marketing strategies across 2.85B monthly active users and 5.1B videos.",
      features: [
        "ML-powered channel curation",
        "Brand safety controls",
        "Real-time reporting & campaign insights",
        "Flexible delivery options",
      ],
      tech: ["Lit", "Web Components", "ML Integration", "Real-time Analytics", "Data Visualization"],
      role: "Built proprietary video curation platform with ML-powered brand safety controls.",
    },
    {
      name: "View Builder",
      category: "Flagship Project",
      description:
        "Revolutionary low-code/no-code platform enabling users to create and publish application views without writing code. Features JSON-based configuration, real-time validation, theme customization, and instant deployment. Reduced development time by 70%.",
      features: [
        "JSON-based configuration engine",
        "Real-time validation & theme customization",
        "Instant deployment — 70% dev time reduction",
        "Zero code deployment for end users",
      ],
      tech: ["Angular", "Micro Frontend", "NX", "Webpack", "Module Federation"],
      role: "Module Lead — spearheaded runtime engine and validation layer.",
    },
    {
      name: "SiteFORGE",
      category: "Flagship Project",
      description:
        "Enterprise process automation platform with integrated modules for inventory management, logistics, project management, and work order tracking. Supports web, mobile, and tablet deployments with role-based access control and real-time dashboards. Serves 50,000+ active users.",
      features: [
        "Inventory, logistics & work order management",
        "Role-based access control",
        "Real-time dashboards",
        "Web, mobile & tablet support — 50,000+ users",
      ],
      tech: ["JavaScript", "AngularJS", "Highcharts", "Leaflet Maps", "Google Maps"],
      role: "Front-end Developer — optimized cross-device layouts and UI performance.",
    },
    {
      name: "TradeRoar",
      category: "Flagship Project",
      description:
        "Innovative fully-integrated stock trading platform with advanced features including strategy builder, backtesting tools, and automated trading execution. Enables traders and investors to analyze market trends, build strategies, and execute trades profitably.",
      features: [
        "Strategy builder & backtesting tools",
        "Automated trading execution",
        "Market trend analysis",
        "Multi-security support",
      ],
      tech: ["JavaScript", "AngularJS", "Highcharts", "Advanced Data Visualization"],
      role: "Senior Front-end Developer & Team Lead.",
    },
  ],

  skills: {
    "Frontend Architecture & Patterns": [
      "Micro Frontends",
      "Module Federation",
      "Single-SPA",
      "Monorepos (Nx, Turborepo)",
      "State Management (RxJS, Redux Toolkit, Signals)",
      "Modern Design Patterns (Component-Driven, Atomic, MVC)"
    ],
    "Frameworks & Libraries": [
      "Angular (16+)",
      "React.js",
      "Next.js",
      "Lit / Web Components",
      "Tailwind CSS",
      "Angular Material & Headless UI Components"
    ],
    "Frontend Core & Engineering": [
      "TypeScript (Strict Mode)",
      "JavaScript (ESNext)",
      "HTML5 & Semantic Web",
      "CSS3 / SASS / CSS Modules",
      "Web Accessibility (WCAG 2.2, ARIA)"
    ],
    "Performance & Core Web Vitals": [
      "Performance Optimization (LCP, INP, CLS)",
      "Code Splitting & Lazy Loading Strategy",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Edge Caching & Dynamic Asset Optimization",
      "Storybook & Visual Regression Testing"
    ],
    "Security Essentials": [
      "Content Security Policies (CSP)",
      "Input Validation & Schema Enforcement (Zod)",
      "XSS Mitigation & Sanitization (DOMPurify)",
      "Secure Auth Lifecycles (HttpOnly Cookies, JWT Token Management)"
    ],
    "Testing & Quality Automation": [
      "Unit Testing (Vitest, Jest)",
      "End-to-End (E2E) Testing (Playwright, Cypress)",
      "Static Application Security Testing (SonarQube, ESLint)",
      "Code Quality & Git Hooks (Prettier, Husky, Commitlint)",
      "Software Composition Analysis (Dependabot)"
    ],
    "Build, Tooling & Orchestration": [
      "Vite",
      "Webpack",
      "Rollup",
      "Package Managers (NPM, PNPM, Yarn)",
      "BFF / Node.js Mocking / REST & GraphQL Integration"
    ],
    "Agentic AI & Engineering Systems": [
      "Claude AI SDK & Claude Code",
      "GitHub Copilot & AI-Assisted Development",
      "Agentic AI Workflow Design",
      "Advanced Prompt Engineering for Software Delivery"
    ],
    "Cloud & DevOps Infrastructure": [
      "AWS Ecosystem (S3, CloudFront, Lambda, Route 53)",
      "Serverless & Edge Architectures",
      "CI/CD Pipeline Automation (GitHub Actions, GitLab CI, Bitbucket Pipelines)",
      "Infrastructure as Code (Basic CloudFormation/Terraform)"
    ],
    "Polyglot Backend Foundations": [
      "Python",
      "Java"
    ],
    "Leadership & Engineering Delivery": [
      "Technical Governance & Architectural Reviews",
      "Advanced Code Reviews & Quality Gates",
      "Distributed Git Workflows & Branching Strategies (Git, Bitbucket)",
      "Agile Methodologies (Scrum / Kanban via Jira)"
    ]
  },

  education: {
    institution: "Gyan Ganga Institute of Technologies & Sciences, Jabalpur",
    affiliation: "RGPV State University, Madhya Pradesh",
    degree: "Bachelor of Engineering in Information Technology",
    period: "2010 – 2014",
  },

  patent: {
    title: "Method and apparatus for rendering dynamic user interfaces",
    applicationNo: "PCT/US2022/19221",
    publicationNo: "US12210855B2",
    publicationDate: "2025-01-28",
    url: "https://patents.google.com/patent/US12210855B2",
  },

  achievements: [
    "OG-Star of the Quarter — Technology (Oct 2025)",
    "OG-Star of the Quarter — Technology (Sep 2025)",
    "Patent Issued: Dynamic UI Rendering (US12210855B2)",
  ],

  languages: ["English (Fluent)", "Hindi (Native)"],

  stats: {
    years: 11,
    users: "50,000+",
    reusability: "95%",
    devTimeReduction: "70%",
  },
}
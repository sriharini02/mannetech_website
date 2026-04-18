export const COMPANY = {
  name: "Han Solutions",
  shortName: "Han",
  legal: "HAN Solutions LLC",
  tagline: "Empowering Your Businesses",
  description:
    "Han Solutions is a forward-thinking technology partner delivering innovative, cost-effective IT solutions. We work alongside organizations of every size — building scalable software, placing elite talent, and shaping the digital infrastructure of tomorrow.",
  shortDescription:
    "A technology partner for ambitious businesses — building software, placing talent, driving transformation.",
  address: "1581 NJ-27, Edison, NJ 08817",
  phone: "(575) 770-5194",
  phoneHref: "+15757705194",
  email: "info@hansolutions.com",
  hours: "Mon–Fri · 9 AM – 6 PM EST",
  domain: "https://www.hansolutions.com",
  founded: "2021",
  mapCoords: { lat: 40.5187, lng: -74.3487 },
  social: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "IT Staffing", href: "/it-staffing" },
  { label: "Careers", href: "/careers" },
  { label: "Book a Call", href: "/book-appointment" },
];

export const PAGE_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  aboutIntro: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  aboutHero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  aboutEstablished: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  aboutCareers: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  staffingTalent: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
  careers: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  contact: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  whyUs: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  craft: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  founder: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
};

export const SERVICE_IMAGES: Record<string, string> = {
  "cloud-computing": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  "application-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  "managed-it-services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  "software-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
  "ai-machine-learning": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "data-management-analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "enterprise-resource-planning": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  "network-infrastructure": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
  "cyber-security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
  "it-consulting": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
  "automation-devops": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
};

export const SERVICES = [
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    icon: "Cloud",
    kicker: "01",
    shortDesc:
      "Scalable cloud architectures across AWS, Azure, and GCP — engineered to modernize your infrastructure.",
    heroDesc:
      "We architect, deploy, and optimize enterprise-grade cloud environments that scale effortlessly with demand — no lock-in, no bottlenecks.",
    sections: [
      {
        title: "Infrastructure as a Service (IaaS)",
        desc: "Cloud-based storage, virtualization, and automated scalability with reliable security solutions and comprehensive monitoring.",
      },
      {
        title: "Platform as a Service (PaaS)",
        desc: "Build, run and manage applications without in-house infrastructure. Create powerful, secure applications that scale on demand.",
      },
      {
        title: "Software as a Service (SaaS)",
        desc: "Flexible, cost-effective software delivery with minimal upfront costs and reduced maintenance overhead.",
      },
      {
        title: "Serverless Computing",
        desc: "Deploy applications without managing servers. Rapid provisioning with automatic scaling and pay-per-use pricing.",
      },
      {
        title: "Storage as a Service (STaaS)",
        desc: "Scalable, secure cloud storage with multiple layers of redundancy, backup, and 24/7 technical support.",
      },
      {
        title: "Database as a Service (DBaaS)",
        desc: "Managed database solutions with optimal performance, scalability, security, and expert migration assistance.",
      },
      {
        title: "Disaster Recovery as a Service (DRaaS)",
        desc: "Comprehensive disaster recovery including data backup, replication, virtualization, and fast recovery guarantees.",
      },
      {
        title: "Security as a Service (SECaaS)",
        desc: "End-to-end security protection from basic measures to advanced audits, assessments, and compliance tools.",
      },
    ],
    features: [
      "Multi-cloud strategy & migration",
      "24/7 monitoring & support",
      "Cost optimization & governance",
      "Cloud-native application development",
    ],
  },
  {
    slug: "application-development",
    title: "Application Development",
    icon: "Code2",
    kicker: "02",
    shortDesc:
      "Bespoke web and mobile applications built with modern frameworks, obsessive attention to craft.",
    heroDesc:
      "From concept to deployment — we craft applications that solve real business problems and move users effortlessly through them.",
    sections: [
      {
        title: "Web Application Development",
        desc: "Modern, responsive web applications using React, Next.js, Angular, and Vue.js with scalable backend architectures.",
      },
      {
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.",
      },
      {
        title: "API Development & Integration",
        desc: "RESTful and GraphQL API design, development, and third-party integration services.",
      },
      {
        title: "Legacy Modernization",
        desc: "Transform outdated systems into modern, cloud-ready applications while preserving business logic.",
      },
    ],
    features: [
      "Agile development methodology",
      "UI/UX design excellence",
      "Continuous integration & deployment",
      "Performance optimization",
    ],
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    icon: "Settings",
    kicker: "03",
    shortDesc:
      "Proactive IT management and support that keeps your systems running at peak performance around the clock.",
    heroDesc:
      "Let us run your IT operations so you can focus on building your business — zero fire drills, all uptime.",
    sections: [
      {
        title: "24/7 Infrastructure Monitoring",
        desc: "Round-the-clock monitoring of servers, networks, and applications with proactive issue resolution.",
      },
      {
        title: "Help Desk & Technical Support",
        desc: "Multi-tier support structure providing rapid response times and expert troubleshooting.",
      },
      {
        title: "Patch Management & Updates",
        desc: "Automated patch management ensuring all systems are up-to-date and secure.",
      },
      {
        title: "Backup & Recovery",
        desc: "Comprehensive data backup strategies with tested recovery procedures and minimal downtime.",
      },
    ],
    features: [
      "Predictive maintenance",
      "SLA-backed guarantees",
      "Vendor management",
      "IT asset lifecycle management",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    icon: "Terminal",
    kicker: "04",
    shortDesc:
      "End-to-end software engineering — from architecture, to deployment, to lifelong maintenance.",
    heroDesc:
      "We build robust, scalable software systems that drive operational efficiency and sustained competitive advantage.",
    sections: [
      {
        title: "Custom Software Solutions",
        desc: "Tailor-made software applications designed to address your unique business requirements and workflows.",
      },
      {
        title: "Enterprise Software",
        desc: "Large-scale enterprise solutions with microservices architecture, high availability, and fault tolerance.",
      },
      {
        title: "Quality Assurance & Testing",
        desc: "Comprehensive testing strategies including automated testing, performance testing, and security audits.",
      },
      {
        title: "DevOps & CI/CD",
        desc: "Streamlined development pipelines with automated builds, testing, and deployment processes.",
      },
    ],
    features: [
      "Full-stack development",
      "Microservices architecture",
      "Test-driven development",
      "Scalable cloud deployment",
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    icon: "Brain",
    kicker: "05",
    shortDesc:
      "Intelligent solutions powered by artificial intelligence and modern machine-learning pipelines.",
    heroDesc:
      "Harness AI to automate processes, unlock insights, and craft intelligent experiences your users will love.",
    sections: [
      {
        title: "Machine Learning Models",
        desc: "Custom ML model development for prediction, classification, recommendation, and anomaly detection.",
      },
      {
        title: "Natural Language Processing",
        desc: "Chatbots, sentiment analysis, text classification, and language translation solutions.",
      },
      {
        title: "Computer Vision",
        desc: "Image recognition, object detection, facial recognition, and visual inspection systems.",
      },
      {
        title: "Data Science & Analytics",
        desc: "Deep data analysis, predictive modeling, and business intelligence dashboard development.",
      },
    ],
    features: [
      "Custom model training",
      "MLOps & model deployment",
      "Real-time inference",
      "Ethical AI frameworks",
    ],
  },
  {
    slug: "data-management-analytics",
    title: "Data Management & Analytics",
    icon: "BarChart3",
    kicker: "06",
    shortDesc:
      "Transform raw data into measurable business intelligence — without the dashboard bloat.",
    heroDesc:
      "We design data architectures that turn information into your most valuable strategic asset.",
    sections: [
      {
        title: "Data Warehousing",
        desc: "Centralized data repositories optimized for analytical queries and business reporting.",
      },
      {
        title: "Big Data Solutions",
        desc: "Hadoop, Spark, and Kafka-based solutions for processing massive datasets in real-time.",
      },
      {
        title: "Business Intelligence",
        desc: "Interactive dashboards, reports, and visualizations using Tableau, Power BI, and custom tools.",
      },
      {
        title: "Data Governance",
        desc: "Policies, procedures, and standards ensuring data quality, security, and regulatory compliance.",
      },
    ],
    features: [
      "ETL pipeline design",
      "Real-time analytics",
      "Data lake architecture",
      "Compliance & governance",
    ],
  },
  {
    slug: "enterprise-resource-planning",
    title: "Enterprise Resource Planning",
    icon: "LayoutGrid",
    kicker: "07",
    shortDesc:
      "Integrated ERP solutions to unify operations across your entire organization.",
    heroDesc:
      "Unify your business processes with ERP systems designed for maximum efficiency and end-to-end visibility.",
    sections: [
      {
        title: "ERP Implementation",
        desc: "End-to-end ERP deployment including SAP, Oracle, and Microsoft Dynamics implementations.",
      },
      {
        title: "ERP Customization",
        desc: "Tailored modules and workflows to match your specific business processes and requirements.",
      },
      {
        title: "ERP Migration",
        desc: "Seamless migration from legacy systems to modern ERP platforms with zero data loss.",
      },
      {
        title: "ERP Support & Optimization",
        desc: "Ongoing support, performance tuning, and continuous improvement of your ERP ecosystem.",
      },
    ],
    features: [
      "Process automation",
      "Cross-department integration",
      "Real-time reporting",
      "Scalable architecture",
    ],
  },
  {
    slug: "network-infrastructure",
    title: "Network & Infrastructure",
    icon: "Network",
    kicker: "08",
    shortDesc:
      "Robust network design for reliable, high-performance connectivity everywhere you operate.",
    heroDesc:
      "We build the backbone of your digital operations with resilient, secure network architectures.",
    sections: [
      {
        title: "Network Design & Architecture",
        desc: "Comprehensive network planning, design, and implementation for LAN, WAN, and SD-WAN environments.",
      },
      {
        title: "Infrastructure Setup",
        desc: "Server deployment, storage configuration, and virtualization platform setup and management.",
      },
      {
        title: "Network Security",
        desc: "Firewall management, intrusion detection, VPN configuration, and network access control.",
      },
      {
        title: "Performance Optimization",
        desc: "Network monitoring, traffic analysis, and optimization for maximum throughput and minimal latency.",
      },
    ],
    features: [
      "Zero-trust architecture",
      "Hybrid cloud networking",
      "24/7 NOC services",
      "Disaster recovery planning",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    icon: "Shield",
    kicker: "09",
    shortDesc:
      "Multi-layered security that protects your business from evolving threats without slowing it down.",
    heroDesc:
      "Defend your digital assets with multi-layered security strategies and expert threat management.",
    sections: [
      {
        title: "Security Assessment & Auditing",
        desc: "Vulnerability assessments, penetration testing, and compliance audits to identify and remediate risks.",
      },
      {
        title: "Threat Detection & Response",
        desc: "Advanced threat intelligence, SIEM solutions, and incident response services.",
      },
      {
        title: "Identity & Access Management",
        desc: "Multi-factor authentication, SSO, and role-based access control implementations.",
      },
      {
        title: "Compliance & Governance",
        desc: "HIPAA, SOC2, GDPR, and PCI-DSS compliance consulting and implementation.",
      },
    ],
    features: [
      "24/7 security monitoring",
      "Zero-day threat protection",
      "Employee security training",
      "Incident response planning",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: "Lightbulb",
    kicker: "10",
    shortDesc:
      "Strategic technology advisory to align IT investments with your business objectives.",
    heroDesc:
      "Our consultants bring decades of industry depth to help you make informed technology decisions.",
    sections: [
      {
        title: "Technology Strategy",
        desc: "Long-term technology roadmaps aligned with your business goals and market positioning.",
      },
      {
        title: "Digital Transformation",
        desc: "End-to-end digital transformation planning and execution across all business functions.",
      },
      {
        title: "Vendor Selection & Management",
        desc: "Objective technology evaluation, vendor comparison, and ongoing relationship management.",
      },
      {
        title: "Process Optimization",
        desc: "Business process analysis, re-engineering, and automation recommendations.",
      },
    ],
    features: [
      "CTO-as-a-Service",
      "Technology due diligence",
      "Architecture review",
      "Cost optimization",
    ],
  },
  {
    slug: "automation-devops",
    title: "Automation & DevOps",
    icon: "Workflow",
    kicker: "11",
    shortDesc:
      "Streamline your development lifecycle — CI/CD pipelines, IaC, and infrastructure automation.",
    heroDesc:
      "Accelerate delivery, reduce errors, and improve collaboration through a complete DevOps transformation.",
    sections: [
      {
        title: "CI/CD Pipeline Design",
        desc: "Automated build, test, and deployment pipelines using Jenkins, GitHub Actions, GitLab CI, and Azure DevOps.",
      },
      {
        title: "Infrastructure as Code",
        desc: "Terraform, Ansible, and CloudFormation-based infrastructure provisioning and management.",
      },
      {
        title: "Container Orchestration",
        desc: "Docker and Kubernetes-based container management for microservices deployments.",
      },
      {
        title: "Monitoring & Observability",
        desc: "Comprehensive monitoring with Prometheus, Grafana, ELK stack, and custom alerting systems.",
      },
    ],
    features: [
      "GitOps workflows",
      "Auto-scaling infrastructure",
      "Blue-green deployments",
      "Chaos engineering",
    ],
  },
];

export const STATS = [
  { number: "50+", label: "Companies Served", sub: "across six industries" },
  { number: "1,500+", label: "Professionals Placed", sub: "since 2021" },
  { number: "95%", label: "Client Retention", sub: "year-over-year" },
  { number: "24/7", label: "Support Available", sub: "every time zone" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Han Solutions exceeded every expectation. Their cloud migration strategy saved us 40% on infrastructure costs while actually improving performance.",
    name: "George McConnell",
    role: "Global Operations Manager",
    company: "TechVista Corp",
  },
  {
    quote:
      "The Han team shipped our AI-powered analytics platform ahead of schedule. Their technical depth and communication made the entire process feel effortless.",
    name: "Tanya Weigelt",
    role: "Director, Digital Operations",
    company: "Meridian Health Systems",
  },
  {
    quote:
      "We've worked with Han for three years now — across staffing and consulting. They consistently bring top-tier talent that slots perfectly into our teams.",
    name: "David Park",
    role: "VP of Engineering",
    company: "Nexus Financial",
  },
];

export const JOBS = [
  {
    slug: "software-developer-hsd24",
    title: "Software Developer",
    code: "HSD24",
    type: "Full-time",
    location: "Edison, NJ / Remote",
    experience: "Master's or equivalent",
    description:
      "Develop, create, and modify computer applications software. Design and implement scalable backend systems and responsive front-end interfaces.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "Proficiency in Java, Python, or JavaScript/TypeScript",
      "Experience with React, Angular, or Vue.js",
      "Strong understanding of software design patterns",
      "Experience with cloud platforms (AWS/Azure/GCP)",
    ],
  },
  {
    slug: "qa-engineer-hqe24",
    title: "QA Engineer I",
    code: "HQE24",
    type: "Full-time",
    location: "Edison, NJ / Remote",
    experience: "Master's + 2 yrs exp or equivalent",
    description:
      "Design and execute test plans, automate testing processes, and ensure software quality across every deliverable.",
    requirements: [
      "SQL, NoSQL, Agile Scrum methodology",
      "JMeter, Java, Maven, GitHub, and Jenkins",
      "Experience with automated testing frameworks",
      "Strong analytical and problem-solving skills",
      "Excellent communication and documentation abilities",
    ],
  },
  {
    slug: "qa-engineer-ii-hqe23",
    title: "QA Engineer II",
    code: "HQE23",
    type: "Full-time",
    location: "Edison, NJ / Remote",
    experience: "Bachelor's + 3 yrs exp or equivalent",
    description:
      "Lead quality assurance efforts including test strategy, automation framework design, and performance testing.",
    requirements: [
      "SQL, Java, Maven, Jenkins, Linux",
      "ALM, Jira, and JMeter proficiency",
      "Experience leading QA teams",
      "Performance and security testing experience",
      "CI/CD pipeline integration knowledge",
    ],
  },
  {
    slug: "devops-engineer-hde24",
    title: "DevOps Engineer",
    code: "HDE24",
    type: "Full-time",
    location: "Edison, NJ / Hybrid",
    experience: "Bachelor's + 2 yrs exp or equivalent",
    description:
      "Design, implement, and manage CI/CD pipelines, container orchestration, and cloud infrastructure automation.",
    requirements: [
      "Experience with Docker, Kubernetes, Terraform",
      "AWS/Azure/GCP certification preferred",
      "Strong scripting skills (Bash, Python)",
      "Experience with monitoring tools (Prometheus, Grafana)",
      "Understanding of networking and security principles",
    ],
  },
  {
    slug: "full-stack-developer-hfs24",
    title: "Full Stack Developer",
    code: "HFS24",
    type: "Full-time",
    location: "Edison, NJ / Remote",
    experience: "Bachelor's + 2 yrs exp or equivalent",
    description:
      "Build and maintain full-stack web applications using modern JavaScript frameworks and scalable backend technologies.",
    requirements: [
      "React/Next.js and Node.js proficiency",
      "Database design (PostgreSQL, MongoDB)",
      "RESTful API and GraphQL experience",
      "Version control with Git",
      "Agile/Scrum methodology experience",
    ],
  },
];

export const STAFFING_SERVICES = [
  {
    title: "Temporary & Contract Staffing",
    desc: "Flexible workforce solutions for short-term projects and seasonal demands.",
  },
  {
    title: "Direct Hire / Permanent Placement",
    desc: "End-to-end recruitment for full-time positions across all technology domains.",
  },
  {
    title: "Payroll Services",
    desc: "Comprehensive payroll management and compliance administration.",
  },
  {
    title: "On-Site Management",
    desc: "Dedicated on-site coordinators to manage your contingent workforce.",
  },
  {
    title: "Recruitment Process Outsourcing",
    desc: "Scalable RPO solutions to streamline your entire recruitment lifecycle.",
  },
  {
    title: "Human Resource Outsourcing",
    desc: "Complete HR function outsourcing from onboarding to benefits administration.",
  },
  {
    title: "Immigration Services",
    desc: "H-1B, L-1, and Green Card sponsorship and immigration process management.",
  },
  {
    title: "Employee Assessment Services",
    desc: "Technical assessments, background checks, and skill validation programs.",
  },
  {
    title: "Contract-to-Hire",
    desc: "Try before you commit — evaluate talent on contract before making a permanent offer.",
  },
];

export const PARTNERS = [
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft/0B2545" },
  { name: "Amazon Web Services", logo: "https://cdn.simpleicons.org/amazonwebservices/0B2545" },
  { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/0B2545" },
  { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/0B2545" },
  { name: "Oracle", logo: "https://cdn.simpleicons.org/oracle/0B2545" },
  { name: "SAP", logo: "https://cdn.simpleicons.org/sap/0B2545" },
  { name: "ServiceNow", logo: "https://cdn.simpleicons.org/servicenow/0B2545" },
  { name: "Atlassian", logo: "https://cdn.simpleicons.org/atlassian/0B2545" },
  { name: "IBM", logo: "https://cdn.simpleicons.org/ibm/0B2545" },
  { name: "Red Hat", logo: "https://cdn.simpleicons.org/redhat/0B2545" },
];

export const PRINCIPLES = [
  {
    number: "I",
    title: "Listen, always first.",
    desc: "Before a single line of code, we sit with the problem. Understanding beats assumption every time.",
  },
  {
    number: "II",
    title: "Plan with intent.",
    desc: "Great architecture is invisible. We plan quietly so delivery can feel inevitable.",
  },
  {
    number: "III",
    title: "Deliver with rigor.",
    desc: "Every handoff is audited, tested, and supported — long after the project closes.",
  },
  {
    number: "IV",
    title: "Scale responsibly.",
    desc: "Your IT budget should never outpace your revenue. We build to match your trajectory, not inflate it.",
  },
];

export const CAPABILITIES = [
  "Big Data Solutions",
  "Artificial Intelligence",
  "Java Development",
  "Microsoft Technologies",
  "Database Management",
  "Web Technologies",
  "Software Testing",
  "Networking & Security",
];

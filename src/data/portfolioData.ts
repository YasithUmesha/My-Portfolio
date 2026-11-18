export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName: "github" | "linkedin" | "mail";
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools" | "Other";
  iconName?: string;
  levelBadge?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Full-Stack" | "Web Application" | "Frontend";
  technologies: string[];
  features: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  isCurrent: boolean;
  isPlaceholder: boolean;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  university: string;
  period: string;
  status: string;
  faculty: string;
  description: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  credentialId?: string;
  image: string;
  skills: string[];
  isPlaceholder: boolean;
}

export const portfolioData = {
  // 1. Personal & Brand Details
  personal: {
    name: "Yasith Umesha",
    shortName: "Yasith",
    role: "Full-Stack Developer",
    typedTitles: [
      "Full-Stack Developer",
      "Information Systems Undergraduate",
      "UI/UX Enthusiast",
      "API & Database Builder",
      "Problem Solver"
    ],
    greeting: "Hi, I'm Yasith",
    tagline: "Building scalable, elegant web applications and robust digital products.",
    shortBio: "Information Systems undergraduate at Sabaragamuwa University of Sri Lanka passionate about building useful, user-friendly, and modern web applications.",
    university: "Sabaragamuwa University of Sri Lanka",
    degree: "BSc (Hons) in Information Systems undergraduate",
    statusBadge: "Available for Internships & Opportunities",
    location: "Sri Lanka",
    email: "yasithumesha.dev@gmail.com",
    avatar: "/avatar.jpg",
    heroAvatar: "/hero-avatar.jpg",
    cvUrl: "#", // Clearly marked placeholder: replace with your actual CV/Resume file URL (e.g. /Yasith_Umesha_CV.pdf)
    hasRealCV: false,
    goals: "Building a strong online presence to showcase software projects, technical skills, certifications, and hands-on experience to recruiters and engineering teams.",
    interests: [
      "Full-Stack Web Development",
      "UI/UX Design & Prototyping",
      "Software Engineering & Architecture",
      "RESTful API Development",
      "Database Modeling & Management"
    ],
    aboutText: [
      "I am an Information Systems undergraduate at Sabaragamuwa University of Sri Lanka with a genuine passion for engineering modern web applications that unite clean architecture with intuitive user interfaces.",
      "My journey spans frontend craftsmanship with React, Next.js, and Tailwind CSS, all the way to backend services, REST APIs, and database engineering using Node.js, Express, MongoDB, and PostgreSQL.",
      "I thrive in collaborative agile environments, love turning complex problems into elegant software solutions, and continually expand my knowledge of emerging web technologies."
    ],
    highlights: [
      {
        title: "Academic Background",
        value: "BSc (Hons) in IS",
        subtitle: "Sabaragamuwa University of Sri Lanka"
      },
      {
        title: "Core Stacks",
        value: "Full-Stack Dev",
        subtitle: "React, Next.js, Node & DBs"
      },
      {
        title: "Engineering Mindset",
        value: "Clean & Scalable",
        subtitle: "Performance & Best Practices"
      },
      {
        title: "Current Status",
        value: "Open to Work",
        subtitle: "Internships & Software Roles"
      }
    ]
  },

  // 2. Navigation
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" }
  ] as NavItem[],

  // 3. Social & Professional Profiles
  socials: [
    {
      platform: "GitHub",
      label: "YasithUmesha",
      url: "https://github.com/YasithUmesha",
      iconName: "github"
    },
    {
      platform: "LinkedIn",
      label: "yasith-umesha",
      url: "https://www.linkedin.com/in/yasith-umesha",
      iconName: "linkedin"
    },
    {
      platform: "Email",
      label: "yasithumesha.dev@gmail.com",
      url: "mailto:yasithumesha.dev@gmail.com",
      iconName: "mail"
    }
  ] as SocialLink[],

  // 4. Technical Skills (Categorized & Editable)
  skills: [
    // Frontend
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript (ES6+)", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "REST APIs", category: "Backend" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },

    // Tools
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Postman", category: "Tools" },

    // Other Core Competencies
    { name: "Responsive Web Design", category: "Other" },
    { name: "API Integration", category: "Other" },
    { name: "Database Management", category: "Other" },
    { name: "Problem Solving", category: "Other" }
  ] as SkillItem[],

  // 5. Featured Projects
  projects: [
    {
      id: "mealmate",
      name: "MealMate",
      tagline: "Smart Meal Planning & Dietary Assistant",
      description: "A full-featured web application designed for curated meal scheduling, nutritional breakdown, and recipe discovery.",
      longDescription: "MealMate helps users optimize their daily nutrition with custom meal schedules, pantry tracking, and recipe recommendations. Developed with modular components and modern API flows.",
      category: "Full-Stack",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Curated daily and weekly meal plans with calorie tracking",
        "Interactive recipe search and ingredient categorization",
        "RESTful API backend for user profiles and favorites",
        "Responsive glassmorphism dashboard UI"
      ],
      repoUrl: "https://github.com/YasithUmesha",
      liveUrl: "https://github.com/YasithUmesha",
      image: "/projects/mealmate.svg",
      featured: true
    },
    {
      id: "smartrent",
      name: "SmartRent",
      tagline: "Property Rental & Tenant Platform",
      description: "A modern rental platform created to streamline property listings, location-based searches, and rental inquiries.",
      longDescription: "SmartRent bridges property owners and prospective tenants with an intuitive booking flow, responsive property cards, interactive filters, and verified property badges.",
      category: "Web Application",
      technologies: ["Next.js", "React", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      features: [
        "Dynamic listing search with price, bedroom, and location filters",
        "Clean property detail view with status tags and tour booking",
        "Optimized mobile navigation and touch-friendly controls",
        "Backend schema structured for multi-tenant scalability"
      ],
      repoUrl: "https://github.com/YasithUmesha",
      liveUrl: "https://github.com/YasithUmesha",
      image: "/projects/smartrent.svg",
      featured: true
    },
    {
      id: "portfolio",
      name: "Personal Portfolio",
      tagline: "Developer Brand & Project Showcase",
      description: "A modern, high-performance developer portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.",
      longDescription: "Designed with a cosmic dark aesthetic inspired by top modern portfolios, featuring smooth section animations, centralized data configuration, project modal previews, and complete mobile responsiveness.",
      category: "Frontend",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Lucide React"],
      features: [
        "Cosmic dark theme with ambient lighting and glassmorphism",
        "Centralized configuration file for rapid content updates",
        "Interactive project preview modal and skill category filtering",
        "Client-side validated contact form ready for email service integration"
      ],
      repoUrl: "https://github.com/YasithUmesha",
      liveUrl: "#home",
      image: "/projects/portfolio.svg",
      featured: true
    }
  ] as ProjectItem[],

  // 6. Experience (Timeline)
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer Intern (Placeholder)",
      company: "[Company / Organization Name - Editable Placeholder]",
      location: "Sri Lanka",
      period: "2024 - Present",
      type: "Internship",
      isCurrent: true,
      isPlaceholder: true,
      description: [
        "Collaborating with senior engineers to develop and maintain full-stack web applications.",
        "Building responsive, accessible frontend interfaces and integrating backend RESTful APIs.",
        "Writing clean, modular code, participating in code reviews, and following agile workflows."
      ],
      technologies: ["React", "Next.js", "Node.js", "REST APIs", "Git", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      role: "Undergraduate Software Project Developer",
      company: "Sabaragamuwa University of Sri Lanka",
      location: "Belihuloya, Sri Lanka",
      period: "2023 - Present",
      type: "Academic & Projects",
      isCurrent: false,
      isPlaceholder: false,
      description: [
        "Designed and implemented full-stack web projects adhering to software engineering principles.",
        "Structured relational (MySQL, PostgreSQL) and NoSQL (MongoDB) database architectures.",
        "Practiced system analysis, requirements gathering, and modern UI/UX design heuristics."
      ],
      technologies: ["Next.js", "JavaScript", "MongoDB", "MySQL", "UI/UX Design", "Postman"]
    }
  ] as ExperienceItem[],

  // 7. Education & Certificates
  education: {
    degree: "BSc (Hons) in Information Systems",
    university: "Sabaragamuwa University of Sri Lanka",
    period: "Undergraduate (Present)",
    status: "Undergraduate Student",
    faculty: "Faculty of Computing",
    description: "Rigorous curriculum encompassing enterprise software development, database architecture, distributed systems, system analysis and design, and web technologies.",
    highlights: [
      "Enterprise Software Engineering & Architecture",
      "Relational & NoSQL Database Management Systems",
      "Web Applications & Distributed Computing",
      "Systems Analysis, Design & Project Management",
      "Data Structures, Algorithms & Problem Solving"
    ]
  } as EducationItem,

  certificates: [
    {
      id: "cert-1",
      title: "Full-Stack Web Development Specialization (Placeholder)",
      issuer: "[Issuing Academy / Platform - e.g. Coursera, Udemy, freeCodeCamp]",
      issueDate: "2024",
      credentialUrl: "https://example.com/credential-placeholder",
      credentialId: "CERT-FS-2024-PLACEHOLDER",
      image: "/certificates/cert-placeholder.svg",
      skills: ["React", "Node.js", "Express.js", "MongoDB"],
      isPlaceholder: true
    },
    {
      id: "cert-2",
      title: "Modern JavaScript & Front-End Architecture (Placeholder)",
      issuer: "[Issuing Academy / Platform - e.g. Meta, HackerRank]",
      issueDate: "2024",
      credentialUrl: "https://example.com/credential-placeholder",
      credentialId: "CERT-JS-2024-PLACEHOLDER",
      image: "/certificates/cert-placeholder.svg",
      skills: ["JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS"],
      isPlaceholder: true
    },
    {
      id: "cert-3",
      title: "Database Management & SQL Systems (Placeholder)",
      issuer: "[Issuing Academy / Platform - e.g. Oracle, Coursera]",
      issueDate: "2023",
      credentialUrl: "https://example.com/credential-placeholder",
      credentialId: "CERT-DB-2023-PLACEHOLDER",
      image: "/certificates/cert-placeholder.svg",
      skills: ["MySQL", "PostgreSQL", "Database Design", "REST APIs"],
      isPlaceholder: true
    }
  ] as CertificateItem[],

  // 8. Contact Details
  contact: {
    invitation: "Have an internship opportunity, project collaboration, or question? Feel free to reach out. I would love to hear from you!",
    email: "yasithumesha.dev@gmail.com",
    location: "Sri Lanka",
    availability: "Actively seeking internship and full-stack software engineering opportunities",
    github: "https://github.com/YasithUmesha",
    linkedin: "https://www.linkedin.com/in/yasith-umesha"
  }
};

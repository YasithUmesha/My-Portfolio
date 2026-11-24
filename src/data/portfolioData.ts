export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools" | "Other";
  icon?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Full-Stack" | "Web Application" | "Frontend" | "Mobile";
  technologies: string[];
  features: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  university: string;
  period: string;
  status: string;
  faculty: string;
  description: string;
  highlights: string[];
  secondary?: {
    exam: string;
    school: string;
    period: string;
  };
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

export interface VolunteerItem {
  role: string;
  organization: string;
  period?: string;
  description: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
}

export const portfolioData = {
  // 1. Personal & Brand Details
  personal: {
    name: "Yasith Umesha",
    shortName: "Yasith",
    role: "Full Stack Developer",
    typedTitles: [
      "Full Stack Developer",
      "React.js & Next.js Builder",
      "Node.js & Express Engineer",
      "REST API & Database Architect",
      "Software Engineering Enthusiast"
    ],
    greeting: "Hi, I'm Yasith",
    tagline: "Engineering scalable web applications, robust REST APIs, and modern digital experiences.",
    shortBio: "Full Stack Developer and Information Systems undergraduate crafting modern web applications, scalable REST APIs, and clean user experiences.",
    university: "Sabaragamuwa University of Sri Lanka",
    degree: "BSc. (Hons) in Information Systems",
    statusBadge: "Available for Internships & Opportunities",
    availabilityBadge: "Available for Internships & Opportunities",
    location: "Sabaragamuwa, Sri Lanka",
    phone: "(+94) 77 368 9599",
    email: "Yasithumesha016@gmail.com",
    avatar: "/avatar.jpg",
    heroAvatar: "/hero-avatar.jpg",
    cvUrl: "#",
    hasRealCV: true,
    interests: [
      "Full-Stack Web Development",
      "RESTful API & Backend Systems",
      "Database Architecture & Optimization",
      "Responsive UI/UX Engineering",
      "Cloud & Modern DevOps Workflows"
    ],
    aboutText: [
      "Full Stack Developer and Information Systems undergraduate with hands-on experience building performant web apps and reliable APIs.",
      "Specialized in TypeScript, React, Next.js, Node.js, and databases (MongoDB, MySQL, Supabase). Focused on clean architecture and intuitive user experiences."
    ],
    highlights: [
      {
        title: "Primary Specialization",
        value: "Full Stack Dev",
        subtitle: "React.js, Next.js, Node & DBs"
      },
      {
        title: "Database Modeling",
        value: "MongoDB & MySQL",
        subtitle: "Relational & Document Stores"
      },
      {
        title: "Engineering Mindset",
        value: "Clean & Scalable",
        subtitle: "Type Safety & Robust APIs"
      },
      {
        title: "Live Status",
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
      label: "Yasithumesha016@gmail.com",
      url: "mailto:Yasithumesha016@gmail.com",
      iconName: "mail"
    }
  ] as SocialLink[],

  // 4. Technical Skills (Directly from CV)
  skills: [
    // Programming Languages
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Java", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },

    // Frontend Development
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },

    // Backend Development
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "JWT Authentication", category: "Backend" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "Supabase / SQL", category: "Databases" },

    // Tools & Platforms
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Vercel", category: "Tools" },
    { name: "Vite", category: "Tools" }
  ] as SkillItem[],

  // 5. Real Projects from CV
  projects: [
    {
      id: "farmtrust",
      name: "FarmTrust",
      tagline: "Direct Farmer-to-Buyer Marketplace",
      description: "Full-stack platform connecting Sri Lankan farmers directly with buyers to improve accessibility and pricing transparency.",
      longDescription: "Developed with responsive user and admin dashboards featuring real-time crop listings, inventory search, and MongoDB transactions.",
      category: "Full-Stack",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Direct farmer-to-buyer marketplace connecting local producers with buyers",
        "Responsive user and admin dashboards with real-time crop listings",
        "Dynamic inventory search, filtering, and user management workflows",
        "Backend services and MongoDB operations for scalable transactions"
      ],
      repoUrl: "https://github.com/YasithUmesha",
      liveUrl: "https://github.com/YasithUmesha",
      image: "/projects/farmtrust.svg",
      featured: true
    },
    {
      id: "rentsmart",
      name: "RentSmart",
      tagline: "Mobile-First Item Rental Platform",
      description: "Responsive item rental platform allowing users to browse, search, and list equipment with dynamic category filtering.",
      longDescription: "Features category filtering, dynamic item detail pages, listing creation with validation, and a sleek mobile-first dark UI.",
      category: "Frontend",
      technologies: ["React.js", "TypeScript", "Vite", "React Router", "Tailwind CSS"],
      features: [
        "Category-based filtering and dynamic item detail pages",
        "Item listing creation forms with client-side validation",
        "Clean authentication interfaces and responsive user sessions",
        "Mobile-first responsive architecture built with strict TypeScript"
      ],
      repoUrl: "https://github.com/YasithUmesha",
      liveUrl: "https://github.com/YasithUmesha",
      image: "/projects/smartrent.svg",
      featured: true
    },
    {
      id: "mealmate",
      name: "MealMate",
      tagline: "Campus Food Ordering Platform",
      description: "Collaborative food ordering system connecting students with campus food outlets, featuring JWT authentication.",
      longDescription: "Engineered database schema, Supabase integration, JWT authentication, role-based middleware, and cross-platform Flutter UI.",
      category: "Full-Stack",
      technologies: ["Flutter", "Supabase", "SQL", "REST APIs", "JWT Authentication"],
      features: [
        "Backend foundation with database schema design and Supabase setup",
        "User registration, secure login, and JWT token-based authentication",
        "Role-based middleware and centralized error handling for client calls",
        "Cross-platform Flutter application structure, navigation, and theme system"
      ],
      repoUrl: "https://github.com/YasithUmesha",
      liveUrl: "https://github.com/YasithUmesha",
      image: "/projects/mealmate.svg",
      featured: true
    }
  ] as ProjectItem[],

  // 6. Education & Academic Background (Centralized, No Repetition Elsewhere)
  education: {
    degree: "BSc. (Hons) in Information Systems",
    university: "Sabaragamuwa University of Sri Lanka",
    period: "2024 – Present",
    status: "Undergraduate Student",
    faculty: "Faculty of Computing",
    description: "Curriculum emphasizing software engineering principles, database architecture, distributed systems, and full-stack application development.",
    highlights: [
      "Enterprise Software Engineering & Web Architecture",
      "Relational (MySQL) & Document (MongoDB) Database Systems",
      "RESTful API Development & Distributed Computing",
      "System Analysis, Design Patterns & Agile Methodologies"
    ],
    secondary: {
      exam: "G.C.E. Advanced Level",
      school: "R/B/ Ananda Maithreya Central College, Sri Lanka",
      period: "2022 / 2023"
    }
  } as EducationItem,

  // 7. Verified Certifications from CV
  certificates: [
    {
      id: "cert-1",
      title: "Full Stack React with Spring Boot: Unit 2",
      issuer: "Pearson / Coursera",
      issueDate: "Verified Credential",
      credentialUrl: "https://www.coursera.org/",
      credentialId: "COURSERA-PEARSON-FS-REACT",
      image: "/certificates/cert-placeholder.svg",
      skills: ["React.js", "Spring Boot", "Full Stack", "REST APIs"],
      isPlaceholder: false
    },
    {
      id: "cert-2",
      title: "Introduction to AI",
      issuer: "Google / Coursera",
      issueDate: "Verified Credential",
      credentialUrl: "https://www.coursera.org/",
      credentialId: "COURSERA-GOOGLE-AI",
      image: "/certificates/cert-placeholder.svg",
      skills: ["Artificial Intelligence", "AI Concepts", "Google Cloud AI"],
      isPlaceholder: false
    },
    {
      id: "cert-3",
      title: "Introduction to Artificial Intelligence",
      issuer: "Simplilearn",
      issueDate: "Verified Credential",
      credentialUrl: "https://www.simplilearn.com/",
      credentialId: "SIMPLILEARN-AI-INTRO",
      image: "/certificates/cert-placeholder.svg",
      skills: ["AI Fundamentals", "Machine Learning", "Data Intelligence"],
      isPlaceholder: false
    },
    {
      id: "cert-4",
      title: "Introduction to MERN Stack",
      issuer: "Simplilearn",
      issueDate: "Verified Credential",
      credentialUrl: "https://www.simplilearn.com/",
      credentialId: "SIMPLILEARN-MERN-STACK",
      image: "/certificates/cert-placeholder.svg",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      isPlaceholder: false
    },
    {
      id: "cert-5",
      title: "ReactJS with AI for Beginners [LIVE] – Batch 01",
      issuer: "eLearning.lk",
      issueDate: "Verified Credential",
      credentialUrl: "https://elearning.lk/",
      credentialId: "ELEARNING-LK-REACT-AI",
      image: "/certificates/cert-placeholder.svg",
      skills: ["React.js", "AI Integration", "Modern UI", "Frontend Engineering"],
      isPlaceholder: false
    }
  ] as CertificateItem[],

  // 8. Volunteering & Leadership (From CV)
  volunteering: [
    {
      role: "Technical Team Member",
      organization: "Aurelia 2.0 (2026) – IEEE WIE Affinity Group, Sabaragamuwa University of Sri Lanka",
      period: "2026",
      description: "Contributing technical expertise and digital support for IEEE Women in Engineering initiatives."
    },
    {
      role: "Active Member",
      organization: "Society of Computer Sciences (SOCS), Sabaragamuwa University of Sri Lanka",
      period: "Active",
      description: "Participating in computer science community development, coding workshops, and tech conferences."
    },
    {
      role: "Volunteer",
      organization: "Hope 2.0 – IEEE WIE of SUSL",
      period: "Completed",
      description: "Participated in educational support programs for underprivileged local community schools."
    }
  ] as VolunteerItem[],

  // 9. References (From CV)
  references: [
    {
      name: "Prof. B.T.G.S. Kumara",
      title: "Professor in Computer Science",
      organization: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
      email: "kumara@foc.sab.ac.lk",
      phone: "(+94) 71 443 1192"
    },
    {
      name: "Ravin Bandara",
      title: "Senior Software Quality Assurance Engineer",
      organization: "Virtusa Pvt Limited",
      email: "ravinbandara@virtusa.com",
      phone: "(+94) 71 707 9612"
    }
  ] as ReferenceItem[],

  // 10. Contact Details
  contact: {
    invitation: "Have an internship opportunity, project collaboration, or technical inquiry? Let's connect.",
    email: "Yasithumesha016@gmail.com",
    phone: "(+94) 77 368 9599",
    location: "Sabaragamuwa, Sri Lanka",
    availability: "Available for Internships & Software Engineering Opportunities",
    github: "https://github.com/YasithUmesha",
    linkedin: "https://www.linkedin.com/in/yasith-umesha"
  }
};

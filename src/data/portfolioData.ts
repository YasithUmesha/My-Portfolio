export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
};

export const portfolioData = {
  name: "Yasith Umesha",
  title: "Full-Stack Developer & Problem Solver",
  subtitle: "I build modern web experiences and reliable products with a product mindset.",
  location: "Sri Lanka",
  email: "yasithumesha.dev@gmail.com",
  bio: [
    "I am a software developer focused on turning ideas into practical, user-friendly digital products.",
    "I enjoy building clean interfaces, solving real-world problems, and learning new tools that improve product quality.",
    "My work blends front-end craft, back-end logic, and thoughtful product decisions."
  ],
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  stats: [
    { label: "Projects built", value: "10+" },
    { label: "Years learning", value: "3+" },
    { label: "Focus areas", value: "Full-stack" }
  ],
  socialLinks: [
    { label: "GitHub", url: "https://github.com/YasithUmesha", icon: "GH" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yasith-umesha", icon: "IN" },
    { label: "Email", url: "mailto:yasithumesha.dev@gmail.com", icon: "@" }
  ] as SocialLink[],
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Figma", "VS Code", "Docker", "CI/CD"]
    }
  ],
  projects: [
    {
      name: "FarmtrustDemo",
      description: "A modern demo platform designed to support agricultural trust and community-based project visibility.",
      stack: ["Next.js", "TypeScript", "CSS Modules"],
      repoUrl: "https://github.com/YasithUmesha/FarmtrustDemo",
      image: "/farmtrust-demo.svg"
    },
    {
      name: "Smart-Rent",
      description: "A rental and property management experience focused on clean workflows and accessible user interactions.",
      stack: ["React", "Node.js", "MongoDB"],
      repoUrl: "https://github.com/YasithUmesha/Smart-Rent",
      image: "/smart-rent.svg"
    },
    {
      name: "HYZE",
      description: "A product-inspired concept aimed at bringing smarter automation and improved digital efficiency to everyday workflows.",
      stack: ["Next.js", "TypeScript", "UI Design"],
      repoUrl: "https://github.com/YasithUmesha/HYZE",
      image: "/hyze.svg"
    }
  ] as Project[],
  contact: {
    email: "yasithumesha.dev@gmail.com",
    github: "https://github.com/YasithUmesha",
    linkedin: "https://www.linkedin.com/in/yasith-umesha"
  }
};

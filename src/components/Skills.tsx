"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import {
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  JavascriptIcon,
  TailwindIcon,
  HtmlIcon,
  CssIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  PostgresqlIcon,
  MysqlIcon,
  GitIcon,
  GithubIcon,
  VscodeIcon,
  PostmanIcon,
  TechLogo
} from "./Icons";
import {
  Terminal,
  Monitor,
  Server,
  Database,
  Workflow,
  Cpu,
  Sparkles,
  CheckCircle2,
  Code2,
  Layers,
  ArrowRight
} from "lucide-react";

export default function Skills() {
  const skillFeatures = [
    {
      id: "frontend",
      category: "Frontend Engineering & Reactive UI",
      badge: "User Interface",
      accentColor: "from-[#00f0ff] to-[#38bdf8]",
      borderHover: "hover:border-[#00f0ff]/50",
      iconColor: "text-[#00f0ff]",
      icon: <Monitor className="w-6 h-6 text-[#00f0ff]" />,
      description:
        "Building reactive, high-performance client web applications with modern component architectures, type safety, and responsive design systems.",
      techStack: [
        { name: "React", icon: <ReactIcon className="w-6 h-6" />, tag: "Component State" },
        { name: "Next.js", icon: <NextjsIcon className="w-6 h-6" />, tag: "SSR & App Router" },
        { name: "TypeScript", icon: <TypescriptIcon className="w-6 h-6" />, tag: "Type Safety" },
        { name: "JavaScript", icon: <JavascriptIcon className="w-6 h-6" />, tag: "ES6+ Async" },
        { name: "Tailwind CSS", icon: <TailwindIcon className="w-6 h-6" />, tag: "Responsive UI" },
        { name: "HTML5 / CSS3", icon: <HtmlIcon className="w-6 h-6" />, tag: "Semantic Web" },
      ],
      capabilities: [
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Fluid Micro-Interactions with Framer Motion",
        "Mobile-first responsive typography and viewport layouts"
      ]
    },
    {
      id: "backend",
      category: "Backend Services & API Architecture",
      badge: "Server Runtime",
      accentColor: "from-[#38bdf8] to-[#2563eb]",
      borderHover: "hover:border-[#38bdf8]/50",
      iconColor: "text-[#38bdf8]",
      icon: <Server className="w-6 h-6 text-[#38bdf8]" />,
      description:
        "Structuring scalable backend services, RESTful communication protocols, authentication layers, and asynchronous request pipelines.",
      techStack: [
        { name: "Node.js", icon: <NodejsIcon className="w-6 h-6" />, tag: "Asynchronous I/O" },
        { name: "Express.js", icon: <ExpressIcon className="w-6 h-6" />, tag: "Middleware Engine" },
        { name: "REST APIs", icon: <TechLogo name="rest" className="w-6 h-6 text-[#00f0ff]" />, tag: "RESTful Standards" },
      ],
      capabilities: [
        "RESTful API design with clean resource routing",
        "Stateless token-based authentication (JWT) & session guards",
        "Structured error handling pipelines and CORS validation"
      ]
    },
    {
      id: "databases",
      category: "Database Modeling & Data Persistence",
      badge: "Storage Engine",
      accentColor: "from-[#60a5fa] to-[#00f0ff]",
      borderHover: "hover:border-[#60a5fa]/50",
      iconColor: "text-[#60a5fa]",
      icon: <Database className="w-6 h-6 text-[#60a5fa]" />,
      description:
        "Designing relational and document database architectures, schema validation models, and query structures for data integrity.",
      techStack: [
        { name: "MongoDB", icon: <MongodbIcon className="w-6 h-6" />, tag: "NoSQL Collections" },
        { name: "PostgreSQL", icon: <PostgresqlIcon className="w-6 h-6" />, tag: "Relational Tables" },
        { name: "MySQL", icon: <MysqlIcon className="w-6 h-6" />, tag: "Structured Queries" },
      ],
      capabilities: [
        "Relational foreign key constraints & NoSQL document embedding",
        "Indexing strategies for performant read/write execution",
        "CRUD abstraction layers and connection pool optimization"
      ]
    },
    {
      id: "tools",
      category: "Developer Tooling, Version Control & CI",
      badge: "Workflow & DevOps",
      accentColor: "from-[#fb923c] to-[#f59e0b]",
      borderHover: "hover:border-[#fb923c]/50",
      iconColor: "text-[#fb923c]",
      icon: <Workflow className="w-6 h-6 text-[#fb923c]" />,
      description:
        "Employing industry-standard version control workflows, automated endpoint verification, and configured development environments.",
      techStack: [
        { name: "Git", icon: <GitIcon className="w-6 h-6" />, tag: "Distributed VCS" },
        { name: "GitHub", icon: <GithubIcon className="w-6 h-6" />, tag: "Repositories & PRs" },
        { name: "VS Code", icon: <VscodeIcon className="w-6 h-6" />, tag: "Primary IDE" },
        { name: "Postman", icon: <PostmanIcon className="w-6 h-6" />, tag: "Endpoint Testing" },
      ],
      capabilities: [
        "Trunk-based branch discipline and collaborative Git PRs",
        "Automated API testing collections and mock server environments",
        "Strict ESLint standards and continuous deployment to Vercel"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 sm:py-28 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[700px] h-[700px] bg-[#00f0ff]/[0.035] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#2563eb]/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Expanded Container Width to Remove Side Gaps */}
      <div className="w-full max-w-7xl mx-auto my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0e17] border border-[#00f0ff]/30 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#00f0ff] mb-4 shadow-[0_0_15px_rgba(0,240,255,0.12)]"
          >
            <Terminal className="w-4 h-4 text-[#00f0ff]" />
            <span>Technical Architecture</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Technical Stack Divided by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Core Capabilities
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto"
          >
            A structured breakdown of my full-stack engineering toolkit, categorized into distinct, production-tested features.
          </motion.p>
        </div>

        {/* 4 Feature Modules (2x2 Grid with Generous Width & Spacing) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`rounded-2xl bg-[#0a0e17] border border-white/10 ${feature.borderHover} p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] group`}
            >
              <div>
                {/* Header: Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#06080e] border border-white/10 flex items-center justify-center p-2.5 shadow-inner group-hover:border-[#00f0ff]/40 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">
                        Feature // 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors">
                        {feature.category}
                      </h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#06080e] border border-white/10 text-zinc-300">
                    {feature.badge}
                  </span>
                </div>

                {/* Feature Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>

                {/* Tech Badges with Real SVG Vector Logos */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>Key Technologies &amp; Frameworks:</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {feature.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-3 rounded-xl bg-[#06080e] border border-white/10 hover:border-[#00f0ff]/40 flex items-center gap-3 transition-colors shadow-sm"
                      >
                        <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-white block truncate">
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 block truncate">
                            {tech.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Capabilities Checklist */}
                <div className="pt-5 border-t border-white/10 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Delivered Capabilities:
                  </h4>
                  {feature.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

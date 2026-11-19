"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import GlassCard from "./GlassCard";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  ArrowUpRight,
  FolderGit2,
  CheckCircle,
  X,
  Layers,
  Sparkles,
  Terminal,
  ShieldCheck,
  Code2
} from "lucide-react";

type ProjectCategory = "All" | "Full-Stack" | "Web Application" | "Frontend";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = ["All", "Full-Stack", "Web Application", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 sm:py-28 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-10 w-[700px] h-[700px] bg-[#00f0ff]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Expanded Container Width to Remove Side Gaps */}
      <div className="w-full max-w-7xl mx-auto my-auto">
        
        {/* Section Header with Bold Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0e17] border border-[#00f0ff]/30 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#00f0ff] mb-4 shadow-[0_0_15px_rgba(0,240,255,0.12)]"
          >
            <FolderGit2 className="w-4 h-4 text-[#00f0ff]" />
            <span>Curated Works</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Featured Projects &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Live Architectures
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto"
          >
            Engineered systems uniting full-stack performance, database modeling, and polished user experiences.
          </motion.p>
        </div>

        {/* Filter Tabs with Framer Motion layoutId Fluid Slider */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#0a0e17] p-2 rounded-2xl border border-white/10 shadow-inner">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-colors duration-200 z-10 ${
                    isSelected
                      ? "text-black font-bold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectTabIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] rounded-xl -z-10 shadow-[0_0_20px_rgba(0,240,255,0.45)]"
                    />
                  )}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with Framer Motion Staggered Lift */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full"
              >
                <GlassCard
                  hoverTilt={true}
                  glowColor="#00f0ff"
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Preview Header */}
                    <div className="relative h-52 w-full bg-[#06080e]/90 border-b border-white/[0.08] overflow-hidden flex items-center justify-center p-6">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Category Pill */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#06080e]/90 backdrop-blur-md border border-white/10 text-xs font-mono text-[#38bdf8] flex items-center gap-1.5 shadow-md">
                        <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>{project.category}</span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#00f0ff]/10 backdrop-blur-md border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7 flex flex-col space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-[#38bdf8] mt-1">
                          {project.tagline}
                        </p>
                        <p className="text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#06080e]/80 border border-white/[0.08] text-xs font-mono text-slate-300 group-hover:border-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-[#00f0ff] hover:underline cursor-pointer"
                      >
                        <span>Specifications</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#06080e]/90 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                          aria-label={`GitHub repo for ${project.name}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Specification View with Framer Motion Spring */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl bg-[#0a0e17] border border-[#00f0ff]/30 rounded-3xl p-7 sm:p-9 shadow-[0_0_60px_rgba(0,240,255,0.2)] max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#38bdf8]/10 text-xs font-mono text-[#38bdf8] mb-3 border border-[#38bdf8]/20">
                <Code2 className="w-4 h-4 text-[#38bdf8]" />
                <span>{selectedProject.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.name}</h3>
              <p className="text-sm font-mono text-[#00f0ff] mt-1">{selectedProject.tagline}</p>

              <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Technologies in Modal */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">Technical Architecture:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-[#06080e] border border-white/10 text-xs sm:text-sm font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Key Engineering Features:</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] text-black font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-colors"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                  <span>Inspect Source Code</span>
                </motion.a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-sm font-mono text-zinc-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

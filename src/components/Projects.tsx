"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
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
      className="relative min-h-screen flex flex-col justify-center items-center py-20 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/[0.025] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#00f0ff]/25 text-xs font-mono uppercase tracking-wider text-[#00f0ff] mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Curated Works</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Featured Projects &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Deployments
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xs sm:text-sm text-zinc-400"
          >
            Engineered systems uniting full-stack performance, database modeling, and polished user experiences.
          </motion.p>
        </div>

        {/* Filter Tabs with Framer Motion layoutId Fluid Slider */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#0a0e17] p-1.5 rounded-xl border border-white/10 shadow-inner">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors duration-200 z-10 ${
                    isSelected
                      ? "text-black font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectTabIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-[#00f0ff] rounded-lg -z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    />
                  )}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with Framer Motion Staggered Lift */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative rounded-xl bg-[#0a0e17] hover:bg-[#101726] border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Visual Preview Header */}
                <div className="relative h-44 w-full bg-[#06080e] border-b border-white/10 overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#06080e]/90 border border-white/10 text-[10px] font-mono text-[#38bdf8] flex items-center gap-1.5">
                    <Code2 className="w-3 h-3 text-[#38bdf8]" />
                    <span>{project.category}</span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[10px] font-mono text-[#00f0ff] flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#00f0ff]" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-zinc-400 mt-2.5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#06080e] border border-white/10 text-[10px] font-mono text-zinc-300 group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#00f0ff] hover:underline"
                      >
                        <span>Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#06080e] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                          aria-label={`GitHub repo for ${project.name}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Crosshairs */}
                <span className="absolute bottom-1 right-1 text-[8px] font-mono text-zinc-700 pointer-events-none">+</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Specification View with Framer Motion Spring */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-xl bg-[#0a0e17] border border-[#00f0ff]/30 rounded-2xl p-6 sm:p-7 shadow-[0_0_50px_rgba(0,240,255,0.15)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#38bdf8]/10 text-[10px] font-mono text-[#38bdf8] mb-2 border border-[#38bdf8]/20">
                <Code2 className="w-3 h-3 text-[#38bdf8]" />
                <span>{selectedProject.category}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedProject.name}</h3>
              <p className="text-xs font-mono text-[#00f0ff] mt-0.5">{selectedProject.tagline}</p>

              <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Technologies in Modal */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">Technical Architecture:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded bg-[#06080e] border border-white/10 text-xs font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mt-4 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Key Engineering Features:</h4>
                <ul className="space-y-1.5">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] text-black font-semibold text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                </motion.a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-zinc-400 hover:text-white"
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

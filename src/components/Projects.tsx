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
  Layers
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
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#c8f31d]/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#c8f31d] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#c8f31d]" />
            <span>Curated Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Featured Projects &amp;{" "}
            <span className="text-[#c8f31d]">
              Deployments
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Engineered systems uniting full-stack performance, database modeling, and polished user experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-[#c8f31d] text-black font-semibold shadow-[0_0_20px_rgba(200,243,29,0.3)] scale-[1.02]"
                    : "bg-[#0d0f14] text-zinc-400 hover:text-white hover:bg-[#14171f] border border-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="group relative rounded-xl bg-[#0d0f14] hover:bg-[#12151d] border border-white/10 hover:border-[#c8f31d]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Visual Preview Header */}
                <div className="relative h-44 w-full bg-[#08090a] border-b border-white/10 overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#08090a]/90 border border-white/10 text-[10px] font-mono text-[#38bdf8]">
                    {project.category}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#c8f31d] transition-colors">
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
                          className="px-2 py-0.5 rounded bg-[#08090a] border border-white/10 text-[10px] font-mono text-zinc-300"
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
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#c8f31d] hover:underline"
                      >
                        <span>Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#08090a] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                          aria-label={`GitHub repo for ${project.name}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Crosshair */}
                <span className="absolute bottom-1 right-1 text-[8px] font-mono text-zinc-700 pointer-events-none">+</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Specification View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#0d0f14] border border-white/15 rounded-2xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#38bdf8]/10 text-[10px] font-mono text-[#38bdf8] mb-2 border border-[#38bdf8]/20">
              {selectedProject.category}
            </div>

            <h3 className="text-xl font-bold text-white">{selectedProject.name}</h3>
            <p className="text-xs font-mono text-[#c8f31d] mt-0.5">{selectedProject.tagline}</p>

            <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Features:</h4>
              <ul className="space-y-1.5">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c8f31d] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c8f31d] text-black font-semibold text-xs hover:bg-[#d8ff38] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

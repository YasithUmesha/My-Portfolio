"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle,
  X
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
      className="relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300/80">
            A curated collection of web platforms, full-stack applications, and software engineering projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6">
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)] scale-105"
                    : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#09061c]/85 hover:bg-[#0e092b] border border-white/10 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(99,102,241,0.25)] flex flex-col justify-between"
            >
              {/* Top Image Banner */}
              <div className="relative w-full h-36 sm:h-40 bg-[#060414] overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#09061c] via-transparent to-transparent opacity-80" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#030014]/85 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-indigo-400 hover:text-purple-300 font-mono underline"
                    >
                      Details
                    </button>
                  </div>
                  
                  <p className="text-[11px] font-medium text-purple-400/90 mt-0.5">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-300/80 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 transition-all duration-300"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md shadow-indigo-600/20"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Projects on GitHub CTA */}
        <div className="mt-6 text-center">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#0a0720] border border-purple-500/30 rounded-2xl shadow-2xl p-5 sm:p-6 overflow-y-auto max-h-[90vh]">
            
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-white/10">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-[11px] text-slate-400 font-mono truncate">
                  {selectedProject.tagline}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {selectedProject.name}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Key Features &amp; Architecture:
                </h4>
                <ul className="space-y-1">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Technologies Leveraged:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-purple-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors shadow-md shadow-indigo-600/30"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

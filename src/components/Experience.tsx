"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Briefcase,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  Edit3,
  Building,
  GraduationCap
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Work &amp; Project{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300/80">
            Professional trajectory including practical software development, agile workflows, and academic engineering.
          </p>
        </div>

        {/* 2-Column Experience Grid for Balanced Viewport Fit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.experience.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#09061c]/85 hover:bg-[#0e092b] border border-white/10 hover:border-purple-500/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Placeholder Tag / Notice */}
                {item.isPlaceholder ? (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono mb-2.5">
                    <Edit3 className="w-3 h-3 text-amber-400" />
                    <span>Editable Internship Placeholder</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-mono mb-2.5">
                    <GraduationCap className="w-3 h-3 text-indigo-400" />
                    <span>Academic &amp; Systems Engineering</span>
                  </div>
                )}

                {/* Header details */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                  <span className="text-xs font-mono font-medium text-purple-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/10">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 mt-1 mb-3">
                  <span className="flex items-center gap-1 text-slate-300 font-medium">
                    <Building className="w-3 h-3 text-indigo-400" />
                    {item.company}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {item.location}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-1.5 mb-4">
                  {item.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1.5 text-xs text-slate-300/85 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 pt-3 border-t border-white/10">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-indigo-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Customization reminder banner */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-slate-400 font-mono">
            ℹ️ Update internship details in <code className="text-purple-300 bg-white/[0.05] px-1 py-0.5 rounded">src/data/portfolioData.ts</code>
          </p>
        </div>

      </div>
    </section>
  );
}

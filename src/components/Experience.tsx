"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
  GraduationCap,
  Sparkles,
  GitBranch
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3">
            <GitBranch className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Work Experience &amp;{" "}
            <span className="text-[#c8f31d]">
              Milestones
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Professional roles, collaborative software development, and undergraduate engineering initiatives.
          </p>
        </div>

        {/* 2-Column Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.experience.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl bg-[#0d0f14] hover:bg-[#12151d] border border-white/10 hover:border-[#c8f31d]/35 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Meta Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#08090a] border border-white/10 text-[10px] font-mono text-zinc-300">
                    <Calendar className="w-3 h-3 text-[#c8f31d]" />
                    <span>{item.period}</span>
                  </span>

                  <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#c8f31d] transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-[#38bdf8] mt-0.5">
                  {item.company}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                      <span className="text-[#c8f31d] mt-0.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[#08090a] border border-white/10 text-[10px] font-mono text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="absolute bottom-1 right-1 text-[8px] font-mono text-zinc-700 pointer-events-none">+</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

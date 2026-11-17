"use client";

import React, { useState } from "react";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import {
  Server,
  Database,
  Wrench,
  Cpu,
  Sparkles,
  FileCode2
} from "lucide-react";

type CategoryFilter = "All" | "Frontend" | "Backend" | "Databases" | "Tools" | "Other";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Frontend",
    "Backend",
    "Databases",
    "Tools",
    "Other"
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((skill) => skill.category === selectedCategory);

  const getSkillIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <FileCode2 className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />;
      case "Backend":
        return <Server className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />;
      case "Databases":
        return <Database className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />;
      case "Tools":
        return <Wrench className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      default:
        return <Cpu className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
      case "Backend":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "Databases":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
      case "Tools":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      default:
        return "text-pink-400 bg-pink-500/10 border-pink-500/20";
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Technical Skills &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tooling
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300/80">
            A comprehensive, editable overview of modern technologies I leverage to build performant web platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-xl bg-[#09061c]/80 hover:bg-[#120b33] border border-white/10 hover:border-purple-500/40 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(99,102,241,0.2)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getSkillIcon(skill.category)}
                </div>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getCategoryColor(
                    skill.category
                  )}`}
                >
                  {skill.category}
                </span>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                  {skill.name}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Active Stack
                </p>
              </div>

              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Informative Note for Customization */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-slate-400 font-mono">
            💡 Update technical stack entries anytime in <code className="text-purple-300 bg-white/[0.05] px-1 py-0.5 rounded">src/data/portfolioData.ts</code>
          </p>
        </div>

      </div>
    </section>
  );
}

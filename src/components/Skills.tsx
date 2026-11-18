"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { TechLogo } from "./Icons";
import {
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu
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

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Frontend":
        return "text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/20";
      case "Backend":
        return "text-[#c8f31d] bg-[#c8f31d]/10 border-[#c8f31d]/20";
      case "Databases":
        return "text-[#10b981] bg-[#10b981]/10 border-[#10b981]/20";
      case "Tools":
        return "text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/20";
      default:
        return "text-zinc-300 bg-white/5 border-white/10";
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c8f31d]/[0.025] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#c8f31d] mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#c8f31d]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Tools &amp; Technologies{" "}
            <span className="text-[#c8f31d]">
              I Work With
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Authentic software tooling, production frameworks, and modern databases powering scalable web architectures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
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

        {/* Skills Grid with Real Brand Logos */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative rounded-xl bg-[#0d0f14] hover:bg-[#13161f] border border-white/10 hover:border-[#c8f31d]/40 p-4 transition-all duration-200 shadow-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Real Tech Brand Logo & Category Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#08090a] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#c8f31d]/30 transition-all p-2">
                    <TechLogo name={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded border ${getCategoryBadgeClass(
                      skill.category
                    )}`}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name & Status */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#c8f31d] transition-colors truncate">
                    {skill.name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 mt-1 flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8f31d] inline-block" />
                    <span>Production</span>
                  </p>
                </div>

                {/* Subtle corner marker */}
                <div className="absolute top-1 right-1 text-[8px] font-mono text-zinc-700 group-hover:text-[#c8f31d] transition-colors">
                  +
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-zinc-500 font-mono">
            Configurable stack items mapped in <code className="text-[#c8f31d] bg-[#0d0f14] px-1.5 py-0.5 rounded border border-white/10">src/data/portfolioData.ts</code>
          </p>
        </div>

      </div>
    </section>
  );
}

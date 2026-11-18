"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { TechLogo } from "./Icons";
import {
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  Search,
  SlidersHorizontal,
  Code2
} from "lucide-react";

type CategoryFilter = "All" | "Frontend" | "Backend" | "Databases" | "Tools" | "Other";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: CategoryFilter[] = [
    "All",
    "Frontend",
    "Backend",
    "Databases",
    "Tools",
    "Other"
  ];

  const filteredSkills = useMemo(() => {
    return portfolioData.skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Frontend":
        return "text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/20";
      case "Backend":
        return "text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/20";
      case "Databases":
        return "text-[#60a5fa] bg-[#60a5fa]/10 border-[#60a5fa]/20";
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
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00f0ff]/[0.025] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#00f0ff]/25 text-xs font-mono uppercase tracking-wider text-[#00f0ff] mb-3"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Technical Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Tools &amp; Technologies{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              I Work With
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xs sm:text-sm text-zinc-400"
          >
            Authentic software tooling, production frameworks, and modern databases powering scalable web architectures.
          </motion.p>
        </div>

        {/* Filter Controls: Framer Motion Sliding Pill Tabs & Interactive Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs with Framer Motion layoutId */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#0a0e17] p-1.5 rounded-xl border border-white/10 shadow-inner">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors duration-200 z-10 ${
                    isSelected
                      ? "text-black font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillTabIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-[#00f0ff] rounded-lg -z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    />
                  )}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Realtime Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by technology..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0a0e17] border border-white/10 focus:border-[#00f0ff] text-xs font-mono text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skills Grid with Real Brand Logos & Spring Physics */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 350, damping: 25 } }}
                className="group relative rounded-xl bg-[#0a0e17] hover:bg-[#101726] border border-white/10 hover:border-[#00f0ff]/50 p-4 transition-all duration-200 shadow-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Real Tech Brand Logo & Category Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#06080e] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00f0ff]/40 transition-all p-2 shadow-inner">
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
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00f0ff] transition-colors truncate">
                    {skill.name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 mt-1 flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] inline-block animate-pulse" />
                    <span>Production</span>
                  </p>
                </div>

                {/* Corner Crosshair */}
                <div className="absolute top-1.5 right-1.5 text-[8px] font-mono text-zinc-700 group-hover:text-[#00f0ff] transition-colors">
                  +
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 rounded-xl bg-[#0a0e17] border border-white/10 p-6">
            <Cpu className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <p className="text-xs font-mono text-zinc-400">
              No matching technologies found for &quot;{searchQuery}&quot;
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-zinc-500 font-mono">
            Configurable stack items mapped in <code className="text-[#00f0ff] bg-[#0a0e17] px-1.5 py-0.5 rounded border border-white/10">src/data/portfolioData.ts</code>
          </p>
        </div>

      </div>
    </section>
  );
}

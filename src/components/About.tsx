"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  Layers,
  Sparkles,
  FileDown,
  CheckCircle2,
  Code2,
  Rocket,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  Cpu,
  Database,
  Building
} from "lucide-react";

export default function About({ onOpenCVNotice }: { onOpenCVNotice?: () => void }) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 sm:py-28 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Subtle sapphire ambient lighting */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/[0.035] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-[#2563eb]/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

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
            <Compass className="w-4 h-4 text-[#00f0ff]" />
            <span>Profile &amp; Engineering Philosophy</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Bridging Analytical Systems with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Modern Full-Stack Craft
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto"
          >
            Undergraduate in Information Systems at Sabaragamuwa University of Sri Lanka, building production-grade web applications.
          </motion.p>
        </div>

        {/* Expansive Editorial Grid (No Duplicate Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Comprehensive Bio Narrative & Focus Areas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio Narrative Cards */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0e17] border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-300 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Background &amp; Ambition</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                {portfolioData.personal.aboutText.map((paragraph, index) => (
                  <p key={index} className="text-zinc-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Download CV CTA inside Bio Card */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={onOpenCVNotice}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#00f0ff] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV / Resume</span>
                </motion.button>
                <span className="text-xs font-mono text-zinc-400">
                  Verified PDF • Editable template
                </span>
              </div>
            </div>

            {/* Core Domains of Expertise Chips */}
            <div className="p-6 rounded-2xl bg-[#0a0e17] border border-white/10 space-y-3">
              <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00f0ff]" />
                <span>Core Engineering Domains:</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {portfolioData.personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono bg-[#06080e] text-zinc-200 border border-white/10 hover:border-[#00f0ff]/50 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Academic Credentials & Metric Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* University Higher Education Spotlight Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e17] border border-[#00f0ff]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-xs font-mono text-[#38bdf8]">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {portfolioData.education.degree}
              </h3>
              
              <p className="text-sm font-mono text-[#00f0ff] flex items-center gap-1.5">
                <Building className="w-4 h-4 text-zinc-400" />
                <span>{portfolioData.education.university}</span>
              </p>

              <p className="text-xs font-mono text-zinc-400">
                {portfolioData.education.faculty} • {portfolioData.education.period}
              </p>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2 border-t border-white/10">
                Coursework emphasizes software engineering principles, distributed systems, relational &amp; NoSQL database architecture, and human-computer interaction.
              </p>
            </div>

            {/* 4 Metric / Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.personal.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-[#0a0e17] hover:bg-[#101726] border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-200 group shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#06080e] border border-white/10 text-[#00f0ff] group-hover:border-[#00f0ff]/50 transition-all">
                      {index === 0 && <GraduationCap className="w-5 h-5 text-[#38bdf8]" />}
                      {index === 1 && <Layers className="w-5 h-5 text-[#00f0ff]" />}
                      {index === 2 && <Code2 className="w-5 h-5 text-[#fb923c]" />}
                      {index === 3 && <Rocket className="w-5 h-5 text-[#10b981]" />}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-[#00f0ff]">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-400 block truncate">
                      {item.title}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-1 truncate">
                      {item.value}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Engineering Mindset Card */}
            <div className="p-5 rounded-2xl bg-[#06080e] border border-white/10 flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 text-[#10b981] flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Production Standards</span>
                <span className="text-xs text-zinc-400 block font-mono mt-0.5">
                  Semantic versioning, typed APIs, clean commit hygiene.
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

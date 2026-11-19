"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import GlassCard from "./GlassCard";
import AnimatedCounter from "./AnimatedCounter";
import {
  GraduationCap,
  Layers,
  FileDown,
  CheckCircle2,
  Code2,
  Rocket,
  Compass,
  ShieldCheck,
  Terminal,
  Cpu,
  Building,
  Sparkles
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#090d18]/80 backdrop-blur-md border border-[#00f0ff]/30 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#00f0ff] mb-4 shadow-[0_0_15px_rgba(0,240,255,0.12)]"
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
            className="mt-3 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Undergraduate in Information Systems at Sabaragamuwa University of Sri Lanka, building production-grade web applications.
          </motion.p>
        </div>

        {/* Expansive Glass Editorial Grid (No Duplicate Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Comprehensive Bio Narrative & Focus Areas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio Narrative GlassCard with Refraction Highlight */}
            <GlassCard className="p-8 sm:p-10 space-y-5" glowColor="#00f0ff">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Background &amp; Ambition</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {portfolioData.personal.aboutText.map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Download CV CTA inside Bio Card */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={onOpenCVNotice}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#00f0ff] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV / Resume</span>
                </motion.button>
                <span className="text-xs font-mono text-slate-400">
                  Verified PDF • Editable template
                </span>
              </div>
            </GlassCard>

            {/* Core Domains of Expertise Chips */}
            <GlassCard className="p-6 space-y-3" intensity="subtle">
              <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00f0ff]" />
                <span>Core Engineering Domains:</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {portfolioData.personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono bg-[#06080e]/80 text-slate-200 border border-white/[0.08] hover:border-[#00f0ff]/50 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </GlassCard>

          </motion.div>

          {/* Right Column: Academic Credentials & Metric Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* University Higher Education Spotlight GlassCard */}
            <GlassCard className="p-6 sm:p-7 space-y-3" glowColor="#38bdf8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-xs font-mono text-[#38bdf8]">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {portfolioData.education.degree}
              </h3>
              
              <p className="text-sm font-mono text-[#00f0ff] flex items-center gap-1.5">
                <Building className="w-4 h-4 text-slate-400" />
                <span>{portfolioData.education.university}</span>
              </p>

              <p className="text-xs font-mono text-slate-400">
                {portfolioData.education.faculty} • {portfolioData.education.period}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/[0.08]">
                Coursework emphasizes software engineering principles, distributed systems, relational &amp; NoSQL database architecture, and human-computer interaction.
              </p>
            </GlassCard>

            {/* 4 Animated Metric Counters powered by anime.js */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-5" hoverTilt={true} glowColor="#00f0ff">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#06080e]/90 text-[#00f0ff] border border-white/10">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">01</span>
                </div>
                <AnimatedCounter
                  end={10}
                  suffix="+"
                  label="Projects Completed"
                />
              </GlassCard>

              <GlassCard className="p-5" hoverTilt={true} glowColor="#38bdf8">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#06080e]/90 text-[#38bdf8] border border-white/10">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">02</span>
                </div>
                <AnimatedCounter
                  end={16}
                  suffix="+"
                  label="Technologies Mastered"
                />
              </GlassCard>

              <GlassCard className="p-5" hoverTilt={true} glowColor="#fb923c">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#06080e]/90 text-[#fb923c] border border-white/10">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">03</span>
                </div>
                <AnimatedCounter
                  end={4}
                  suffix="+"
                  label="Certifications"
                />
              </GlassCard>

              <GlassCard className="p-5" hoverTilt={true} glowColor="#10b981">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-[#06080e]/90 text-[#10b981] border border-white/10">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">04</span>
                </div>
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  label="Commitment &amp; Agility"
                />
              </GlassCard>
            </div>

            {/* Production Standards Mindset Card */}
            <GlassCard className="p-4" intensity="subtle">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Production Standards</span>
                  <span className="text-xs text-slate-400 block font-mono mt-0.5">
                    Strict TypeScript, semantic commits, responsive UI, 0 build warnings.
                  </span>
                </div>
              </div>
            </GlassCard>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

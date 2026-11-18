"use client";

import React from "react";
import Image from "next/image";
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
  ArrowUpRight
} from "lucide-react";

export default function About({ onOpenCVNotice }: { onOpenCVNotice?: () => void }) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle sapphire ambient lighting */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#00f0ff]/25 text-xs font-mono uppercase tracking-wider text-[#00f0ff] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Profile &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Crafting Scalable Systems with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Analytical Precision
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Bridging Information Systems acumen with hands-on full-stack development craft.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Minimal Profile Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm flex flex-col items-center">

              {/* Minimal Animated Portrait Ring */}
              <div className="relative flex items-center justify-center w-52 h-52 sm:w-60 sm:h-60 mb-6">
                
                {/* Soft breathing backlight */}
                <motion.div
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-[#00f0ff]/20 blur-2xl pointer-events-none"
                />

                {/* Fine circular reticle ring */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 240 240"
                >
                  <circle
                    cx="120"
                    cy="120"
                    r="116"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.15)"
                    strokeWidth="1"
                    strokeDasharray="6 12"
                  />
                  <circle cx="120" cy="4" r="3" fill="#00f0ff" />
                </motion.svg>

                {/* Minimal Framed Portrait */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl p-[1px] bg-gradient-to-b from-[#00f0ff]/40 to-white/5 shadow-2xl">
                  <div className="w-full h-full rounded-[15px] overflow-hidden bg-[#0a0e17] p-1">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#06080e]">
                      <Image
                        src={portfolioData.personal.avatar}
                        alt={portfolioData.personal.name}
                        fill
                        className="object-cover object-top filter brightness-[1.02] contrast-[1.03]"
                      />
                    </div>
                  </div>
                </div>

                {/* Corner crosshairs */}
                <span className="absolute top-2 left-2 text-[8px] font-mono text-[#00f0ff]">+</span>
                <span className="absolute top-2 right-2 text-[8px] font-mono text-[#00f0ff]">+</span>
              </div>

              {/* Card Meta Container */}
              <div className="w-full rounded-xl bg-[#0a0e17] border border-white/10 p-5 flex flex-col items-center text-center shadow-lg">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs font-mono text-[#00f0ff] mt-1">
                  {portfolioData.personal.role}
                </p>

                {/* Academic Tag */}
                <div className="mt-3 px-3 py-1 rounded-md bg-[#06080e] border border-white/10 text-xs text-zinc-300 font-mono">
                  🏛️ {portfolioData.personal.university}
                </div>
                <div className="mt-1 text-[11px] text-[#38bdf8] font-mono">
                  {portfolioData.personal.degree}
                </div>

                {/* Action button */}
                <div className="mt-4 w-full pt-4 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={onOpenCVNotice}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#00f0ff] transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download CV / Resume</span>
                  </motion.button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Metric Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-3 text-zinc-300 leading-relaxed text-xs sm:text-sm">
              {portfolioData.personal.aboutText.map((paragraph, index) => (
                <p key={index} className="text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Focus Areas */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Core Domains of Expertise:
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#0a0e17] text-zinc-300 border border-white/10 hover:border-[#00f0ff]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Metric / Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {portfolioData.personal.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-xl bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#06080e] border border-white/10 text-[#00f0ff] group-hover:border-[#00f0ff]/50 transition-all flex-shrink-0">
                      {index === 0 && <GraduationCap className="w-4 h-4 text-[#38bdf8]" />}
                      {index === 1 && <Layers className="w-4 h-4 text-[#00f0ff]" />}
                      {index === 2 && <Code2 className="w-4 h-4 text-[#fb923c]" />}
                      {index === 3 && <Rocket className="w-4 h-4 text-[#10b981]" />}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block truncate">
                        {item.title}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                        {item.value}
                      </h4>
                      <p className="text-[10px] text-zinc-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

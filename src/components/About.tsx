
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
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 bg-[#38bdf8]/[0.025] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Profile &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Crafting Purposeful Software with{" "}
            <span className="text-[#c8f31d]">
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
                  animate={{ opacity: [0.2, 0.45, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-[#c8f31d]/20 blur-2xl pointer-events-none"
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
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                    strokeDasharray="6 12"
                  />
                  <circle cx="120" cy="4" r="2.5" fill="#c8f31d" />
                </motion.svg>

                {/* Minimal Framed Portrait */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 shadow-2xl">
                  <div className="w-full h-full rounded-[15px] overflow-hidden bg-[#0d0f14] p-1">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#08090a]">
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
                <span className="absolute top-2 left-2 text-[8px] font-mono text-zinc-600">+</span>
                <span className="absolute top-2 right-2 text-[8px] font-mono text-zinc-600">+</span>
              </div>

              {/* Card Meta Container */}
              <div className="w-full rounded-xl bg-[#0d0f14] border border-white/10 p-5 flex flex-col items-center text-center shadow-lg">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs font-mono text-[#c8f31d] mt-1">
                  {portfolioData.personal.role}
                </p>

                {/* Academic Tag */}
                <div className="mt-3 px-3 py-1 rounded-md bg-[#08090a] border border-white/10 text-xs text-zinc-300 font-mono">
                  🏛️ {portfolioData.personal.university}
                </div>
                <div className="mt-1 text-[11px] text-[#38bdf8] font-mono">
                  {portfolioData.personal.degree}
                </div>

                {/* Action button */}
                <div className="mt-4 w-full pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={onOpenCVNotice}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-black bg-[#c8f31d] hover:bg-[#d8ff38] transition-all duration-200"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download CV / Resume</span>
                  </button>
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
                <p key={index} className="text-zinc-400">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#0d0f14] text-zinc-300 border border-white/10 hover:border-[#c8f31d]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8f31d]" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Metric / Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {portfolioData.personal.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl bg-[#0d0f14] hover:bg-[#13161f] border border-white/10 hover:border-[#c8f31d]/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#08090a] border border-white/10 text-[#c8f31d] group-hover:border-[#c8f31d]/40 transition-all flex-shrink-0">
                      {index === 0 && <GraduationCap className="w-4 h-4 text-[#38bdf8]" />}
                      {index === 1 && <Layers className="w-4 h-4 text-[#c8f31d]" />}
                      {index === 2 && <Code2 className="w-4 h-4 text-[#fb923c]" />}
                      {index === 3 && <Rocket className="w-4 h-4 text-[#10b981]" />}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block truncate">
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
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

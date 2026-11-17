"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  GraduationCap,
  Layers,
  Sparkles,
  FileDown,
  CheckCircle2,
  Code2,
  Rocket
} from "lucide-react";

export default function About({ onOpenCVNotice }: { onOpenCVNotice?: () => void }) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Transforming Concepts into{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Scalable Web Solutions
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300/80">
            Passionate full-stack developer blending analytical thinking with modern software engineering craft.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative rounded-3xl bg-[#0a0720]/90 backdrop-blur-xl border border-white/10 p-5 sm:p-6 flex flex-col items-center text-center shadow-xl">
                
                {/* Profile Image with Ring */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg mb-4">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#030014] relative">
                    <Image
                      src={portfolioData.personal.avatar}
                      alt={portfolioData.personal.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Name & Academic Title */}
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs font-semibold text-purple-400 mt-0.5">
                  {portfolioData.personal.role}
                </p>

                {/* University Tag */}
                <div className="mt-3 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-medium">
                  🏛️ {portfolioData.personal.university}
                </div>

                <div className="mt-1 text-[11px] text-indigo-300/90 font-mono">
                  {portfolioData.personal.degree}
                </div>

                {/* Action: Download CV / Resume Button */}
                <div className="mt-4 w-full pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={onOpenCVNotice}
                    className="group flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md shadow-indigo-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5"
                  >
                    <FileDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span>Download CV / Resume</span>
                  </button>
                  <p className="mt-1.5 text-[10px] text-slate-400">
                    PDF format • Editable placeholder
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Metric Cards */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Bio Paragraphs */}
            <div className="space-y-2.5 text-slate-300/90 leading-relaxed text-xs sm:text-sm">
              {portfolioData.personal.aboutText.slice(0, 2).map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Main Interests Chips */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Core Focus Areas:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Metric / Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {portfolioData.personal.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 group-hover:bg-purple-500/20 transition-all duration-300 flex-shrink-0">
                      {index === 0 && <GraduationCap className="w-4 h-4 text-indigo-400" />}
                      {index === 1 && <Layers className="w-4 h-4 text-purple-400" />}
                      {index === 2 && <Code2 className="w-4 h-4 text-pink-400" />}
                      {index === 3 && <Rocket className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block truncate">
                        {item.title}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                        {item.value}
                      </h4>
                      <p className="text-[10px] text-slate-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

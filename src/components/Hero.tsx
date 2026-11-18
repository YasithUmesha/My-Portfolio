"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  Mail,
  ArrowRight,
  Send,
  FileDown,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Hero({ onOpenCVNotice }: { onOpenCVNotice?: () => void }) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.typedTitles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center pt-20 sm:pt-24 lg:pt-16 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-slate-300 tracking-wide">
                {portfolioData.personal.statusBadge}
              </span>
              <Sparkles className="w-3 h-3 text-amber-400 ml-0.5" />
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-sm sm:text-base font-medium text-indigo-400 tracking-wide flex items-center justify-center lg:justify-start gap-1.5">
                <span>{portfolioData.personal.greeting}</span>
                <span className="inline-block animate-bounce text-lg">👋</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span>I build with code as a</span>
                <span className="block mt-1 min-h-[1.2em] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {typedText}
                  <span className="inline-block w-[3px] h-[0.85em] bg-purple-400 ml-1 translate-y-[2px] animate-pulse" />
                </span>
              </h1>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-slate-300/90 max-w-xl leading-relaxed font-normal">
              {portfolioData.personal.shortBio}
            </p>

            {/* University & Degree Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-400">
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 font-mono">
                🎓 {portfolioData.personal.degree}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 font-mono">
                🏛️ {portfolioData.personal.university}
              </span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <Send className="w-3.5 h-3.5 text-indigo-400 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={onOpenCVNotice}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all"
                title="View Resume / CV status"
              >
                <FileDown className="w-3.5 h-3.5 text-purple-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
                  aria-label="Yasith Umesha GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
                  aria-label="Yasith Umesha LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                </a>

                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(236,72,153,0.3)] hover:-translate-y-0.5"
                  aria-label="Email Yasith Umesha"
                >
                  <Mail className="w-3.5 h-3.5 text-pink-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Profile Photo */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="avatar-float relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80">

              {/* Outer ambient glow blob */}
              <div className="glow-pulse-avatar absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/25 to-pink-500/20 blur-3xl" />

              {/* Outermost slow-spinning conic ring */}
              <div
                className="ring-spin-slow absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 55%, rgba(99,102,241,0.7) 72%, rgba(168,85,247,0.9) 84%, rgba(236,72,153,0.7) 94%, transparent 100%)",
                }}
              />

              {/* Middle counter-spinning ring */}
              <div
                className="ring-spin-reverse absolute rounded-full"
                style={{
                  inset: "10px",
                  background:
                    "conic-gradient(from 180deg, transparent 55%, rgba(236,72,153,0.6) 70%, rgba(99,102,241,0.8) 85%, transparent 100%)",
                }}
              />

              {/* Fast inner accent ring */}
              <div
                className="ring-spin absolute rounded-full"
                style={{
                  inset: "20px",
                  background:
                    "conic-gradient(from 90deg, transparent 65%, rgba(168,85,247,1) 80%, rgba(99,102,241,0.6) 92%, transparent 100%)",
                }}
              />

              {/* White gap ring */}
              <div
                className="absolute rounded-full bg-[#030014]"
                style={{ inset: "28px" }}
              />

              {/* Gradient border frame */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "30px",
                  padding: "3px",
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #a855f7 40%, #ec4899 70%, #6366f1 100%)",
                  borderRadius: "9999px",
                }}
              >
                {/* Inner dark gap */}
                <div
                  className="w-full h-full rounded-full bg-[#030014]"
                  style={{ padding: "3px" }}
                >
                  {/* Photo with shimmer */}
                  <div className="photo-shimmer relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src={portfolioData.personal.avatar}
                      alt={portfolioData.personal.name}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge — Open to Work (top-right) */}
              <div className="absolute top-4 -right-6 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a0620]/95 border border-emerald-500/50 text-[10px] font-semibold text-emerald-300 shadow-xl backdrop-blur-md whitespace-nowrap z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block flex-shrink-0" />
                Open to Work
              </div>

              {/* Floating badge — Full Stack (bottom-left) */}
              <div className="absolute bottom-6 -left-8 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a0620]/95 border border-purple-500/50 text-[10px] font-semibold text-purple-300 shadow-xl backdrop-blur-md whitespace-nowrap z-10">
                ⚡ Full-Stack Dev
              </div>

              {/* Floating badge — University (bottom-right) */}
              <div className="absolute bottom-2 -right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0a0620]/95 border border-indigo-500/50 text-[10px] font-semibold text-indigo-300 shadow-xl backdrop-blur-md whitespace-nowrap z-10">
                🎓 SUSL
              </div>

              {/* Decorative floating dots */}
              <div className="absolute top-8 -left-4 w-3 h-3 rounded-full bg-indigo-500/70 blur-[2px] animate-pulse" />
              <div className="absolute bottom-14 -right-3 w-2 h-2 rounded-full bg-pink-500/70 blur-[2px] animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-purple-400/60 blur-[2px] animate-pulse" style={{ animationDelay: "2s" }} />
              <div className="absolute top-1/3 -left-5 w-2 h-2 rounded-full bg-cyan-400/50 blur-[2px] animate-pulse" style={{ animationDelay: "0.5s" }} />

            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-1 text-[10px] text-slate-400 hover:text-purple-400 transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="tracking-widest uppercase font-mono text-[9px]">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-purple-400/60 flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

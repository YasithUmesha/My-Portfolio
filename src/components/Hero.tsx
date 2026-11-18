"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  Mail,
  ArrowUpRight,
  Send,
  FileDown,
  Sparkles,
  Terminal,
  Code2,
  ChevronDown,
  Compass,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export default function Hero({ onOpenCVNotice }: { onOpenCVNotice?: () => void }) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse tilt values for interactive profile portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [10, -10]);
  const rotateY = useTransform(x, [-80, 80], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const roles = portfolioData.personal.typedTitles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
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
      className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Geometric Background Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#c8f31d]/[0.035] via-[#38bdf8]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5"
          >
            
            {/* Status Pill — Minimalist Terminal Style */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0f14] border border-white/10 hover:border-[#c8f31d]/40 transition-colors duration-300 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f31d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f31d]" />
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">
                {portfolioData.personal.statusBadge}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[11px] font-mono text-[#c8f31d]">2026.dev</span>
            </motion.div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono tracking-wider text-[#38bdf8] uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-[#c8f31d]" />
                <span>{portfolioData.personal.greeting}</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                <span>Engineering modern web systems as a</span>
                <span className="block mt-1.5 min-h-[1.25em] text-[#c8f31d]">
                  {typedText}
                  <span className="inline-block w-[3px] h-[0.8em] bg-[#c8f31d] ml-1.5 translate-y-[2px] animate-pulse" />
                </span>
              </h1>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-normal">
              {portfolioData.personal.shortBio}
            </p>

            {/* University & Degree — Clean Architectural Badges with Lucide Icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-zinc-300">
              <motion.span 
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 font-mono text-[11px] text-zinc-300 hover:border-[#38bdf8]/40 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{portfolioData.personal.university}</span>
              </motion.span>
              <motion.span 
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 font-mono text-[11px] text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              >
                <Cpu className="w-3.5 h-3.5 text-[#c8f31d]" />
                <span>{portfolioData.personal.degree}</span>
              </motion.span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-black bg-[#c8f31d] hover:bg-[#d8ff38] shadow-[0_0_25px_rgba(200,243,29,0.25)] transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-black" />
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-[#0d0f14] hover:bg-[#14171f] border border-white/15 hover:border-[#c8f31d]/40 transition-all duration-200"
              >
                <Send className="w-3.5 h-3.5 text-[#c8f31d] transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>Initiate Contact</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenCVNotice}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-[#c8f31d] hover:bg-white/[0.03] transition-all"
                title="Curriculum Vitae"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-[11px] text-zinc-500 font-mono tracking-wider uppercase">
                Find Me:
              </span>
              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0d0f14] hover:bg-[#14171f] border border-white/10 hover:border-[#c8f31d]/50 text-zinc-300 hover:text-[#c8f31d] transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0d0f14] hover:bg-[#14171f] border border-white/10 hover:border-[#38bdf8]/50 text-zinc-300 hover:text-[#38bdf8] transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${portfolioData.contact.email}`}
                  className="p-2 rounded-lg bg-[#0d0f14] hover:bg-[#14171f] border border-white/10 hover:border-[#c8f31d]/50 text-zinc-300 hover:text-[#c8f31d] transition-all duration-200 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive 3D Tilt Profile Portrait with Rotating Compass Coordinates */}
          <div className="lg:col-span-5 flex justify-center relative perspective-[1000px]">
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80 cursor-pointer"
            >

              {/* Radiant Soft Breathing Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c8f31d]/20 via-[#38bdf8]/15 to-transparent blur-3xl pointer-events-none"
              />

              {/* Rotating Compass Outer Geometry */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 320 320"
              >
                <circle
                  cx="160"
                  cy="160"
                  r="156"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                <circle cx="160" cy="4" r="3.5" fill="#c8f31d" />
                <circle cx="316" cy="160" r="2" fill="#38bdf8" />
                <circle cx="160" cy="316" r="2" fill="#ffffff" opacity="0.4" />
                <circle cx="4" cy="160" r="2" fill="#38bdf8" />
              </motion.svg>

              {/* Counter-Rotating Accented Ring */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 sm:w-72 sm:h-72 pointer-events-none"
                viewBox="0 0 288 288"
              >
                <circle
                  cx="144"
                  cy="144"
                  r="140"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.25)"
                  strokeWidth="1.2"
                  strokeDasharray="30 150"
                />
                <circle cx="144" cy="4" r="3" fill="#38bdf8" />
              </motion.svg>

              {/* Architectural Frame with Double Edge & Corner Crosshairs */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl p-[2px] bg-gradient-to-b from-white/20 via-white/5 to-[#c8f31d]/40 shadow-2xl"
              >
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#0d0f14] p-1.5">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#08090a]">
                    <Image
                      src={portfolioData.personal.avatar}
                      alt={portfolioData.personal.name}
                      fill
                      className="object-cover object-top filter brightness-[1.03] contrast-[1.03] transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Corner Target Marks */}
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-[#c8f31d] pointer-events-none opacity-90">+</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-[#c8f31d] pointer-events-none opacity-90">+</div>
                  <div className="absolute bottom-2 left-2 text-[9px] font-mono text-zinc-500 pointer-events-none">+</div>
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-500 pointer-events-none">+</div>
                </div>
              </motion.div>

              {/* Floating Badge 1: Top Right — Live Open to Work */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.08 }}
                className="absolute -top-3 -right-4 sm:-right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d0f14]/95 border border-[#c8f31d]/35 text-[11px] font-mono text-white shadow-xl backdrop-blur-md z-10"
              >
                <span className="w-2 h-2 rounded-full bg-[#c8f31d] animate-ping" />
                <span className="text-[#c8f31d] font-semibold">Available</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">Roles</span>
              </motion.div>

              {/* Floating Badge 2: Bottom Left — Full-Stack Engineer */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0d0f14]/95 border border-white/10 text-[11px] font-mono text-zinc-300 shadow-xl backdrop-blur-md z-10"
              >
                <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Full-Stack Engineer</span>
              </motion.div>

              {/* Floating Badge 3: Bottom Right — Degree Info */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-5 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0d0f14]/95 border border-white/10 text-[10px] font-mono text-zinc-400 shadow-lg backdrop-blur-md z-10"
              >
                <CheckCircle2 className="w-3 h-3 text-[#c8f31d]" />
                <span>BSc (Hons) IS</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Minimalist Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-1.5 text-[10px] font-mono text-zinc-500 hover:text-[#c8f31d] transition-colors cursor-pointer"
            aria-label="Scroll to About"
          >
            <span className="tracking-widest uppercase">Index // 01</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#c8f31d]" />
          </button>
        </div>

      </div>
    </section>
  );
}

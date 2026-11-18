"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, ReactIcon, NextjsIcon, NodejsIcon } from "./Icons";
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
  Database,
  Monitor
} from "lucide-react";

export default function Hero({ onOpenCVNotice }: { onOpenCVNotice?: () => void }) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Perspective Tilt Values for Profile Portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

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

  const heroImageSrc = portfolioData.personal.heroAvatar || "/hero-avatar.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cyan & Sapphire Workspace Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00f0ff]/[0.05] via-[#2563eb]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#00f0ff]/[0.035] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#2563eb]/[0.045] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5"
          >
            
            {/* Status Pill — Matching Hoodie Code Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0e17] border border-[#00f0ff]/25 hover:border-[#00f0ff]/60 transition-colors duration-300 shadow-[0_0_15px_rgba(0,240,255,0.12)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">
                {portfolioData.personal.statusBadge}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[11px] font-mono text-[#00f0ff]">&lt;/&gt; dev</span>
            </motion.div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono tracking-wider text-[#38bdf8] uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
                <span>{portfolioData.personal.greeting}</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                <span>Building high-performance software as a</span>
                <span className="block mt-1.5 min-h-[1.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
                  {typedText}
                  <span className="inline-block w-[3px] h-[0.8em] bg-[#00f0ff] ml-1.5 translate-y-[2px] animate-pulse" />
                </span>
              </h1>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-normal">
              {portfolioData.personal.shortBio}
            </p>

            {/* University & Degree — Badges with Lucide Icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-zinc-300">
              <motion.span 
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-white/10 font-mono text-[11px] text-zinc-300 hover:border-[#00f0ff]/40 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>{portfolioData.personal.university}</span>
              </motion.span>
              <motion.span 
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-white/10 font-mono text-[11px] text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              >
                <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />
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
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-200"
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
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-[#0a0e17] hover:bg-[#121824] border border-white/15 hover:border-[#00f0ff]/50 transition-all duration-200"
              >
                <Send className="w-3.5 h-3.5 text-[#00f0ff] transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>Initiate Contact</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenCVNotice}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-[#00f0ff] hover:bg-white/[0.04] transition-all"
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
                  className="p-2 rounded-lg bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/50 text-zinc-300 hover:text-[#00f0ff] transition-all duration-200 shadow-sm"
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
                  className="p-2 rounded-lg bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#38bdf8]/50 text-zinc-300 hover:text-[#38bdf8] transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${portfolioData.contact.email}`}
                  className="p-2 rounded-lg bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/50 text-zinc-300 hover:text-[#00f0ff] transition-all duration-200 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: High-Tech Cyber Workspace Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center relative perspective-[1200px]">
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 cursor-pointer"
            >

              {/* Ambient Sapphire & Cyan Backlight matching the photo's LED strips */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-[#00f0ff]/30 via-[#2563eb]/25 to-transparent blur-3xl pointer-events-none"
              />

              {/* Main Photo Card Container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl p-[2px] bg-gradient-to-b from-[#00f0ff]/40 via-white/10 to-[#2563eb]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                
                {/* Neon vertical edge matching photo's wall strip */}
                <div className="absolute -left-1 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#00f0ff] via-[#38bdf8] to-[#2563eb] shadow-[0_0_15px_#00f0ff] z-20 pointer-events-none" />

                {/* Inner Canvas */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#06080e] p-1">
                  
                  {/* Hologram Laser Scan Beam */}
                  <div className="hologram-scan" />

                  {/* Photo with subtle hover zoom */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0a0e17]">
                    <Image
                      src={heroImageSrc}
                      alt={portfolioData.personal.name}
                      fill
                      className="object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    
                    {/* Vignette Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080e]/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Hoodie Code Glyph `< / >` Watermark inside portrait */}
                  <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-[#06080e]/85 backdrop-blur-md border border-[#00f0ff]/30 text-[10px] font-mono text-[#00f0ff] flex items-center gap-1 z-10">
                    <span className="font-bold">&lt;/&gt;</span>
                    <span className="text-zinc-400">DEV_STATION</span>
                  </div>

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-[#00f0ff] pointer-events-none opacity-80">+</div>
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-[#00f0ff] pointer-events-none opacity-80">+</div>
                </div>
              </motion.div>

              {/* Floating Tech Orbit 1: React & Next.js Badge (Top Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-3 -right-3 sm:-right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0e17]/95 border border-[#00f0ff]/40 text-[11px] font-mono text-white shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md z-30"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <ReactIcon className="w-4 h-4" />
                </div>
                <span className="text-[#00f0ff] font-semibold">React &amp; Next</span>
              </motion.div>

              {/* Floating Tech Orbit 2: Full-Stack & DB Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0e17]/95 border border-white/10 text-[11px] font-mono text-zinc-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md z-30"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <NodejsIcon className="w-4 h-4" />
                </div>
                <span>Full-Stack Architecture</span>
              </motion.div>

              {/* Floating Tech Orbit 3: Status Indicator (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-5 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a0e17]/95 border border-[#10b981]/30 text-[10px] font-mono text-zinc-300 shadow-lg backdrop-blur-md z-30"
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-[#10b981] font-semibold">Online</span>
                <span className="text-zinc-500">•</span>
                <span>Open for Hire</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Minimalist Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-1.5 text-[10px] font-mono text-zinc-500 hover:text-[#00f0ff] transition-colors cursor-pointer"
            aria-label="Scroll to About"
          >
            <span className="tracking-widest uppercase">Index // 01</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#00f0ff]" />
          </button>
        </div>

      </div>
    </section>
  );
}

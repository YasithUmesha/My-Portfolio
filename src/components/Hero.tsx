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
  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);

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
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const heroImageSrc = portfolioData.personal.heroAvatar || "/hero-avatar.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-32 lg:pt-24 pb-12 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Cyan & Sapphire Workspace Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#00f0ff]/[0.06] via-[#2563eb]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00f0ff]/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#2563eb]/[0.05] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Expanded Max Width Container to Remove Awkward Side Gaps */}
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Introductions & Bold Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            
            {/* Status Pill — Matching Hoodie Code Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a0e17] border border-[#00f0ff]/30 hover:border-[#00f0ff]/70 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]" />
              </span>
              <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-200">
                {portfolioData.personal.statusBadge}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-xs font-mono font-bold text-[#00f0ff]">&lt;/&gt; dev</span>
            </motion.div>

            {/* Main Greeting & Headings with Confident Typography */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono tracking-wider text-[#38bdf8] uppercase flex items-center justify-center lg:justify-start gap-2.5">
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
                <span>{portfolioData.personal.greeting}</span>
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                <span>Engineering scalable systems as a</span>
                <span className="block mt-2 min-h-[1.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
                  {typedText}
                  <span className="inline-block w-[4px] h-[0.8em] bg-[#00f0ff] ml-2 translate-y-[2px] animate-pulse" />
                </span>
              </h1>
            </div>

            {/* Short Bio — Readable & Bold */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
              {portfolioData.personal.shortBio}
            </p>

            {/* University & Degree — Badges with Clear Sizing */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-zinc-200">
              <motion.span 
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0a0e17] border border-white/10 font-mono text-xs sm:text-sm text-zinc-300 hover:border-[#00f0ff]/40 transition-colors"
              >
                <Compass className="w-4 h-4 text-[#00f0ff]" />
                <span>{portfolioData.personal.university}</span>
              </motion.span>
              <motion.span 
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0a0e17] border border-white/10 font-mono text-xs sm:text-sm text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              >
                <Cpu className="w-4 h-4 text-[#38bdf8]" />
                <span>{portfolioData.personal.degree}</span>
              </motion.span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-200"
              >
                <Layers className="w-4.5 h-4.5 text-black" />
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0a0e17] hover:bg-[#121824] border border-white/20 hover:border-[#00f0ff]/60 transition-all duration-200"
              >
                <Send className="w-4 h-4 text-[#00f0ff] transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>Initiate Contact</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenCVNotice}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-mono text-zinc-300 hover:text-[#00f0ff] hover:bg-white/[0.04] transition-all"
                title="Curriculum Vitae"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-zinc-400 font-mono tracking-wider uppercase">
                Find Me:
              </span>
              <div className="flex items-center gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/60 text-zinc-300 hover:text-[#00f0ff] transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#38bdf8]/60 text-zinc-300 hover:text-[#38bdf8] transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${portfolioData.contact.email}`}
                  className="p-2.5 rounded-xl bg-[#0a0e17] hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/60 text-zinc-300 hover:text-[#00f0ff] transition-all duration-200 shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-4.5 h-4.5" />
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: High-Tech Cyber Workspace Profile Portrait (The Only Photo On Site) */}
          <div className="lg:col-span-5 flex justify-center relative perspective-[1200px]">
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center w-80 h-80 sm:w-[420px] sm:h-[420px] cursor-pointer"
            >

              {/* Ambient Sapphire & Cyan Backlight matching the photo's LED strips */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.75, 0.4],
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
                className="relative w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-3xl p-[2px] bg-gradient-to-b from-[#00f0ff]/50 via-white/10 to-[#2563eb]/60 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              >
                
                {/* Neon vertical edge matching photo's wall strip */}
                <div className="absolute -left-1.5 top-6 bottom-6 w-1.5 rounded-full bg-gradient-to-b from-[#00f0ff] via-[#38bdf8] to-[#2563eb] shadow-[0_0_20px_#00f0ff] z-20 pointer-events-none" />

                {/* Inner Canvas */}
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#06080e] p-1.5">
                  
                  {/* Hologram Laser Scan Beam */}
                  <div className="hologram-scan" />

                  {/* Photo with subtle hover zoom */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0a0e17]">
                    <Image
                      src={heroImageSrc}
                      alt={portfolioData.personal.name}
                      fill
                      className="object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    
                    {/* Vignette Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080e]/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Hoodie Code Glyph `< / >` Watermark inside portrait */}
                  <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-[#06080e]/90 backdrop-blur-md border border-[#00f0ff]/40 text-xs font-mono text-[#00f0ff] flex items-center gap-1.5 z-10 shadow-lg">
                    <span className="font-bold">&lt;/&gt;</span>
                    <span className="text-zinc-300">DEV_STATION</span>
                  </div>

                  {/* Corner Target Markers */}
                  <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[#00f0ff] pointer-events-none opacity-85">+</div>
                  <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-[#00f0ff] pointer-events-none opacity-85">+</div>
                </div>
              </motion.div>

              {/* Floating Tech Orbit 1: React & Next.js Badge (Top Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0a0e17]/95 border border-[#00f0ff]/40 text-xs font-mono text-white shadow-[0_10px_25px_rgba(0,0,0,0.7)] backdrop-blur-md z-30"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <ReactIcon className="w-5 h-5" />
                </div>
                <span className="text-[#00f0ff] font-semibold">React &amp; Next</span>
              </motion.div>

              {/* Floating Tech Orbit 2: Full-Stack Architecture Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -left-2 sm:-left-6 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0a0e17]/95 border border-white/15 text-xs font-mono text-zinc-200 shadow-[0_10px_25px_rgba(0,0,0,0.7)] backdrop-blur-md z-30"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <NodejsIcon className="w-5 h-5" />
                </div>
                <span>Full-Stack Architecture</span>
              </motion.div>

              {/* Floating Tech Orbit 3: Status Indicator (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 right-2 sm:right-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a0e17]/95 border border-[#10b981]/40 text-xs font-mono text-zinc-200 shadow-xl backdrop-blur-md z-30"
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
        <div className="mt-12 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#00f0ff] transition-colors cursor-pointer"
            aria-label="Scroll to About"
          >
            <span className="tracking-widest uppercase">Index // 01</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#00f0ff]" />
          </button>
        </div>

      </div>
    </section>
  );
}

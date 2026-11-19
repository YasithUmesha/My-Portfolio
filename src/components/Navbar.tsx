"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  User,
  Terminal,
  FolderGit2,
  Award,
  Mail,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = portfolioData.navigation.map((item) =>
        item.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getNavIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "home":
        return <Home className="w-4 h-4" />;
      case "about":
        return <User className="w-4 h-4" />;
      case "skills":
        return <Terminal className="w-4 h-4" />;
      case "projects":
        return <FolderGit2 className="w-4 h-4" />;
      case "certificates":
        return <Award className="w-4 h-4" />;
      case "contact":
        return <Mail className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#06080e]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_6px_30px_rgba(0,0,0,0.6)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo with bolder typography & larger icon */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-3.5 text-lg font-bold tracking-tight"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#0a0e17] border border-[#00f0ff]/40 group-hover:border-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="font-mono text-base font-black text-[#00f0ff]">&lt;/&gt;</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="text-[#00f0ff] text-xs font-mono font-semibold px-1.5 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  dev
                </span>
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wider uppercase">
                Full-Stack • IS Undergraduate
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation with larger text and clear padding */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0a0e17]/90 border border-white/10 px-3.5 py-2 rounded-full backdrop-blur-md shadow-lg">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-mono flex items-center gap-2 transition-colors duration-200 z-10 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] rounded-full -z-10 shadow-[0_0_20px_rgba(0,240,255,0.45)]"
                    />
                  )}
                  <span className={isActive ? "text-black" : "text-[#00f0ff]"}>
                    {getNavIcon(item.label)}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Connect Action Button with larger text & icon */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-semibold text-zinc-100 bg-[#0a0e17] border border-[#00f0ff]/40 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <Mail className="w-4 h-4 text-[#00f0ff]" />
              <span>Say Hello</span>
              <ArrowUpRight className="w-4 h-4 text-[#00f0ff] opacity-80" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0a0e17] border border-white/10 text-zinc-200 hover:text-white hover:border-[#00f0ff]/40 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#00f0ff]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#06080e]/98 border-b border-white/15 px-6 pt-4 pb-6 space-y-2 overflow-hidden shadow-2xl backdrop-blur-2xl"
          >
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono transition-colors ${
                    isActive
                      ? "text-black bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={isActive ? "text-black" : "text-[#00f0ff]"}>
                    {getNavIcon(item.label)}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

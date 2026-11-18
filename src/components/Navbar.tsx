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
  Briefcase,
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

      const scrollPosition = window.scrollY + 140;

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
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getNavIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "home":
        return <Home className="w-3.5 h-3.5" />;
      case "about":
        return <User className="w-3.5 h-3.5" />;
      case "skills":
        return <Terminal className="w-3.5 h-3.5" />;
      case "projects":
        return <FolderGit2 className="w-3.5 h-3.5" />;
      case "experience":
        return <Briefcase className="w-3.5 h-3.5" />;
      case "certificates":
        return <Award className="w-3.5 h-3.5" />;
      case "contact":
        return <Mail className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06080e]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with interactive Framer Motion pulse */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-2.5 text-base font-bold tracking-tight"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0a0e17] border border-[#00f0ff]/30 group-hover:border-[#00f0ff]/60 transition-colors shadow-sm">
              <span className="font-mono text-xs font-bold text-[#00f0ff]">&lt;/&gt;</span>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1">
                {portfolioData.personal.name}
                <span className="text-[#00f0ff] text-xs font-mono">.dev</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono -mt-0.5 tracking-wider uppercase">
                Software • IS
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation with Framer Motion layoutId Smooth Sliding Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0a0e17]/85 border border-white/10 px-2.5 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 transition-colors duration-200 z-10 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {/* Sliding highlight indicator matching electric cyan */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#00f0ff] rounded-full -z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    />
                  )}
                  <span className={isActive ? "text-black" : "text-zinc-500"}>
                    {getNavIcon(item.label)}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Connect Action Button with Spring Hover */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-[#0a0e17] border border-white/10 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0a0e17] border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#00f0ff]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0e17] border-b border-white/10 px-4 pt-3 pb-5 space-y-1 overflow-hidden"
          >
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                    isActive
                      ? "text-black bg-[#00f0ff] font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {getNavIcon(item.label)}
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

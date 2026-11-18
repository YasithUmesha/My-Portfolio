"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Code2, Terminal } from "lucide-react";

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

      const scrollPosition = window.scrollY + 120;

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-2.5 text-base font-bold tracking-tight"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0d0f14] border border-white/10 group-hover:border-[#c8f31d]/40 transition-colors">
              <span className="font-mono text-xs font-bold text-[#c8f31d]">YU</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide flex items-center">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono -mt-0.5 tracking-wider uppercase">
                Software • IS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d0f14]/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "text-black bg-[#c8f31d] font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Connect Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-[#0d0f14] border border-white/10 hover:border-[#c8f31d]/40 hover:text-[#c8f31d] transition-all"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c8f31d]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0d0f14] border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f14] border-b border-white/10 px-4 pt-3 pb-5 space-y-1">
          {portfolioData.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-3 py-2 rounded-md text-xs font-mono transition-colors ${
                  isActive
                    ? "text-black bg-[#c8f31d] font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

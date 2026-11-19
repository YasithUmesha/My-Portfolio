"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  Mail,
  ArrowUp,
  Terminal,
  Code2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#06080e] border-t border-white/[0.08] pt-12 pb-12 overflow-hidden">
      {/* Expanded Container Width to Remove Side Gaps */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/[0.08]">
          
          {/* Brand Info with Bold Typography */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0a0e17] border border-[#00f0ff]/40 flex items-center justify-center shadow-sm">
                <span className="font-mono text-sm font-bold text-[#00f0ff]">&lt;/&gt;</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Full-Stack Developer &amp; BSc (Hons) in Information Systems undergraduate at Sabaragamuwa University of Sri Lanka.
            </p>
          </div>

          {/* Quick Nav Links (Without Experience) */}
          <div className="md:col-span-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xs sm:text-sm font-mono text-zinc-400 hover:text-[#00f0ff] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a0e17] border border-white/10 hover:border-[#00f0ff]/60 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-colors shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#00f0ff]" />
            </button>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-zinc-500">
          <p>© {currentYear} {portfolioData.personal.name}. All Rights Reserved.</p>
          <p className="text-xs text-zinc-400">
            Engineered with Next.js App Router • Framer Motion • Cyber Sapphire Theme
          </p>
        </div>

      </div>
    </footer>
  );
}

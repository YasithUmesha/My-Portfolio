"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  Mail,
  ArrowUp,
  Heart,
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
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#02000d] border-t border-white/[0.08] pt-8 pb-8 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#030014] rounded-[7px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Developer &amp; BSc (Hons) in Information Systems undergraduate at Sabaragamuwa University of Sri Lanka.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-pink-400" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity ml-2"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with Next.js &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

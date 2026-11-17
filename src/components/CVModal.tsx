"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  FileText,
  X,
  ExternalLink,
  Mail,
  Info,
  CheckCircle2
} from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0a0720] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          aria-label="Close CV modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
            <p className="text-xs text-purple-400 font-mono">
              Status: Placeholder Configured
            </p>
          </div>
        </div>

        {/* Notice Body */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs text-slate-300 leading-relaxed space-y-2 mb-6">
          <div className="flex items-start gap-2 text-purple-300 font-semibold">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>How to add your official CV / Resume:</span>
          </div>
          <ol className="list-decimal pl-5 space-y-1 text-slate-300/90">
            <li>Place your resume PDF file (e.g. <code className="text-purple-300 bg-white/10 px-1 rounded">Yasith_Umesha_CV.pdf</code>) into the <code className="text-purple-300 bg-white/10 px-1 rounded">public/</code> directory.</li>
            <li>Open <code className="text-purple-300 bg-white/10 px-1 rounded">src/data/portfolioData.ts</code>.</li>
            <li>Update <code className="text-purple-300 bg-white/10 px-1 rounded">personal.cvUrl</code> to point to <code className="text-purple-300 bg-white/10 px-1 rounded">&quot;/Yasith_Umesha_CV.pdf&quot;</code> and set <code className="text-purple-300 bg-white/10 px-1 rounded">hasRealCV: true</code>.</li>
          </ol>
        </div>

        {/* Alternative Profiles */}
        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
            In the meantime, view verified credentials &amp; experience on:
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Dismiss Button */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors"
          >
            Got it, thanks!
          </button>
        </div>

      </div>
    </div>
  );
}

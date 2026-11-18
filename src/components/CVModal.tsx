"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0d0f14] border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close CV modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#08090a] border border-[#c8f31d]/30 flex items-center justify-center text-[#c8f31d]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
            <p className="text-xs text-[#c8f31d] font-mono">
              Status: Verified Resume Setup
            </p>
          </div>
        </div>

        {/* Notice Body */}
        <div className="p-4 rounded-xl bg-[#08090a] border border-white/10 text-xs text-zinc-300 leading-relaxed space-y-2 mb-5">
          <div className="flex items-start gap-2 text-[#c8f31d] font-semibold font-mono">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>To attach your custom PDF Resume:</span>
          </div>
          <ol className="list-decimal pl-5 space-y-1 text-zinc-400 font-mono text-[11px]">
            <li>Add your PDF file (e.g. <code className="text-[#c8f31d]">Yasith_Umesha_CV.pdf</code>) into the <code className="text-white">public/</code> directory.</li>
            <li>In <code className="text-white">src/data/portfolioData.ts</code>, update <code className="text-[#c8f31d]">personal.cvUrl</code> to point to your PDF filename.</li>
          </ol>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          <a
            href={`mailto:${portfolioData.contact.email}?subject=Resume%20Request%20-%20Yasith%20Umesha`}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#c8f31d] hover:bg-[#d8ff38] text-black text-xs font-semibold transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request via Email</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-mono transition-colors"
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
}

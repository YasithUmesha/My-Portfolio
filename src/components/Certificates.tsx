"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink,
  BookOpen,
  Calendar,
  Building,
  CheckCircle,
  Eye,
  X
} from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const { education, certificates } = portfolioData;

  return (
    <section
      id="certificates"
      className="relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Credentials &amp; Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Academic Background &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300/80">
            Formal undergraduate qualification and professional engineering credentials.
          </p>
        </div>

        {/* Part 1: Compact University Education Card */}
        <div className="mb-5">
          <div className="relative rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-[#09061c]/90 border border-purple-500/30 p-4 sm:p-5 shadow-xl backdrop-blur-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              
              {/* Left Column: University & Degree Info */}
              <div className="lg:col-span-7 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                  <span>Higher Education Degree</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1 font-semibold text-indigo-300">
                    <Building className="w-3.5 h-3.5" />
                    {education.university}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {education.period}
                  </span>
                </div>

                <p className="text-xs text-slate-300/85 leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Right Column: Key Coursework Highlights */}
              <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-3.5 space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-purple-300 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  <span>Key Coursework &amp; Focus:</span>
                </h4>

                <ul className="space-y-1">
                  {education.highlights.slice(0, 3).map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-normal"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Part 2: Professional Certificates Gallery */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Certificates Gallery</span>
            </h3>
            <span className="text-[10px] font-mono text-purple-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
              {certificates.length} Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative rounded-xl bg-[#09061c]/85 hover:bg-[#0e092b] border border-white/10 hover:border-purple-500/40 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-24 rounded-lg overflow-hidden mb-2.5 bg-[#050312] border border-white/10">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="px-2 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white text-[11px] font-medium flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                    </div>

                    <div className="absolute top-1.5 right-1.5">
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-purple-900/80 text-purple-200 border border-purple-500/40">
                        {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {cert.title}
                  </h4>

                  <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                    <Building className="w-3 h-3 text-indigo-400" />
                    <span className="truncate">{cert.issuer}</span>
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400">
                    ✓ Verified
                  </span>
                  
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Certificate Modal Preview */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0a0720] border border-purple-500/30 rounded-2xl p-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3 border border-white/10">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-base font-bold text-white">{selectedCert.title}</h3>
            <p className="text-xs text-purple-400 mt-0.5">{selectedCert.issuer} • {selectedCert.issueDate}</p>

            <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-colors"
              >
                <span>Verify on Issuing Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
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
      className="relative min-h-screen flex flex-col justify-center items-center py-20 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#00f0ff]/25 text-xs font-mono uppercase tracking-wider text-[#00f0ff] mb-3">
            <Award className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Academic &amp; Verified</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Certificates
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Higher academic qualification and verified software engineering completions.
          </p>
        </div>

        {/* University Education Highlight */}
        <div className="mb-6">
          <div className="relative rounded-xl bg-[#0a0e17] border border-white/10 hover:border-[#00f0ff]/40 p-5 sm:p-6 transition-all duration-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              
              <div className="lg:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[10px] font-mono text-[#38bdf8]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Degree In Progress</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-xs font-mono text-[#00f0ff]">
                  {education.university} • {education.faculty}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  Focusing on enterprise software architecture, modern web development, database management systems, and agile workflows.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="px-4 py-3 rounded-lg bg-[#06080e] border border-white/10 text-left lg:text-right w-full lg:w-auto">
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Status</span>
                  <span className="text-xs font-bold text-white block mt-0.5">{education.status}</span>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">{education.period}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-xl bg-[#0a0e17] hover:bg-[#101726] border border-white/10 hover:border-[#00f0ff]/40 p-4 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#00f0ff]" />
                    <span>{cert.issueDate}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#06080e] text-zinc-300 border border-white/10">
                    {cert.issuer}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white group-hover:text-[#00f0ff] transition-colors mt-2">
                  {cert.title}
                </h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#06080e] text-zinc-400 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500">
                  {cert.credentialId ? `ID: ${cert.credentialId.slice(0, 10)}...` : "Verified Credential"}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="p-1 rounded bg-[#06080e] hover:bg-white/10 text-zinc-300 hover:text-white"
                  aria-label="View Certificate Preview"
                >
                  <Eye className="w-3.5 h-3.5 text-[#00f0ff]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0a0e17] border border-[#00f0ff]/30 rounded-2xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
              {selectedCert.issuer}
            </span>

            <h3 className="text-lg font-bold text-white mt-2">{selectedCert.title}</h3>
            
            <div className="flex flex-wrap gap-1.5 mt-2">
              {selectedCert.skills.map((skill) => (
                <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#06080e] text-[#00f0ff] border border-white/10">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#06080e] border border-white/10 text-xs font-mono text-zinc-400 space-y-1">
              <div>Issue Date: <span className="text-white">{selectedCert.issueDate}</span></div>
              {selectedCert.credentialId && (
                <div>Credential ID: <span className="text-[#00f0ff]">{selectedCert.credentialId}</span></div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-full py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/15"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

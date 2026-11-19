"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import GlassCard from "./GlassCard";
import {
  GraduationCap,
  Award,
  ExternalLink,
  BookOpen,
  Calendar,
  Building,
  CheckCircle,
  Eye,
  X,
  ShieldCheck,
  FileBadge
} from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const { education, certificates } = portfolioData;

  return (
    <section
      id="certificates"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 sm:py-28 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-[700px] h-[700px] bg-[#00f0ff]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Expanded Container Width to Remove Side Gaps */}
      <div className="w-full max-w-7xl mx-auto my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0e17] border border-[#00f0ff]/30 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#00f0ff] mb-4 shadow-[0_0_15px_rgba(0,240,255,0.12)]"
          >
            <Award className="w-4 h-4 text-[#00f0ff]" />
            <span>Academic Qualifications &amp; Credentials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Certificates
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto"
          >
            Higher academic degree qualification and verified software engineering completions.
          </motion.p>
        </div>

        {/* University Education Highlight Banner with GlassCard */}
        <div className="mb-8">
          <GlassCard glowColor="#38bdf8" className="p-7 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-xs font-mono text-[#38bdf8]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Degree In Progress</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                
                <p className="text-sm sm:text-base font-mono text-[#00f0ff] flex items-center gap-2">
                  <Building className="w-4 h-4 text-slate-400" />
                  <span>{education.university}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{education.faculty}</span>
                </p>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                  Comprehensive curriculum specializing in enterprise software architecture, full-stack web engineering, database modeling, distributed computing, and agile workflows.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="px-6 py-4 rounded-xl bg-[#06080e]/90 border border-white/[0.08] text-left lg:text-right w-full lg:w-auto shadow-inner space-y-1">
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Candidate Status</span>
                  <span className="text-base sm:text-lg font-bold text-white block">{education.status}</span>
                  <span className="text-xs font-mono text-[#00f0ff] block">{education.period}</span>
                </div>
              </div>

            </div>
          </GlassCard>
        </div>

        {/* Certificates Grid with GlassCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <GlassCard
              key={cert.id}
              hoverTilt={true}
              glowColor="#00f0ff"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>{cert.issueDate}</span>
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#06080e]/90 text-[#38bdf8] border border-white/[0.08]">
                    {cert.issuer}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors mt-2">
                  {cert.title}
                </h4>
                
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono px-2 py-0.5 rounded bg-[#06080e]/80 text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {cert.credentialId ? `ID: ${cert.credentialId.slice(0, 12)}...` : "Verified Credential"}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="p-2 rounded-lg bg-[#06080e]/90 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="View Certificate Preview"
                >
                  <Eye className="w-4 h-4 text-[#00f0ff]" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0a0e17] border border-[#00f0ff]/30 rounded-3xl p-7 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
              {selectedCert.issuer}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">{selectedCert.title}</h3>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedCert.skills.map((skill) => (
                <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded bg-[#06080e] text-[#00f0ff] border border-white/10">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-[#06080e] border border-white/10 text-xs font-mono text-zinc-300 space-y-1.5">
              <div>Issue Date: <span className="text-white font-bold">{selectedCert.issueDate}</span></div>
              {selectedCert.credentialId && (
                <div>Credential ID: <span className="text-[#00f0ff]">{selectedCert.credentialId}</span></div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 transition-colors"
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

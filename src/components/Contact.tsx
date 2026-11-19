"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import GlassCard from "./GlassCard";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Radio,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 sm:py-28 lg:py-24 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00f0ff]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

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
            <Radio className="w-4 h-4 text-[#00f0ff] animate-pulse" />
            <span>Open Communication Channel</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Initiate Contact &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa]">
              Collaborate
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto"
          >
            Open to software engineering internships, project inquiries, full-stack roles, and collaborations.
          </motion.p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <GlassCard glowColor="#00f0ff" className="p-7 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#00f0ff]" />
                  <span>Direct Channels</span>
                </h3>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#10b981]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                  Available for Hire
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Reach out directly via email, connect with me on LinkedIn, or inspect my open source projects on GitHub.
              </p>

              {/* Email Copier */}
              <div className="p-4 rounded-xl bg-[#06080e]/90 border border-white/[0.08] flex items-center justify-between hover:border-[#00f0ff]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#00f0ff] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {portfolioData.contact.email}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {copiedEmail ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="w-4 h-4 text-[#00f0ff]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Copy className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#06080e]/90 border border-white/[0.08] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-slate-200">
                  {portfolioData.contact.location}
                </span>
              </div>

              {/* Response Time Guarantee Pill */}
              <div className="p-4 rounded-xl bg-[#06080e]/90 border border-white/[0.08] flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-mono">
                <Clock className="w-5 h-5 text-[#fb923c] flex-shrink-0" />
                <span>Response Time: Typically within 24 hours</span>
              </div>

              {/* Social Link Cards with Spring Hover */}
              <div className="pt-2 flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#06080e]/90 hover:bg-[#121824] border border-white/10 hover:border-[#00f0ff]/50 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono text-slate-200 hover:text-[#00f0ff] transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#06080e]/90 hover:bg-[#121824] border border-white/10 hover:border-[#38bdf8]/50 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono text-slate-200 hover:text-[#38bdf8] transition-colors shadow-sm"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Clean Minimalist Form with GlassCard */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="#38bdf8" className="p-7 sm:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/40 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">Transmission Dispatched</h4>
                    <p className="text-sm sm:text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your note has been received and I will review and respond to your email promptly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-xs sm:text-sm font-mono text-white hover:bg-white/15 transition-colors"
                    >
                      Send Another Note
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs sm:text-sm font-mono text-zinc-300 block mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Yasith Umesha"
                          className="w-full px-4 py-3 rounded-xl bg-[#06080e] border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white transition-colors"
                        />
                        {errors.name && <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>}
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-mono text-zinc-300 block mb-2">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@domain.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#06080e] border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white transition-colors"
                        />
                        {errors.email && <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-mono text-zinc-300 block mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Collaboration inquiry / Internship"
                        className="w-full px-4 py-3 rounded-xl bg-[#06080e] border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white transition-colors"
                      />
                      {errors.subject && <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-mono text-zinc-300 block mb-2">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Outline your project details, engineering requirements, or opportunity..."
                        className="w-full px-4 py-3 rounded-xl bg-[#06080e] border border-white/10 focus:border-[#00f0ff] focus:outline-none text-sm text-white resize-none transition-colors"
                      />
                      {errors.message && <p className="text-xs font-mono text-red-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.message}</p>}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#00f0ff] text-black font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.35)]"
                    >
                      <Send className="w-4.5 h-4.5" />
                      <span>{isSubmitting ? "Dispatching..." : "Transmit Message"}</span>
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
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
      className="relative min-h-screen flex flex-col justify-center items-center py-20 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c8f31d]/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#c8f31d] mb-3"
          >
            <Radio className="w-3.5 h-3.5 text-[#c8f31d] animate-pulse" />
            <span>Open Dialogue</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Initiate Contact &amp;{" "}
            <span className="text-[#c8f31d]">
              Collaborate
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xs sm:text-sm text-zinc-400"
          >
            Open to software internships, project inquiries, and engineering collaborations.
          </motion.p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-xl bg-[#0d0f14] border border-white/10 p-5 sm:p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#c8f31d]" />
                  <span>Direct Channels</span>
                </h3>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#10b981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                  Online
                </span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Feel free to copy my direct email, reach out on LinkedIn, or inspect my repositories on GitHub.
              </p>

              {/* Email Copier with Spring Morph Checkmark */}
              <div className="p-3 rounded-lg bg-[#08090a] border border-white/10 flex items-center justify-between hover:border-[#c8f31d]/30 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#c8f31d] flex-shrink-0" />
                  <span className="text-xs font-mono text-zinc-300 truncate">
                    {portfolioData.contact.email}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={copyEmail}
                  className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
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
                        <Check className="w-4 h-4 text-[#c8f31d]" />
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

              {/* Location with Lucide Icon */}
              <div className="p-3 rounded-lg bg-[#08090a] border border-white/10 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span className="text-xs font-mono text-zinc-300">
                  {portfolioData.contact.location}
                </span>
              </div>

              {/* Response Time Guarantee Pill */}
              <div className="p-3 rounded-lg bg-[#08090a] border border-white/10 flex items-center gap-2.5 text-zinc-400 text-xs font-mono">
                <Clock className="w-4 h-4 text-[#fb923c] flex-shrink-0" />
                <span>Response Time: Typically within 24 hours</span>
              </div>

              {/* Social Link Cards with Spring Hover */}
              <div className="pt-2 flex items-center gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#08090a] hover:bg-[#14171f] border border-white/10 hover:border-[#c8f31d]/40 flex items-center justify-center gap-2 text-xs font-mono text-zinc-300 hover:text-[#c8f31d] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#08090a] hover:bg-[#14171f] border border-white/10 hover:border-[#38bdf8]/40 flex items-center justify-center gap-2 text-xs font-mono text-zinc-300 hover:text-[#38bdf8] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Minimalist Form with Framer Motion Feedback */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-[#0d0f14] border border-white/10 p-5 sm:p-6 shadow-sm">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-10 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c8f31d]/10 text-[#c8f31d] border border-[#c8f31d]/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(200,243,29,0.2)]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Transmission Dispatched</h4>
                    <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                      Thank you for reaching out. Your note has been logged and I will respond to your email promptly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-3 px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/15 transition-colors"
                    >
                      Send Another Note
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-zinc-400 block mb-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Yasith Umesha"
                          className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white transition-colors"
                        />
                        {errors.name && <p className="text-[10px] font-mono text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-mono text-zinc-400 block mb-1">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@domain.com"
                          className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white transition-colors"
                        />
                        {errors.email && <p className="text-[10px] font-mono text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Collaboration inquiry / Internship"
                        className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white transition-colors"
                      />
                      {errors.subject && <p className="text-[10px] font-mono text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Outline your inquiry or project details..."
                        className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white resize-none transition-colors"
                      />
                      {errors.message && <p className="text-[10px] font-mono text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-lg bg-[#c8f31d] hover:bg-[#d8ff38] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(200,243,29,0.25)]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "Dispatching..." : "Transmit Message"}</span>
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

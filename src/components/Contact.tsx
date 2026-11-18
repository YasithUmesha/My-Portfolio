"use client";

import React, { useState } from "react";
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
  ArrowUpRight
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
      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-white/10 text-xs font-mono uppercase tracking-wider text-[#c8f31d] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#c8f31d]" />
            <span>Open Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Initiate Contact &amp;{" "}
            <span className="text-[#c8f31d]">
              Collaborate
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Open to software internships, project inquiries, and engineering collaborations.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl bg-[#0d0f14] border border-white/10 p-5 sm:p-6 space-y-4">
              <h3 className="text-base font-bold text-white tracking-tight">Direct Channels</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Feel free to email directly or connect on professional networks.
              </p>

              {/* Email Copier */}
              <div className="p-3 rounded-lg bg-[#08090a] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#c8f31d] flex-shrink-0" />
                  <span className="text-xs font-mono text-zinc-300 truncate">
                    {portfolioData.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#c8f31d]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3 rounded-lg bg-[#08090a] border border-white/10 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span className="text-xs font-mono text-zinc-300">
                  {portfolioData.contact.location}
                </span>
              </div>

              {/* Social Link Cards */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#08090a] hover:bg-[#14171f] border border-white/10 hover:border-[#c8f31d]/40 flex items-center justify-center gap-2 text-xs font-mono text-zinc-300 hover:text-[#c8f31d] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#08090a] hover:bg-[#14171f] border border-white/10 hover:border-[#38bdf8]/40 flex items-center justify-center gap-2 text-xs font-mono text-zinc-300 hover:text-[#38bdf8] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#0d0f14] border border-white/10 p-5 sm:p-6 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#c8f31d]/10 text-[#c8f31d] border border-[#c8f31d]/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Received</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. I will review your inquiry and respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/15"
                  >
                    Send Another Note
                  </button>
                </div>
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
                        className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white"
                      />
                      {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white"
                      />
                      {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
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
                      className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white"
                    />
                    {errors.subject && <p className="text-[10px] text-red-400 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your inquiry or project details..."
                      className="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/10 focus:border-[#c8f31d] focus:outline-none text-xs text-white resize-none"
                    />
                    {errors.message && <p className="text-[10px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg bg-[#c8f31d] hover:bg-[#d8ff38] text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "Dispatching..." : "Transmit Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

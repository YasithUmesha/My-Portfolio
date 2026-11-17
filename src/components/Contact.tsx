"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
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
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-t from-purple-600/10 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300/80">
            {portfolioData.contact.invitation}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Availability */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Availability Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#09061c]/90 border border-purple-500/30 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                  Open for Opportunities
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                Seeking Internships &amp; Roles
              </h3>
              <p className="text-[11px] text-slate-300/80 mt-1 leading-relaxed">
                {portfolioData.contact.availability}
              </p>
            </div>

            {/* Email Card with Copy Feature */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-colors shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="block text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors truncate"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[10px] font-mono text-emerald-400 mt-1.5">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Location
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#0077b5]/10 border border-white/10 hover:border-[#0077b5]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-semibold text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#09061c]/90 border border-white/10 p-5 sm:p-6 shadow-xl backdrop-blur-xl">
              
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">Send Me a Message</h3>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Thank You, Message Received!
                  </h4>
                  <p className="text-xs text-slate-300/90 max-w-sm mx-auto">
                    Your message was validated successfully and is ready for production service integration.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  
                  {/* Name and Email side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-mono uppercase tracking-wider text-slate-300 mb-1"
                      >
                        Your Name <span className="text-pink-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border ${
                          errors.name
                            ? "border-pink-500 focus:border-pink-500"
                            : "border-white/10 focus:border-purple-500"
                        } text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[10px] text-pink-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-2.5 h-2.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-mono uppercase tracking-wider text-slate-300 mb-1"
                      >
                        Your Email <span className="text-pink-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border ${
                          errors.email
                            ? "border-pink-500 focus:border-pink-500"
                            : "border-white/10 focus:border-purple-500"
                        } text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[10px] text-pink-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-2.5 h-2.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[10px] font-mono uppercase tracking-wider text-slate-300 mb-1"
                    >
                      Subject <span className="text-pink-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Internship Opportunity / Software Project"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border ${
                        errors.subject
                          ? "border-pink-500 focus:border-pink-500"
                          : "border-white/10 focus:border-purple-500"
                      } text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[10px] text-pink-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-2.5 h-2.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-mono uppercase tracking-wider text-slate-300 mb-1"
                    >
                      Message <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border ${
                        errors.message
                          ? "border-pink-500 focus:border-pink-500"
                          : "border-white/10 focus:border-purple-500"
                      } text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[10px] text-pink-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-2.5 h-2.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 hover:shadow-purple-600/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

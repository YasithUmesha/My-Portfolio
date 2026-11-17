"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";

export default function HomePage() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-purple-600/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenCVNotice={() => setIsCVModalOpen(true)} />

      {/* About Section */}
      <About onOpenCVNotice={() => setIsCVModalOpen(true)} />

      {/* Skills Section */}
      <Skills />

      {/* Projects Showcase Section */}
      <Projects />

      {/* Experience Timeline Section */}
      <Experience />

      {/* Certificates & Education Section */}
      <Certificates />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* CV / Resume Status Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </main>
  );
}

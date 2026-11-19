"use client";

import React, { useState } from "react";
import PageLoader from "@/components/PageLoader";
import AnimeBackground from "@/components/AnimeBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";

export default function HomePage() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#06080e] text-slate-100 selection:bg-[#00f0ff]/25 selection:text-white overflow-x-hidden">
      {/* Interactive Page Refresh / Boot Animation */}
      <PageLoader />

      {/* Anime.js Ambient Glass Shards & Constellation */}
      <AnimeBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenCVNotice={() => setIsCVModalOpen(true)} />

      {/* About Section (No redundant photo - clean editorial layout) */}
      <About onOpenCVNotice={() => setIsCVModalOpen(true)} />

      {/* Skills Section (Divided into feature modules) */}
      <Skills />

      {/* Projects Showcase Section */}
      <Projects />

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

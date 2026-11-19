"use client";

import React, { useEffect, useRef } from "react";
import { animate, random } from "animejs";

/**
 * Ambient interactive glass constellation powered by anime.js
 * Renders smooth floating geometric particles & glass refraction nodes
 */
export default function AnimeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Floating glass nodes animation
    const nodesAnimation = animate(".glass-ambient-node", {
      translateX: () => random(-40, 40),
      translateY: () => random(-50, 50),
      scale: () => [random(0.8, 1.2), random(0.9, 1.3)],
      opacity: () => [random(0.2, 0.6), random(0.4, 0.8)],
      ease: "inOutSine",
      duration: () => random(6000, 10000),
      alternate: true,
      loop: true,
    });

    // Subtle breathing pulse for cyan aura rings
    const auraAnimation = animate(".glass-aura-ring", {
      scale: [1, 1.15],
      opacity: [0.15, 0.35],
      ease: "inOutQuad",
      duration: 7000,
      alternate: true,
      loop: true,
    });

    return () => {
      try {
        nodesAnimation.pause();
        auraAnimation.pause();
      } catch {
        // Safe cleanup
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {/* Anime.js powered aura glow rings */}
      <div className="glass-aura-ring absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00f0ff]/15 via-[#2563eb]/10 to-transparent blur-[120px]" />
      <div className="glass-aura-ring absolute top-1/2 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#38bdf8]/10 via-[#2563eb]/15 to-transparent blur-[140px]" />
      <div className="glass-aura-ring absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-t from-[#00f0ff]/10 via-[#0a0e17]/0 to-transparent blur-[130px]" />

      {/* Floating geometric glass shards / nodes */}
      <div
        className="glass-ambient-node absolute top-[15%] left-[8%] w-3 h-3 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 backdrop-blur-sm shadow-[0_0_12px_#00f0ff]"
      />
      <div
        className="glass-ambient-node absolute top-[28%] right-[12%] w-2 h-2 rounded-full border border-[#38bdf8]/50 bg-[#38bdf8]/20 backdrop-blur-sm shadow-[0_0_10px_#38bdf8]"
      />
      <div
        className="glass-ambient-node absolute top-[45%] left-[18%] w-4 h-4 rounded-lg rotate-45 border border-white/20 bg-white/5 backdrop-blur-sm"
      />
      <div
        className="glass-ambient-node absolute top-[62%] right-[22%] w-2.5 h-2.5 rounded-full border border-[#00f0ff]/50 bg-[#00f0ff]/15 shadow-[0_0_15px_#00f0ff]"
      />
      <div
        className="glass-ambient-node absolute top-[78%] left-[10%] w-3.5 h-3.5 rounded-md rotate-12 border border-[#2563eb]/40 bg-[#2563eb]/15 backdrop-blur-sm"
      />
      <div
        className="glass-ambient-node absolute top-[85%] right-[8%] w-2 h-2 rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/20 shadow-[0_0_10px_#38bdf8]"
      />
    </div>
  );
}

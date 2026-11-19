"use client";

import React, { useRef, useState } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: "subtle" | "medium" | "vibrant";
  hoverTilt?: boolean;
}

/**
 * Modern Glassmorphism Card with dynamic specular highlight tracking the cursor
 * Powered by pure CSS backdrop-filter + reactive pointer optics
 */
export default function GlassCard({
  children,
  className = "",
  glowColor = "#00f0ff",
  intensity = "medium",
  hoverTilt = false,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y, opacity: 1 });

    if (hoverTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((y - centerY) / centerY) * -5;
      const tiltY = ((x - centerX) / centerX) * 5;
      setTilt({ x: tiltX, y: tiltY });
    }
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    if (hoverTilt) {
      setTilt({ x: 0, y: 0 });
    }
  };

  const glowOpacity =
    intensity === "subtle" ? "0.06" : intensity === "vibrant" ? "0.18" : "0.12";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: hoverTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        transition: "transform 0.15s ease-out, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      className={`relative rounded-2xl overflow-hidden backdrop-blur-xl bg-[#090d18]/70 border border-white/[0.08] hover:border-white/[0.22] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] transition-all duration-300 group ${className}`}
      {...props}
    >
      {/* 1px Specular Glass Edge Highlight on Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

      {/* Reactive Glass Specular Refraction (follows mouse) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, ${glowOpacity}), transparent 70%)`,
        }}
      />

      {/* Subtle Inner Glass Ambient Depth */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}

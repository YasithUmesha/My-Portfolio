"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, Cpu, CheckCircle2 } from "lucide-react";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 250);
          return 100;
        }
        const jump = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + jump, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06080e] overflow-hidden"
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
          
          {/* Ambient Sapphire Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#00f0ff]/15 via-[#2563eb]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            
            {/* Glowing Code Symbol matching hoodie */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a0e17] border border-[#00f0ff]/40 shadow-[0_0_35px_rgba(0,240,255,0.25)] mb-6"
            >
              <span className="font-mono text-2xl font-black text-[#00f0ff] tracking-tighter">
                &lt;/&gt;
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
            </motion.div>

            {/* Terminal Boot Sequence Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#00f0ff] tracking-widest uppercase">
                <Terminal className="w-3.5 h-3.5" />
                <span>Yasith.dev // Booting</span>
              </div>
              <p className="text-sm font-bold text-white tracking-tight">
                Software &amp; Information Systems
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 mt-6">
              <div className="h-1.5 w-full bg-[#0d1424] rounded-full overflow-hidden border border-white/10 p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#00f0ff] rounded-full shadow-[0_0_12px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Status & Numeric Percentage */}
              <div className="flex items-center justify-between mt-2.5 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1 text-[#38bdf8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                  {progress < 100 ? "Syncing Modules..." : "Ready"}
                </span>
                <span className="text-white font-bold">{progress}%</span>
              </div>
            </div>

          </div>

          {/* Bottom Coordinates & Watermark */}
          <div className="absolute bottom-6 flex items-center justify-between w-full max-w-6xl px-8 text-[10px] font-mono text-zinc-600">
            <span>NODE // ASIA-SOUTH-1</span>
            <span>SECURE PROTOCOL [TLS 1.3]</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


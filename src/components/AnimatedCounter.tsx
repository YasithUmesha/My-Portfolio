"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface AnimatedCounterProps {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const obj = { value: 0 };
          animate(obj, {
            value: end,
            duration,
            ease: "outExpo",
            onUpdate: () => {
              setDisplayValue(obj.value);
            },
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const formatted =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue);

  return (
    <div ref={containerRef} className="flex flex-col">
      <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white flex items-baseline">
        {prefix && <span className="text-[#00f0ff] mr-0.5">{prefix}</span>}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#38bdf8]">
          {formatted}
        </span>
        {suffix && <span className="text-[#00f0ff] ml-0.5">{suffix}</span>}
      </div>
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
        {label}
      </span>
    </div>
  );
}

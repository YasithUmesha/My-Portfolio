/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090a",
        foreground: "#f4f4f5",
        surface: {
          base: "#08090a",
          card: "#0d0f14",
          cardHover: "#12151d",
          elevated: "#171a23",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(200, 243, 29, 0.35)",
        },
        accent: {
          lime: "#c8f31d",       // Primary signature electric lime
          limeMuted: "#9ebf16",
          cyan: "#38bdf8",       // Technical glacier cyan
          emerald: "#10b981",    // Live status indicator
          amber: "#f59e0b",      // Academic/highlight badge
          orange: "#fb923c",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

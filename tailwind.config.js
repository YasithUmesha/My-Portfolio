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
        background: "#06080e",
        foreground: "#f1f5f9",
        surface: {
          base: "#06080e",
          card: "#0a0e17",
          cardHover: "#101726",
          elevated: "#151e30",
          border: "rgba(56, 189, 248, 0.12)",
          borderHover: "rgba(0, 240, 255, 0.45)",
        },
        accent: {
          cyan: "#00f0ff",        // Electric Cyan matching vertical LED strip
          azure: "#38bdf8",       // Sky azure
          sapphire: "#2563eb",    // Deep cyber sapphire
          emerald: "#10b981",     // Plant & online status
          amber: "#f59e0b",       // Warm lamp glow
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%': { top: '0%' },
          '50%': { top: '90%' },
          '100%': { top: '0%' },
        },
      },
    },
  },
  plugins: [],
};

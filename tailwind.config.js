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
        background: "#030014",
        foreground: "#f8faff",
        brand: {
          indigo: "#6366f1",
          purple: "#a855f7",
          pink: "#ec4899",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          violet: "#8b5cf6"
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '0.6', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
};


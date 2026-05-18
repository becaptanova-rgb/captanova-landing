import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E8CC94",
          dark: "#8B6A3E",
        },
        obsidian: {
          DEFAULT: "#060810",
          2: "#0C1120",
          3: "#121929",
        },
        midnight: "#0A0F1E",
        slate: {
          DEFAULT: "#1A2035",
          2: "#242B40",
        },
        ice: {
          DEFAULT: "#E8EEF8",
          dim: "#8E9AB5",
        },
        ember: "#C43055",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-border": "pulse-border 3s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "float-up": "float-up linear infinite",
        blink: "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-border": {
          "0%, 100%": {
            borderColor: "rgba(201,169,110,0.3)",
            boxShadow: "0 0 0 0 rgba(201,169,110,0)",
          },
          "50%": {
            borderColor: "rgba(201,169,110,0.7)",
            boxShadow: "0 0 20px rgba(201,169,110,0.15)",
          },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        "float-up": {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(-10vh) scale(1)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

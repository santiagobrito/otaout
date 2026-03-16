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
        black: "#0a0a0a",
        "off-white": "#f5f5f2",
        orange: "#E8440A",
        "orange-light": "#FCE8E2",
        muted: "#888888",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
        jetbrainsMono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

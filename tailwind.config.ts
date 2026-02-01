import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      ink: {
        900: "#111b2b",
        700: "#2a3a52",
        500: "#4a5b74",
        100: "#dfe5ef",
      },
      sand: {
        50: "#f7f3ee",
        100: "#efe7df",
        200: "#e5d7c8",
      },
      copper: {
        600: "#b26b3f",
        500: "#c67c4e",
        400: "#d8946a",
        200: "#f1d3c0",
      },
      moss: {
        600: "#3f5f52",
        500: "#5e7e6f",
        300: "#9eb3a6",
      },
      mist: {
        500: "#8aa4b6",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 24, 39, 0.12)",
        lift: "0 18px 40px rgba(17, 27, 43, 0.18)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(198, 124, 78, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(94, 126, 111, 0.22), transparent 45%), radial-gradient(circle at 10% 90%, rgba(138, 164, 182, 0.2), transparent 45%)",
        "grid-fade":
          "linear-gradient(transparent 0%, rgba(17, 27, 43, 0.05) 40%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

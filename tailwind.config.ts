import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { brand: "#245c42", ink: "#20332b", paper: "#f4f6f1" },
      maxWidth: { content: "75rem" },
    },
  },
  plugins: [],
};
export default config;

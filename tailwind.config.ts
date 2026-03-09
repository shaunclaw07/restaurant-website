import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#B8860B",
          olive: "#556B2F",
          brown: "#887355",
          light: "#F5F5F5",
          charcoal: "#2F2F2F"
        }
      },
      letterSpacing: {
        daphne: "0.18em"
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(47, 47, 47, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;

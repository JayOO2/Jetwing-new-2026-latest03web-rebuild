import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3c5c",
        secondary: "#2d5a87",
        accent: "#d4a84b",
        gold: "#d4a84b",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;

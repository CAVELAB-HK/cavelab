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
        background: "#FFFFFF",
        foreground: "#2B2B2B",
        "grey-lightest": "#F8F9FA",
        "grey-light": "#E8EAED",
        "grey-mid": "#9AA5B1",
        "grey-dark": "#4A5568",
        "blue-grey": "#546E7A",
        "accent-blue": "#5B8C9E",
      },
    },
  },
  plugins: [],
};

export default config;

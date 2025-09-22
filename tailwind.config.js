/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#15803d", // Trucast green
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
      }
    },
  },
  plugins: [],
};

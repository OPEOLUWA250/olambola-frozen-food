/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // Dark blue - header, footer, main actions
        secondary: "#3b82f6", // Light blue - secondary buttons, highlights
        accent: "#3b82f6", // Light blue - same as secondary for consistency
        dark: "#1e293b", // Dark gray - text
      },
    },
  },
  plugins: [],
};

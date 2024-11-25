/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "Dark-Mode-Elements": "#2b3945",
      "Dark-Mode-Background": "#202c37",
      "Light-Mode-Text": "#111517",
      "Light-Mode-Input": "#858585",
      "Light-Mode-Background": "#fafafa",
      "Dark-Mode-Text-Light-Mode-Elements": "#ffffff",
    },
  },
  plugins: [],
};

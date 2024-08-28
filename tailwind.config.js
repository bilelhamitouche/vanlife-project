/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountain: "url('./src/assets/mountain.png')",
        camping: "url('./src/assets/camping.png')",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};

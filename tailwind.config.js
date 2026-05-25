/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}", "./src/context/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        premium: "0 18px 60px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/context/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fitness-black": "var(--fitness-bg)",
        "fitness-card": "var(--fitness-card)",
        "fitness-soft": "var(--fitness-soft)",
        "fitness-input": "var(--fitness-input)",
        "fitness-border": "var(--fitness-border)",
        "fitness-text": "var(--fitness-text)",
        "fitness-muted": "var(--fitness-muted)",
        "fitness-subtle": "var(--fitness-subtle)",
        "fitness-nav": "var(--fitness-nav)",
        "fitness-hero-text": "var(--fitness-hero-text)",
        "fitness-hero-muted": "var(--fitness-hero-muted)",
        "fitness-orange": "rgb(var(--fitness-orange-rgb) / <alpha-value>)",
        "fitness-orange-hover": "rgb(var(--fitness-orange-hover-rgb) / <alpha-value>)",
      },
      boxShadow: {
        premium: "var(--fitness-premium-shadow)",
        "orange-glow": "var(--fitness-orange-shadow)",
      },
    },
  },
  plugins: [],
};

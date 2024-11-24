/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        17: "4.5rem",
        100: "25rem",
        120: "30rem",
        140: "35rem"
      },
      colors: {
        "site-font-color": "var(--siteFontColor)"
      }
    },
  },
  plugins: [],
}


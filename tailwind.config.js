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
        124: "31rem",
        125: "31.25rem",
        126: "31.5rem",
        128: "32rem",
        140: "35rem"
      },
      colors: {
        "site-font-color": "var(--siteFontColor)"
      }
    },
  },
  plugins: [],
}


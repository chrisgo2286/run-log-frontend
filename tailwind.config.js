/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        17: "4.5rem",
        29: "7.25rem",
        30: "7.5rem",
        30.25: "7.5625",
        30.5: "7.625rem",
        30.75: "7.6875rem",
        31: "7.75rem",
        100: "25rem",
        102: "25.5rem",
        103: "25.75rem",
        104: "26rem",
        104.5: "26.125rem",
        105: "26.25rem",
        106: "26.5rem",
        110: "27.5rem",
        115: "28.75rem",
        120: "30rem",
        124: "31rem",
        125: "31.25rem",
        126: "31.5rem",
        128: "32rem",
        136: "34rem",
        137: "34.25rem",
        138: "34.5rem",
        140: "35rem",
        142: "35.5rem",
        150: "36.5rem",
        151: "37.75rem",
        152: "38rem",
        160: "40rem",
        170: "42.5rem",
        176: "44rem",
        180: "45rem",
        200: "50rem",
        202: "50.5rem",
        204: "51rem",
        230: "57.5rem",
        232: "58rem",
        234: "58.5rem",
        236: "59rem",
        237: "59.25rem",
        238: "59.5rem",
        238.5: "59.625rem",
        239: "59.75rem"
      },
      colors: {
        "site-font-color": "var(--siteFontColor)"
      }
    },
  },
  plugins: [],
}


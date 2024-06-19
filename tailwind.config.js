/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_a: "#EFE2F5",
        primary_b: "#C7ACD4",
        primary_c: "#9671A7",
        primary_d: "#5B2C6F",
        primary_e: "#441C57",
        secondary_a: "#E8E4F6",
        secondary_b: "#BBB1D7",
        secondary_c: "#8678AC",
        secondary_d: "#534381",
        secondary_e: "#30215A",
        tertiary_a: "#FAE5F0",
        tertiary_b: "#E7BAD2",
        tertiary_c: "#CC87AC",
        tertiary_d: "#994672",
        tertiary_e: "#6B1F47",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F7EBFA",
          100: "#F0D7F4",
          200: "#E0AFE9",
          300: "#D187DE",
          400: "#C05BD2",
          500: "#B036C5",
          600: "#8B2B9C",
          700: "#6B2178",
          800: "#471650",
          900: "#240B28",
          950: "#120514"         
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}


/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-1': ['Roboto', ...defaultTheme.fontFamily.sans],
        'sans-2': ['Kanit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#1b7c52",
        secondary: "#ccdfe6",
        "green-1":"#0c472d",
        "blue-1":"#7fcde1",
        "gray-1": "#858080",
        "gray-2": "#B8B8B8",
        "gray-3": "#B8B8B8",
        "white-1": "#EEECEC",
        "white-2": "#FEFDFD",
        "white-3": "#F7F7F7",
        "aqua-1": "#00be5e",
        "aqua-2": "#f3fcf7",
        "red-1": "#CD1A1A",
        "red-2": "#F4D5D5",
        "red-3": "#E87C7C",
        "black-1": "#2A2A2A",
        "black-2": "#414141",
        "black-3": "#676666",
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}


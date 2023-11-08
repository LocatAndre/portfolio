/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        olive: {
          900: "#191502",
          800: "#312a04",
          700: "#4a3f06",
          600: "#625508",
          500: "#7c6a0a",
          400: "#c0a610",
          300: "#eed12e",
          200: "#f4e073",
          100: "#f9f0b9",
        },
        sage: {
          900: "#292a18",
          800: "#525430",
          700: "#7b7e49",
          600: "#a1a664",
          500: "#babd8d",
          400: "#c8cba4",
          300: "#d6d8bb",
          200: "#e4e5d2",
          100: "#f1f2e8",
        },
        apricot: {
          900: "#5b2000",
          800: "#b64000",
          700: "#ff6511",
          600: "#ffa06c",
          500: "#ffdac6",
          400: "#ffe2d2",
          300: "#ffe9dd",
          200: "#fff0e9",
          100: "#fff8f4",
        },
        dark_slate_gray: {
          900: "#070e0d",
          800: "#0f1c1b",
          700: "#162a28",
          600: "#1e3835",
          500: "#254441",
          400: "#427a74",
          300: "#62aaa3",
          200: "#96c7c2",
          100: "#cbe3e0",
        },
        persimmon: {
          900: "#311305",
          800: "#632609",
          700: "#94380e",
          600: "#c64b12",
          500: "#eb6424",
          400: "#ef8250",
          300: "#f3a17b",
          200: "#f7c0a7",
          100: "#fbe0d3",
        },
      },
    },
  },
  plugins: [],
};

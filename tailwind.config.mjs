/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
      },
      colors: {
        gray: {
          500: "#666666",
          600: "#555555",
          700: "#444444",
          800: "#252525",
          900: "#131313",
          950: "#090909",
        },
      },
    },
  },
  plugins: [],
};

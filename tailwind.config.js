// @type {import('tailwindcss').Config}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        blue: {
          DEFAULT: "#5F5FFF",
          100: "#8749FF",
          200: "#615EFF",
          300: "#625EFF",
          400: "#625EFF",
          500: "#5F5FFF",
        },
        navy: {
          100: "#1E1E37",
          200: "#1D1D32",
          300: "#15161B",
          400: "#1A1B2B",
        },
      },
      fontFamily: {
        redhatDisplay: ["var(--font-radHatDisplay)"],
        manrope: ["var(--font-manrope)"],
      },

      backgroundImage: {
        heroV1: "url(../public/img/hero-bg.png)",
        heroV2: "url(../public/img/heroV2-bg.png)",

        footerBgV1: "url(../public/img/footer-bg.png)",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".transition-sm": {
          transition: "all 0.3s ease",
        },
        ".transition-lg": {
          transition: "all 0.5s ease",
        },
        ".center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".d-inline": {
          display: "flex",
          alignItems: "center",
          gap: "5px",
        },
      });
    },
  ],
};

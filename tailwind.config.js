module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      colors: {
        "cream-background": "#f3eae3",
      },
      screens: {
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        title_card: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

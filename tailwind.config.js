/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playball: ['"Playball"', "cursive"],
        italiana: ['"Italiana"', "serif"],
        tangerine: ['"Tangerine"', "cursive"],
        arabic: ['"Amiri"', "serif"],
        great_vibes: ['"Great Vibes"', "cursive"],
        lato: ['"Lato"', "serif"],
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceSmall: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
         bounceSmall: 'bounceSmall  1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

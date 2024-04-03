/** @type {import('tailwindcss').Config} */
export default {
  important: true, // Add this line to prioritize custom CSS over Tailwind's utility classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ["Raleway", "sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        primary: {
          DEFAULT: '#004AAD',
        },
        attendify: {
          "50": "#e6edf7",
          "100": "#ccdbef",
          "200": "#99b7de",
          "300": "#6692ce",
          "400": "#336ebd",
          "500": "#004aad",
          "600": "#003b8a",
          "700": "#002c68",
          "800": "#001e45",
          "900": "#000f23"
        }
      },                    
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

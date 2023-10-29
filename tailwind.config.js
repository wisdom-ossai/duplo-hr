/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        ...defaultTheme.colors,

        slate: {
          ...defaultTheme.colors.slate,
          100: "#f5f6fa",
        },

        blue: {
          ...defaultTheme.colors.blue,
          100: "#ecf1fb", // gray area of circlar progress
          200: "#d8e4ff", // blue badge background
          500: "#387dff",
          DEFAULT: "#387dff",
        },

        red: {
          ...defaultTheme.colors.red,
          200: "#fef4ef",
          500: "#fe5631",
          DEFAULT: "#fe5631",
        },

        amber: {
          ...defaultTheme.colors.amber,
          200: "#fffaee",
          500: "#ffa600",
          DEFAULT: "#ffa600",
        },

        green: {
          ...defaultTheme.colors.green,
          200: "#ebf7f5",
          300: "#d6f5e6", // green badge background
          400: "#9de6c5", // gree badge text
          500: "#39ca89",
          DEFAULT: "#39ca89",
        },

        gray: {
          ...defaultTheme.colors.gray,
          200: "#b2b2b2", // light text for card name and sidebar and placeholder
          500: "#89898b",
          900: "#333333", // dark text color
          DEFAULT: "#89898b",
        },

        cyan: {
          ...defaultTheme.colors.cyan,
          500: "#57ccf2",
          DEFAULT: "#57ccf2",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};

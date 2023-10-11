/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "afa-1-8e": "var(--afa-1-8e)",
        "background-color": "var(--background-color)",
        "collection-1-color": "var(--collection-1-color)",
        "d-9d-9d-9": "var(--d-9d-9d-9)",
        "e-2d-0b-8": "var(--e-2d-0b-8)",
        "f-7ebd-1": "var(--f-7ebd-1)",
        navbar: "var(--navbar)",
        "text-color": "var(--text-color)",
      },
      fontFamily: {
        "default-heading": "var(--default-heading-font-family)",
        "default-text": "var(--default-text-font-family)",
        "large-text": "var(--large-text-font-family)",
        "small-text": "var(--small-text-font-family)",
        "text-bold": "var(--text-bold-font-family)",
      },
      boxShadow: {
        "background-blur": "var(--background-blur)",
        "shadow-effect": "var(--shadow-effect)",
        "shadow-for-overlay": "var(--shadow-for-overlay)",
      },
    },
  },
  plugins: [],
};

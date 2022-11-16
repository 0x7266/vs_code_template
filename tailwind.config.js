/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "activity-bar": "#333333",
        "side-bar": "#252526",
        "code-area": "#1E1E1E",
        "tabs-bar": "#2D2D2D",
        tab: {
          active: "#1E1E1E",
          default: "#2D2D2D",
        },
        "status-bar": "#007ACC",
        yellow: "#FCD299",
        green: "#4EC995",
      },
    },
  },
  plugins: [],
};

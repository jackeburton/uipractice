/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "8px 8px black",
        bold: "0px 0px 0px 5px black",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};

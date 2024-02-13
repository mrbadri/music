

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: "1rem",
      // default breakpoints but with 40px removed
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        Robot: ["Manrope sans", "serif"],
        
      },
    },
    colors: {
      // SteelBlue
      "SteelBlue-50": "#F4F7FB",
      "SteelBlue-100": "#E8EEF6",
      "SteelBlue-200": "#CBDCEC",
      "SteelBlue-300": "#9DBFDC",
      "SteelBlue-400": "#689CC8",
      "SteelBlue-500": "#4682B4",
      "SteelBlue-600": "#346695",
      "SteelBlue-700": "#2B5279",
      "SteelBlue-800": "#274665",
      "SteelBlue-900": "#253C55",
      "SteelBlue-950": "#182739",

      "pale-sky": {
        50: "#f7f8f8",
        100: "#edeef1",
        200: "#d8dbdf",
        300: "#b6bac3",
        400: "#8e95a2",
        500: "#6b7280",
        600: "#5b616e",
        700: "#4a4e5a",
        800: "#40444c",
        900: "#383a42",
        950: "#25272c",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};

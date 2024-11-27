// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         customPink: "rgba(225, 182, 193, 1)",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-yellow":'#f9eb28',
        'custom-red': '#F24F4B',
        'custom-heading':"#667649",
        'custom-blue':"#0021A6",
        'custom-brown':"#632E0F",
        'custom-darkblue':"#00246B",
        'custom-lightblue':"#CADCFC",
        'custom-maroon':"#fafafa",
        'custom-lightbrown': '#C07A50',
        'custom-blue-table': '#003375',
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      }
    },
  },
  plugins: [],
}

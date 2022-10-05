/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#d35a58",
          
 "secondary": "#058c48",
          
 "accent": "#152977",
          
 "neutral": "#2A1D30",
          
 "base-100": "#FAF9FB",
          
 "info": "#69C7F2",
          
 "success": "#1BDAC0",
          
 "warning": "#DA7E07",
          
 "error": "#FB5165",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

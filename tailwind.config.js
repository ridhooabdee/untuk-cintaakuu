/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: { primary: "#C73659", dark: "#171717", secondary: "#64748b"},
      screens: { "2xl": "1320px" },
      
      keyframes:{ 
          ping :{
          '75% 100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        }
      },
      animation:{ ping:'ping 0.8s cubic-bezier(0, 0, 0.2, 1) infinite'},
      dropShadow: {
        '2xl': '0 35px 35px rgba(199, 54, 89, 0.50)',
        'lumayan': '0 5px 10px rgba(199, 54, 89, 0.50)',
      }
    },
  },
  plugins: [],
};

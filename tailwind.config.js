/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: "768px",
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBlue: "	hsl(231, 81%, 39%)",
        mediumBlue: "hsl(220, 94%, 57%)",
        cyanBlue: "hsl(188, 77%, 66%)",
        white: "hsl(240, 100%, 100%)",
        mediumRed: "hsl(345, 94%, 57%)",
        mediumPurple: "hsl(240, 100%, 100%)",
        mediumGrey: "hsl(240, 100%, 100%)",
        darkGrey: "hsl(0, 0%, 64%)",

      },
    },
  },
  plugins: [],
}
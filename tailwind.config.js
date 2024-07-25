/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    plugins: [require('daisyui')], 
    daisyui: {
      themes: ["light", "dark"],
    },
    darkMode: ['class', '[data-theme="dark"]'],
    light: {
      ...require("daisyui/src/theming/themes")["light"],
      primary: "blue",
      secondary: "gray-dark",
    },
    dark: {
      ...require("daisyui/src/theming/themes")["dark"],
      primary: "blue",
      secondary: "gray-light",
    },
    theme: {
      colors: {
        'primary': '#325FF4',
        'secondary': "#424242",
        'blue': '#325FF4',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'red': '#ff4343',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#424242',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      
      }
    },
  }
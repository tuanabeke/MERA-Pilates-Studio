/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#E9E3D7',
          50: '#FBF9F6',
          100: '#F4EFE7',
          200: '#E9E3D7',
          300: '#DDD5C4',
          400: '#CFC3AE',
        },
        sand: {
          DEFAULT: '#C9BDA9',
          100: '#E2DBD0',
          200: '#D6CBC0',
          300: '#C9BDA9',
          400: '#B8A992',
          500: '#A19179',
        },
        sage: {
          DEFAULT: '#92947A',
          100: '#D7D9CA',
          200: '#B4B7A0',
          300: '#92947A',
          400: '#797C62',
          500: '#5E614C',
        },
        forest: {
          DEFAULT: '#1B2419',
          700: '#2B3928',
          800: '#212D1F',
          900: '#151D14',
          950: '#0C120B',
        },
        olive: {
          DEFAULT: '#555B47',
          100: '#9DA48B',
          200: '#788165',
          300: '#555B47',
          400: '#434836',
          500: '#323727',
          800: '#23271C',
          900: '#171A12',
        },
        clay: {
          DEFAULT: '#A97960',
          100: '#EAD7CD',
          200: '#CEAC9A',
          300: '#A97960',
          400: '#8F6149',
          500: '#724B36',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      borderRadius: {
        'editorial': '2px',
      }
    },
  },
  plugins: [],
}

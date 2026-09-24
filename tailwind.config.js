/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rock: {
          950: '#07080a',
          900: '#0c0e12',
          850: '#11141a',
          800: '#161922',
          700: '#222736',
          600: '#343c50',
          accent: '#FF7A00',
          gold: '#F59E0B',
          cyan: '#0284C7',
          steel: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

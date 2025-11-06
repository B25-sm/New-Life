/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0F2C',
          light: '#1A2342',
          dark: '#050811',
        },
        accent: {
          DEFAULT: '#FFD100',
          light: '#FFE066',
          dark: '#CCAA00',
        },
        support: {
          DEFAULT: '#E5E5E5',
          light: '#F5F5F5',
          dark: '#D5D5D5',
        },
      },
    },
  },
  plugins: [],
}


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif']
      },
      screens: {
        'w-375': '375px',
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        color:{
          grey: 'var(--grey)',
          navy: 'var(--navy)',
          green: 'var(--green)',
          salmon: 'var(--salmon)',
        }
      },
      backgroundColor:{
        color:{
          grey: 'var(--grey)',
          navy: 'var(--navy)',
          green: 'var(--green)',
          salmon: 'var(--salmon)',
        }
      }
    },
  },
  plugins: [],
}
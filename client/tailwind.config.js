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
          salmon: 'var(--salmon)',
          khaki: 'var(--khaki)',
        }
      },
      backgroundColor:{
        color:{
          grey: 'var(--grey)',
          navy: 'var(--navy)',
          salmon: 'var(--salmon)',
       
        }
      }
    },
  },
  plugins: [],
}
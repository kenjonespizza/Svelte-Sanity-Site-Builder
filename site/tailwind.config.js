module.exports = {
  purge: [
    './src/**/*.svelte',
  ],
  theme: {
    extend: {
      color: {
        primary: '#5850ec'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ]
}

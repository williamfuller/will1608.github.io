module.exports = {
  content: [
    './_includes/*.html',
    './_layouts/*.html',
    './_posts/*.{html, md}',
    './_pages/*.{html, md}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          500: '#013048',
        },
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
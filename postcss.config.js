module.exports = {
  plugins: [
    require('autoprefixer'),
    (require('postcss-nested').default || require('postcss-nested'))
  ]
};
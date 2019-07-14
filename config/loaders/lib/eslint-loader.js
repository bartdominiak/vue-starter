const eslintLoader = {
  enforce: 'pre',
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/
}

module.exports = eslintLoader

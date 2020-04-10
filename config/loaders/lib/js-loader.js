const jsLoader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  use: 'babel-loader'
}

module.exports = jsLoader

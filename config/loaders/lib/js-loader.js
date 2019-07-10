const jsLoader = {
  test: /\.js?$/,
  use: 'babel-loader',
  exclude: /node_modules/
}

module.exports = jsLoader

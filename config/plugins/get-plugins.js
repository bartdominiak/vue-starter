const webpack = require('webpack'),
      VueLoaderPlugin = require('vue-loader/lib/plugin'),
      HtmlWebpackPlugin = require('./lib/html-webpack-plugin')

const createPlugins = isDev => {
  return [].concat(
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    HtmlWebpackPlugin()
  )
}

module.exports = createPlugins

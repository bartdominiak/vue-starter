const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const createPlugins = (isDev) => {
  const plugins = [].concat(
    new CopyWebpackPlugin([ { from: 'public' } ]),
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    require('./lib/html-webpack-plugin')()
  )

  if (isDev) {
    plugins.push(new CleanWebpackPlugin())
  }

  return plugins
}

module.exports = createPlugins

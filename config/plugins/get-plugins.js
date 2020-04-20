const webpack = require('webpack')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolveApp = require('../utils/resolve-app')

const createPlugins = (isDev) => {
  const plugins = [].concat(
    new CopyWebpackPlugin([ { from: 'public' } ]),
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolveApp('public/index.html'),
      favicon: resolveApp('public/favicon.ico')
    }),
    new ModuleFederationPlugin({
      name: 'button',
      library: { type: 'var', name: 'button' },
      filename: 'remoteEntry.js',
      exposes: {
         Button: './src/components/Atoms/Button/Button.vue'
      },
      shared: ['vue']
    }),
  )

  if (isDev) {
    plugins.push(new CleanWebpackPlugin())
  }

  return plugins
}

module.exports = createPlugins

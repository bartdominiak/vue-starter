const resolveApp = require('../../helpers/resolve-app'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlPlugin = () => {
  return new HtmlWebpackPlugin(
    { template: resolveApp('src/index.html') }
  )
}

module.exports = HtmlPlugin

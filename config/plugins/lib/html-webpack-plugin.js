const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolveApp = require('../../utils/resolve-app')

const HtmlPlugin = () => new HtmlWebpackPlugin(
  { template: resolveApp('public/index.html') }
)

module.exports = HtmlPlugin

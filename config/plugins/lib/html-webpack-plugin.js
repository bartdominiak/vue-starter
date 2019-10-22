const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolveApp = require('../../../helpers/resolve-app');

const HtmlPlugin = () => new HtmlWebpackPlugin(
  { template: resolveApp('src/index.html') }
);

module.exports = HtmlPlugin;

const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const createPlugins = (isDev) => {
  const plugins = [].concat(
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    require('./lib/html-webpack-plugin')()
  );

  if (isDev) {
    plugins.push(new CleanWebpackPlugin());
    return plugins;
  }

  return plugins;
};

module.exports = createPlugins;

const merge = require('webpack-merge'),
      resolveApp = require('./helpers/resolve-app'),
      getLoaders = require('./loaders/get-loaders'),
      getPlugins = require('./plugins/get-plugins')

module.exports = env => {
  const isDev = env === 'dev' || false
  const baseConfig = {
    entry: resolveApp('src/index.js'),
    output: {
      path: resolveApp('dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: getLoaders(isDev)
    },
    plugins: getPlugins(isDev),
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js',
        '@': resolveApp('src'),
        '~': resolveApp('src')
      }
    }
  }

  return merge(baseConfig, require(`./webpack.config.${env}`))
}

const merge = require('webpack-merge')
const resolveApp = require('./utils/resolve-app')

module.exports = (env) => {
  const isDev = env === 'dev' || false

  const config = {
    mode: isDev ? 'development' : 'production',
    entry: resolveApp('src/index.js'),
    output: {
      path: resolveApp('dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: require('./loaders/get-loaders')(isDev)
    },
    plugins: require('./plugins/get-plugins')(isDev),
    resolve: {
      alias: require('./aliases/get-aliases')()
    }
  }

  if (isDev) {
    const devServer = {
      watch: true,
      devServer: {
        contentBase: resolveApp('dist'),
        compress: true,
        hot: true,
        port: 4000
      }
    }

    return merge(config, devServer)
  }

  return config
}

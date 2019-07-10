const resolveApp = require('./helpers/resolve-app')

module.exports = {
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: resolveApp('dist'),
    compress: true,
    hot: true,
    port: 4000
  }
}

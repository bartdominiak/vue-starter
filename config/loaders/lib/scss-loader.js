const resolveApp = require('../../helpers/resolve-app')

const scssLoader = (isDev) => {
  return {
    test: /\.scss$/,
    use: [
      {
        loader: 'vue-style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDev
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDev,
          includePaths: [
            resolveApp('node_modules/normalize-scss/sass')
          ]
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            resolveApp('src/assets/styles/mixins/_mq.scss'),
            resolveApp('src/assets/styles/_variables.scss')
          ]
        }
      }
    ]
  }
}

module.exports = scssLoader

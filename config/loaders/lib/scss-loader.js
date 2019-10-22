const resolveApp = require('../../../helpers/resolve-app');

const scssLoader = (isDev) => ({
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
      loader: 'postcss-loader',
      options: {
        sourceMap: isDev,
        plugins: [
          require('postcss-import')(),
          require('postcss-url')(),
          require('postcss-preset-env')()
        ],
        order: 'presetEnvAndCssnanoLast'
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: isDev,
        sassOptions: {
          includePaths: [
            resolveApp('node_modules/normalize-scss/sass')
          ]
        }
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
});

module.exports = scssLoader;

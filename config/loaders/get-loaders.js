const vueLoader = require('./lib/vue-loader'),
      jsLoader = require('./lib/js-loader'),
      scssLoader = require('./lib/scss-loader'),
      svgLoader = require('./lib/svg-loader')

const createLoaders = isDev => {
  return [].concat(vueLoader, jsLoader, scssLoader(isDev), svgLoader)
}

module.exports = createLoaders

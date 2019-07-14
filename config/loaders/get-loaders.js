const vueLoader = require('./lib/vue-loader'),
      jsLoader = require('./lib/js-loader'),
      scssLoader = require('./lib/scss-loader'),
      svgLoader = require('./lib/svg-loader'),
      eslintLoader = require('./lib/eslint-loader')

const createLoaders = isDev => {
  let loaders = [].concat(
    vueLoader,
    jsLoader,
    scssLoader(isDev),
    svgLoader
  )

  if (isDev) {
    loaders.push(eslintLoader)
    return loaders
  }
  return loaders
}

module.exports = createLoaders

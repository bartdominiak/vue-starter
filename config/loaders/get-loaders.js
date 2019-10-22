const createLoaders = (isDev) => {
  const loaders = [].concat(
    require('./lib/vue-loader'),
    require('./lib/js-loader'),
    require('./lib/scss-loader')(isDev),
    require('./lib/svg-loader')
  );

  if (isDev) {
    loaders.push(require('./lib/eslint-loader'));
    return loaders;
  }

  return loaders;
};

module.exports = createLoaders;

const createLoaders = isDev => {
  const loaders = [].concat(
    require("./lib/vue-loader"),
    require("./lib/js-loader"),
    require("./lib/scss-loader")(isDev),
    require("./lib/svg-loader"),
    require("./lib/image-loader")
  );

  if (isDev) {
    loaders.push(require("./lib/eslint-loader"));
  }

  return loaders;
};

module.exports = createLoaders;

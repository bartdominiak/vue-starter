const resolveApp = require('../../helpers/resolve-app');

const createAliases = () => ({
  vue$: 'vue/dist/vue.runtime.esm.js',
  '@': resolveApp('src'),
  '~': resolveApp('src')
});

module.exports = createAliases;

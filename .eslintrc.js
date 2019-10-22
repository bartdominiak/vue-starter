const aliases = require('./config/aliases/get-aliases')();

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      alias: Object.entries(aliases)
    }
  },
  rules: {
    'comma-dangle': 0
  }
};

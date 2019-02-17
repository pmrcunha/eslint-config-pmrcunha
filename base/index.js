module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
  env: {
    jest: true,
    browser: true
  },
};

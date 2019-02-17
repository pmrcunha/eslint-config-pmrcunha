module.exports = {
  extends: [
    './rules/babel',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    'eslint-config-prettier',
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
    browser: true,
  },
};

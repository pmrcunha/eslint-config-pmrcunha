module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y',
    '../base/rules/strict',
    '../base',
  ].map(require.resolve),
  rules: {},
};

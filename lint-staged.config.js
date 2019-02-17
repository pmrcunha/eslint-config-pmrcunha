module.exports = {
  linters: {
    '**/*.+(js|ts|json|yml|yaml|md|mdx)': ['prettier --write', 'git add'],
  },
};

module.exports = {
  rules: {
    'color-no-invalid-hex': true,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      // postcss-scss needed installed in root of project
      customSyntax: 'postcss-scss',
    },
  ],
};

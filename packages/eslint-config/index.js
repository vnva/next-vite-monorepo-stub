module.exports = {
  extends: [
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:css-import-order/recommended',
  ],
  plugins: ['prettier', 'import', 'css-import-order'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, semi: true, printWidth: 100 }],
    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: '@packages/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
};

module.exports = {
  extends: ['turbo', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'import'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, semi: true, printWidth: 100 }],
    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};

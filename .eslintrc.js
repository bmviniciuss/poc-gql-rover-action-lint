module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: [
        'react',
      ],
      rules: {
        'react/react-in-jsx-scope': 0,
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/no-duplicate-fields': 'error',
      },
    },
  ],
};

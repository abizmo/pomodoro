module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard',
    'eslint-config-prettier',
    'prettier',
    'plugin:security/recommended',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
  ],
  globals: {
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'testing-library',
    'jest-dom',
    'security',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

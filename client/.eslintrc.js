module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
  },
}

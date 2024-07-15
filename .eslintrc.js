module.exports = {
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
      'prettier/prettier': ['error'],
      // Other rules can be added here
  },
  settings: {
      react: {
          version: 'detect'
      }
  },
  env: {
      'react-native/react-native': true
  }
};
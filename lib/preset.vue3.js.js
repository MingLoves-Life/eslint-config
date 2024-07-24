module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    './lib/eslint.standard.js',
    // './lib/eslint.ts.js',
    './lib/eslint.prettier.js',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
  },
};

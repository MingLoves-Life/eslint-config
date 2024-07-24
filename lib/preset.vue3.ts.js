module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    './lib/eslint.standard.js',
    './lib/eslint.ts.js',
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
    'constructor-super': 'off',
    'getter-return': 'off',
    //  copy from ts plugin
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-redeclare': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'valid-typeof': 'off', // ts(2367)
  },
};

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],

  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
  },
};

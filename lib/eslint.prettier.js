module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        bracketSameLine: false,
        vueIndentScriptAndStyle: false,
        singleAttributePerLine: false,
      },
      { usePrettierrc: false },
    ],
  },
};

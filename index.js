const vue3P = require('./lib/preset.vue3');
const nodejs = require('./lib/preset.nodejs');
const lib = require('./lib/preset.lib');
const vueTs = require('./lib/preset.vue3.ts');
const vueJs = require('./lib/preset.vue3.js.js');
const json = require('./lib/eslint.json.js');
const prettier = require('./lib/eslint.prettier');
const ts = require('./lib/eslint.ts');
const standard = require('./lib/eslint.standard');
const html = require('./lib/eslint.html');

module.exports = {
  configs: {
    'preset-react': require('./lib/preset.react'),
    'preset-vue3ts': vueTs,
    'preset-vue3js': vueJs,
    'preset-lib': lib,
    'preset-node': nodejs,
    'preset-vue3P': vue3P, // vue 3 项目
    'preset-vue3': vue3P, // vue 3 项目
    'config-prettier': prettier,
    'config-ts': ts,
    'config-standard': standard,
    'config-json': json,
    'config-html': html,
  },
};

module.exports.extendPrettier = (obj = {}) => {
  return {
    'prettier/prettier': [
      'error',
      Object.assign(
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
        obj
      ),
      { usePrettierrc: false },
    ],
  };
};

module.exports = {
  plugins: ['json-format'],
  settings: {
    'json/sort-package-json': 'standard',
    'json/ignore-files': ['**/package-lock.json'],
    'json/json-with-comments-files': ['**/tsconfig.json', '.vscode/**'],
  },
  // excludedFiles: ['src/**/*'],
  rules: {},
};

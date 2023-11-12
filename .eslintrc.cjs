/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@vue/eslint-config-prettier/skip-formatting',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/strongly-recommended',
    'prettier'
  ],
  env: {
    node: true,
    commonjs: true
  },
  globals: {
    process: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier'],
  rules: {
    'vue/no-multiple-template-root': 0,
    'prettier/prettier': 'error'
  }
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'max-len': 0,
    'no-trailing-spaces': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'no-empty-function': 0,
    'no-empty': 0,
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0,
    'default-case': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    camelcase: 0,
    'guard-for-in': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    indent: 0,
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    endOfLine: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: { legacyDecorators: true }
  }
};

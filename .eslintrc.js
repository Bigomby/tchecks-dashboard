module.exports = {
  root: true,

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/recommended'],

  plugins: ['import'],

  rules: {
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],

    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'global-require': 0,
    'function-paren-newline': 0,
    'no-empty-pattern': 0,
    quotes: ['error', 'single'],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-debugger': 'warn',
    'no-console': 'warn',
  },
};

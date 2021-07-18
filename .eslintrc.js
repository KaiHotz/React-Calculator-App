const path = require('path');
const prettierConfig = require('./prettier.config');

module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:import/errors', 'prettier'],
  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'newline-before-return': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
      },
    ],
    'no-return-assign': 0,
    'no-use-before-define': 'off', // we use @typescript-eslint/no-use-before-define instead
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    // React
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'react/no-redundant-should-component-update': 'error',
    'react/no-deprecated': 'error',
    'react/no-access-state-in-setstate': 'error',

    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Imports
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.[jt]s', '**/*.spec.[jt]s', '**/*.test.[jt]sx', '**/*.spec.[jt]sx', '**/*.story.[jt]sx'],
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        pattern: {
          json: 'always',
        },
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['index', 'parent', 'sibling']],
      },
    ],
    'import/no-cycle': 'error',
    // ES6+
    'constructor-super': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',

    // Best practices
    'prefer-destructuring': 0,
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-caller': 'error',
    'no-template-curly-in-string': 'error',
    'array-callback-return': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    eqeqeq: ['error', 'always'],
    'no-lone-blocks': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    yoda: 'error',
    'no-shadow': 'off', // we use @typescript-eslint/no-shadow instead
    'no-undef-init': 'error',
    'no-nested-ternary': 0,
    'no-unneeded-ternary': 'error',
    camelcase: 0,
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],

    'no-debugger': ['warn'],
  },
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx', '*.test.tsx', '*.test.ts'],
      rules: {
        'max-nested-callbacks': ['error', 7],
        'import/no-restricted-paths': 0,
        'import/namespace': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-floating-promises': 'off', // we have valid use-cases for that
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', path.resolve('./src')],
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
          },
        },
      },
    },
  },
};

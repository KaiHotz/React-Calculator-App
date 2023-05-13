module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  semi: true,
  tabWidth: 2,
  printWidth: 140,
  arrowParens: 'always',
  quoteProps: 'preserve',
  trailingComma: 'all',
  overrides: [
    {
      files: '*.jsx',
      options: {
        printWidth: 120,
      },
    },
    {
      files: '*.tsx',
      options: {
        printWidth: 120,
      },
    },
  ],
};

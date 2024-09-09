import globals from 'globals';

export default [
  { files: ['**/*.{js,ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];

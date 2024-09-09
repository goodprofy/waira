export default [
  { files: ['**/*.{js,ts}'] },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];

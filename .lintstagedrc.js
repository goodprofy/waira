export default {
  '*': (filenames) =>
    filenames.map(
      (filename) => `prettier --ignore-unknown --write '${filename}'`,
    ),

  '*.{ts,tsx}': (filenames) =>
    filenames.map((filename) => `tsc --noEmit '${filename}'`),

  '*.{js,ts,tsx}': (filenames) =>
    filenames.map((filename) => `eslint --fix '${filename}'`),
};

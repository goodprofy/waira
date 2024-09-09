export default {
  '**/*.{js,jsx,ts,tsx,json,css,scss,md,html,yml,yaml}': (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
};

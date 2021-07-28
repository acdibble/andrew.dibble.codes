module.exports = {
  '*.ts{,x}': [
    () => 'npx tsc -p tsconfig.json --noEmit',
    'eslint --cache --fix',
    'prettier --write',
  ],
};

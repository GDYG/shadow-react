/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
      project: ['./tsconfig.eslint.json'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    extraFileExtensions: ['.html'],
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // indent: ['error', 'tab'],
    quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
}

module.exports = {
  extends: ['eslint:recommended', '@remix-run/eslint-config', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['@inthepocket/eslint-config-web'],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: 'tsconfig.json',
      },
      rules: {
        '@typescript-eslint/method-signature-style': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    },
  ],
  ignorePatterns: ['remix.config.js', 'postcss.config.js', '.eslintrc.js'],
};

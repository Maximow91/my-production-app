module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react','react-hooks','prod-app-plugin'],
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts",'updateImports.ts'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/prefer-nullish-coalescing": 'off',
    'react/react-in-jsx-scope': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    indent: 'off',
    '@typescript-eslint/indent': [2, 4],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-misused-promises': 'warn',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps":"error", // Checks effect dependencies
    'react/display-name': 'off',
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-dynamic-delete":"off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "prod-app-plugin/path-checker":["error",{alias:'@'}],
    "prod-app-plugin/public-api-imports":["error",{alias:'@'}]
  },
};

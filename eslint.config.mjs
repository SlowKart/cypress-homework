// eslint.config.mjs

import js from '@eslint/js';
import cypressPlugin from 'eslint-plugin-cypress';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // **Base Configuration for JavaScript Files**
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Include standard browser and Node.js globals
        ...globals.browser,
        ...globals.node,
        // Include Cypress globals
        ...cypressPlugin.environments.globals,
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,
      // Cypress recommended rules
      ...cypressPlugin.configs.recommended.rules,
    },
  },

  // **Configuration for TypeScript Files**
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...cypressPlugin.environments.globals,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      cypress: cypressPlugin,
    },
    rules: {
      // TypeScript ESLint recommended rules
      ...typescriptPlugin.configs.recommended.rules,
      // Cypress recommended rules
      ...cypressPlugin.configs.recommended.rules,
    },
  },
];

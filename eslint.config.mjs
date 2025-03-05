import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['dist', 'node_modules'] },
  { languageOptions: { globals: globals.browser } },
  { rules:
    {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  stylistic.configs.customize({
    'semi': true,
    'quotes': 'single',
    'blockSpacing': { before: 1, after: 1 },
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  }),
];

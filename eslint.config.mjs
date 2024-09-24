import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['**/*', 'tools/**'],
    plugins: ['@nx'],
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        rules: {
          '@nx/enforce-module-boundaries': [
            'error',
            {
              enforceBuildableLibDependency: true,
              allow: [],
              depConstraints: [
                {
                  sourceTag: '*',
                  onlyDependOnLibsWithTags: ['*'],
                },
              ],
            },
          ],
        },
      },
      {
        files: ['*.ts', '*.tsx'],
        extends: ['plugin:@nx/typescript'],
        rules: {
          '@typescript-eslint/no-extra-semi': 'error',
          'no-extra-semi': 'off',
        },
      },
      {
        files: ['*.js', '*.jsx'],
        extends: ['plugin:@nx/javascript'],
        rules: {
          '@typescript-eslint/no-extra-semi': 'error',
          'no-extra-semi': 'off',
        },
      },
    ],
  },
];

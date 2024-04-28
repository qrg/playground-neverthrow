const base = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],
  settings: {
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // off
    'no-console': 'off',
    'import/prefer-default-export': 'off',

    // error
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
}

const ts = {
  files: ['**/*.ts', '**/*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...base.paraserOptions,
    project: './tsconfig.eslint.json',
  },
  plugins: [...base.plugins, '@typescript-eslint'],
  extends: [
    ...base.extends,
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.eslint.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    ...base.rules,
    // off
    '@typescript-eslint/no-explicit-any': 'off',

    // error
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: [
          'strictCamelCase',
          'StrictPascalCase',
          'snake_case',
          'UPPER_CASE',
        ],
      },
    ],
  },
}

const test = {
  files: ['**/*.test.ts', '**/*.test.tsx'],
  plugins: [...ts.plugins, 'vitest'],
  extends: [...ts.extends, 'plugin:vitest/recommended'],
}

module.exports = {
  ...base,
  extends: [...base.extends, 'prettier'],
  overrides: [
    {
      ...ts,
      extends: [...ts.extends, 'prettier'],
    },
    {
      ...test,
      extends: [...test.extends, 'prettier'],
    },
  ],
}

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      tseslint.configs.recommendedTypeChecked,
      prettier
    ],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // eslint-plugin-unused-importsで未使用変数を検出するため、@typescript-eslint/no-unused-varsを無効化
      "@typescript-eslint/no-unused-vars": "off",
      // eslint-plugin-unused-importsで未使用インポートを検出するため、unused-imports/no-unused-importsを有効化
      "unused-imports/no-unused-imports": "error",
      // eslint-plugin-unused-importsで未使用変数を検出する設定
      "unused-imports/no-unused-vars": [
            "warn",
            {
                "args": "after-used",
                "argsIgnorePattern": "^_",
                "vars": "all",
                "varsIgnorePattern": "^_"
            },
        ]
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

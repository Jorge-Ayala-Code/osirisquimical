import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
  },

  js.configs.recommended,

  ...astro.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'warn',
      'astro/no-set-html-directive': 'warn',
    },
  },

  prettier,
]

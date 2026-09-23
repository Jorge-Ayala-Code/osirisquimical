// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // CONFIGURACIÓN DE IDIOMAS (i18n)
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // false significa: español en / y inglés en /en/
      prefixDefaultLocale: false 
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
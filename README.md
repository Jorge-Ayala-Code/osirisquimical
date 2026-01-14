# 🧪 Horus Chemical

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Sitio web corporativo desarrollado con **Astro** utilizando Static Site Generation (**SSG**). El proyecto está enfocado en **alto rendimiento, SEO técnico, accesibilidad (a11y) y escalabilidad**, siguiendo estrictas buenas prácticas de desarrollo y documentación.

## Tabla de Contenidos

1. [Objetivo del Proyecto](#objetivo-del-proyecto)
2. [Stack Técnico](#stack-técnico)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Instalación y Setup](#instalación-y-setup)
5. [Content Collections](#content-collections)
6. [Estándares de Desarrollo](#estándares-de-desarrollo)
   - [SEO y Accesibilidad](#seo-y-accesibilidad)
   - [Performance](#performance)
   - [Convenciones de Código](#convenciones-de-código)
7. [Flujo de Trabajo (Git & Jira)](#flujo-de-trabajo)
8. [Uso de IA](#uso-de-ia)

## Objetivo del Proyecto

Diseñar, desarrollar y desplegar la nueva página web oficial de **Horus Chemical** desde cero. Se busca replantear completamente el diseño, estructura, contenido y experiencia de usuario (UX), tomando como referencia el sitio actual pero implementando una arquitectura moderna y optimizada.

## Stack Técnico

| Categoría                | Tecnología / Herramienta                |
| :----------------------- | :-------------------------------------- |
| **Framework**            | Astro (SSG – Static Site Generation)    |
| **Lenguaje**             | TypeScript (Obligatorio)                |
| **Estilos**              | Tailwind CSS                            |
| **Gestión de Contenido** | Astro Content Collections (Zod Schemas) |
| **Control de Versiones** | Git / Bitbucket                         |
| **Gestión de Tareas**    | Jira                                    |
| **Editores Sugeridos**   | VS Code / Cursor / Antigravity          |
| **Despliegue**           | Vercel (Hobby/Pro Plan)                 |

## Estructura del Proyecto

```bash
src/
├── components/           # Componentes UI reutilizables
│   ├── ui/               # Átomos: Botones, inputs, badges
│   ├── layout/           # Organismos: Header, Footer, Navbar
│   └── common/           # Cards, Modales genéricos
├── layouts/              # Plantillas maestras (MainLayout, AuthLayout)
├── pages/                # Rutas del sitio (File-based routing)
├── content/              # Fuente de verdad (Markdown/MDX)
│   ├── config.ts         # Definición de esquemas Zod
│   └── products/         # Colección de productos
├── assets/               # Imágenes, fuentes, íconos (procesados por Astro)
├── styles/               # CSS global y custom Tailwind layers
├── utils/                # Funciones helper y lógica de negocio
└── config/               # Constantes del sitio (SEO default, metadata)
```

## Instalación y Setup

### Requisitos Previos

- **Node.js**: v18.14.1 o superior.
- **Gestor de paquetes**: `npm` o `pnpm` (recomendado).

### Pasos

1.  **Clonar repositorio**
    ```bash
    git clone git@bitbucket.org:horuschemical/horuschemical.mx.git
    cd horuschemical.mx
    ```

2.  **Instalar dependencias**
    ```bash
    pnpm install
    # o
    npm install
    ```

3.  **Ejecutar entorno de desarrollo**
    ```bash
    pnpm run dev
    ```
    > El proyecto estará disponible en: [http://localhost:4321](http://localhost:4321)

### Scripts Disponibles

| Comando                | Descripción                                                     |
| :--------------------- | :-------------------------------------------------------------- |
| `pnpm install`         | Instala dependencias                                            |
| `pnpm run dev`         | Inicia el servidor de desarrollo local.                         |
| `pnpm run build`       | Genera el build de producción (carpeta `/dist`).                |
| `pnpm run preview`     | Sirve la carpeta `/dist` localmente para probar el build final.  |
| `pnpm astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`            |
| `pnpm astro -- --help` | Obtiene ayuda para utilizar Astro CLI                           |
| `pnpm lint`            | Ejecuta ESLint sobre el código fuente                           |
| `pnpm format`          | Aplica formato automático con Prettier                          |

## Content Collections

La gestión de datos (productos, blog, etc.) se realiza estrictamente mediante **Content Collections**.

**Reglas:**

- Todo el contenido estático debe residir en `/src/content`.
- **Prohibido hardcodear** información de productos directamente en las páginas `.astro`.
- Definir esquemas estrictos con **Zod** en `src/content/config.ts`.

**Ejemplo de Schema:**

```typescript
import { defineCollection, z } from 'astro:content'

const productsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string().max(160),
    category: z.enum(['Oil', 'Degreaser', 'Phosphate']),
    isAvailable: z.boolean().default(true),
    image: z.string(),
  }),
})

export const collections = {
  products: productsCollection,
}
```

# Estándares de Desarrollo

## ESLint y Prettier

Este proyecto utiliza:

- **ESLint v9 con Flat Config**
- **Prettier** para formateo de código
- Integración entre ambos para evitar conflictos
- Toda la configuración está en `eslint.config.js`

## SEO y Accesibilidad

- **Meta Tags**: Title y Meta Description únicos por página.
- **Semántica**: Uso correcto de `<main>`, `<section>`, `<article>`, `<h1>`-`<h6>`.
- **Robots & Sitemap**: Configuración automática mediante plugins de Astro.
- **Accesibilidad (a11y)**:
  - Navegación completa por teclado y uso de atributos `aria-label`.
  - **Regla**: Si Lighthouse reporta accesibilidad < 90, la tarea no está terminada.

## Performance

- **Objetivo**: Lighthouse (Desktop) ≥ 95 en todas las métricas.
- **Imágenes**: Uso obligatorio de `astro:assets` para optimización automática.
- **Zero JS philosophy**: Minimizar el uso de directivas `client:*` para mantener el bundle ligero.

## Convenciones de Código

- **Componentes**: Cumplir con el Principio de Responsabilidad Única.
- **Estilos**: Uso de Tailwind CSS (evitar estilos inline y el uso excesivo de `@apply`).

# Flujo de Trabajo

### Obligatorio

- Usar **pnpm** (no npm, no yarn)
- Ejecutar `pnpm lint` y `pnpm format` antes de subir cambios
- Mantener el formato definido por Prettier
- Respetar la estructura de carpetas

### No permitido

- Subir código sin pasar lint
- Modificar configuración de ESLint/Prettier sin autorización
- Hacer push directo a `master` o a `develop`

## Git Flow

- `master` → 🔒 Producción.
- `develop` → 🚧 Integración.

## Commits convencionales

Formato de mensajes requerido:

- `[feat]: ...`
- `[fix]: ...`
- `[chore]: ...`
- `[style]: ...`
- `[refactor]: ...`

Para más información consultar [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)

# 🤖 Uso de IA

El uso de asistentes está permitido bajo las siguientes condiciones:

- **Permitido**: Refactorización de funciones, generación de boilerplate, mejora de textos y explicación de errores técnicos.
- **No Permitido**: Copiar código sin entender su funcionamiento, subir código generado sin revisión manual previa o filtrar datos sensibles/credenciales de la empresa.

---

> Desarrollado por el equipo de Tecnología de **Horus Chemical**.

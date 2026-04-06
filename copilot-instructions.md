# Copilot Instructions

Este archivo es para dar contexto explícito a asistentes de código AI (GitHub Copilot / Copilot Chat / otros bots de IA) sobre este repositorio.

## Proyecto
- Framework: Next.js 16.2.1 (App Router)
- Lenguaje: JavaScript (JSX)
- Base de datos: PostgreSQL + Prisma 7
- Rutas principales:
  - `/usuarios` (gestión de usuarios con formulario y listado)
  - `/posts` (modelos de publicaciones)
  - `/tienda` (sección tienda/categorías)

## Componentes importantes
- `app/usuarios/page.jsx`: CRUD de usuarios via `prisma.user` y `server actions`.
- `lib/prisma.js`: instancia global de `PrismaClient` con adaptador PG.
- `prisma/schema/*.prisma`: modelos `User`, `Post`, `Profile`.

## Comandos útiles
- `npm run dev` -> desarrollar local
- `npm run build` -> producción
- `npx prisma generate` -> regenerar cliente

## Meta
- `DATABASE_URL` en `.env` apunta a `postgresql://...`
- `next.config.mjs`, `eslint.config.mjs`, `postcss.config.mjs` con configuración del stack

## Cómo actualizar
1. Edita este archivo con tu nueva funcionalidad, rutas, modelos o contratos.
2. Guarda y haz commit: `git add copilot-instructions.md && git commit -m "Update copilot context"`.
3. Si agregas un nuevo feature (API, ruta, DB), describe brevemente aquí para que el asistente entienda rápidamente.

## Notas para IA
- Lee primero la sección "Proyecto" y "Componentes importantes." 
- Si hay cambios en el ORM, actualiza también la sección de Prisma.
- Usa esta fuente antes de correr análisis automatizado de código o generar nuevos endpoints.

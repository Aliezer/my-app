# Next Proyect JavaScript

Proyecto de ejemplo con Next.js + App Router + Prisma 7 + PostgreSQL/SqlServer.

## 🚀 Guía de instalación desde Git

1. Clona el repositorio:

```bash
git clone <url-del-repositorio> next-proyect-javascript
cd next-proyect-javascript
```

2. Instala dependencias:

```bash
npm install
```

> Nota: si el paquete `prisma` no está instalado o lo prefieres explícito,
> puedes ejecutar:
>
> ```bash
> npm install prisma --save-dev
> npm install @prisma/client
> ```

3. Copia el ejemplo de variables de entorno (si existe):

```bash
copy .env.example .env
```

4. Ajusta `.env`:

- Para PostgreSQL:
  `DATABASE_URL="postgresql://postgres:123@localhost:5432/Web?schema=public"`
- Para SQL Server:
  `DATABASE_URL="sqlserver://localhost:1433;database=Web;user=sa;password=TuPassword123;encrypt=false"`

5. Genera Prisma y aplica migraciones:

```bash
npx prisma generate
npx prisma migrate dev
```

6. Inicia la aplicación:

```bash
npm run dev
```

7. Abre en navegador:

`http://localhost:3000`

## 🧰 Tecnologías

- Next.js 16.2.1
- React 19.2.4
- Tailwind CSS 4
- Prisma 7
- PostgreSQL
- Node 18+ (recomendado)

## 🗂 Estructura clave

- `app/page.jsx` - página inicial.
- `app/usuarios/page.jsx` - CRUD de usuarios con `prisma.user`, server action y revalidación.
- `lib/prisma.js` - client Prisma global.
- `prisma/schema/*.prisma` - modelos: `User`, `Post`, `Profile`.
- `.env` - `DATABASE_URL`.
- `copilot-instructions.md` - contexto IA para asistente/copilot.

## ⚙️ Configuración de la BD

### Conectar con PostgreSQL (por defecto)

1. Instala y arranca PostgreSQL.
2. En `.env`:

```ini
DATABASE_URL="postgresql://postgres:123@localhost:5432/Web?schema=public"
```

3. En `prisma/schema/schema.prisma` (provider):

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

4. Genera client y aplica migraciones:

```bash
npx prisma generate
npx prisma migrate dev
```

---

### Cambiar a SQL Server

1. Instala y arranca Microsoft SQL Server (o SQL Server Docker).
2. En `.env` actualiza:

```ini
DATABASE_URL="sqlserver://localhost:1433;database=Web;user=sa;password=TuPassword123;encrypt=false"
```

3. En `prisma/schema/schema.prisma` (provider):

```prisma
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
```

4. Eliminar migraciones si cambias proveedor, luego recrear (según tu flujo):

```bash
npx prisma migrate reset --force
npx prisma generate
npx prisma migrate dev
```

> Nota: Prisma no permite mezclar providers en el mismo `schema.prisma`; cambia el `provider` y vuelve a generar el cliente.

---

### Dependencias por proveedor

Prisma 7 usa adaptadores específicos de base de datos. Asegúrate de instalar solo el adaptador y driver del proveedor activo para evitar conflictos.

- PostgreSQL:
  - `@prisma/adapter-pg`
  - `pg`
  - `@prisma/client`, `prisma`

- SQL Server:
  - `@prisma/adapter-sqlserver` (o el nombre oficial del adaptador en tu versión de Prisma 7; podría ser `@prisma/adapter-mssql`)
  - `mssql`
  - `@prisma/client`, `prisma`

Ejemplos:

```bash
# Para PostgreSQL
npm install @prisma/adapter-pg pg
npm uninstall @prisma/adapter-sqlserver mssql

# Para SQL Server
npm install @prisma/adapter-sqlserver mssql
npm uninstall @prisma/adapter-pg pg
```

> Tras cambiar dependencias:
> - `npx prisma generate`
> - `npx prisma migrate dev`

---

### Cambiar entre PostgreSQL y SQL Server

- Modifica `DATABASE_URL` y `datasource.db.provider` según el DB que uses.
- Ejecuta:
  - `npx prisma generate`
  - `npx prisma migrate dev` (o `npx prisma migrate reset --force` si cambias provider)

- Verifica `lib/prisma.js` sigue usando `process.env.DATABASE_URL`.

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

- Abre: `http://localhost:3000`
- Usuarios: `http://localhost:3000/usuarios`

## 🛠 Comandos

- `npm run dev` - iniciar dev server
- `npm run build` - build de producción
- `npm start` - arrancar app en producción
- `npx prisma generate` - regenerar client Prisma
- `npx prisma migrate dev` - aplicar migraciones

## 🧩 Atención Prisma 7

`prisma/schema/schema.prisma` NO debe tener `url = env("DATABASE_URL")`.
La conexión se establece en `lib/prisma.js` con adaptador PostgreSQL y `process.env.DATABASE_URL`.

## 🧠 Copilot / IA

- Lee `copilot-instructions.md` para contexto de busqueda rápida.
- Comprueba:
  - stack de rutas
  - modelos Prisma
  - acciones server y revalidación en `app/usuarios/page.jsx`

## 🔁 Actualizar README

1. Añade nuevas rutas/componentes en "Estructura clave".
2. Ajusta `Tecnologías` y dependencias si cambias versiones.
3. Guarda + commit:

```bash
git add README.md
git commit -m "Actualiza README con la nueva ruta X"
```

---

## 📌 Nota final

Si te da error en `/usuarios`, valida que PostgreSQL esté activo y el `.env` correcto, revisa `lib/prisma.js` y haz `npx prisma generate` again.

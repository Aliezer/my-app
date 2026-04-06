import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema', 
  
  migrations: {
    path: 'prisma/migrations',
  },
  
  // AQUÍ ES DONDE VA LA CONEXIÓN AHORA
  datasource: {
    url: env('DATABASE_URL'),
  },
})
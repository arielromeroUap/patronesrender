// Carga las variables de entorno del archivo .env
require('dotenv').config();

// En CommonJS usamos module.exports en lugar de export default
module.exports = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Accedemos a la URL de conexión de Supabase
    url: process.env.DATABASE_URL,
  },
};
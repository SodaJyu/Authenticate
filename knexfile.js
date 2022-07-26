require("dotenv").config({
    path: "./.env",
  });

  module.exports = {
    client: "pg",
    connection: process.env.DATABASE_URL || {
    PORT: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
  }
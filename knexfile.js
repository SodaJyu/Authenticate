require("dotenv").config({
    path: "./.env",
  });

  module.exports = {
    PORT: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
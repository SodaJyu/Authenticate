require("dotenv").config({
    path: "./.env",
  });

  module.exports = {
    PORT: process.env.DB_PORT
  }
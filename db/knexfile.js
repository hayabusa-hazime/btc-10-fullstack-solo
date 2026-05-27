require("dotenv").config("../.env");
module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.POSTGRES_USER || "user",
      database: process.env.POSTGRES_DB || "recorder",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};

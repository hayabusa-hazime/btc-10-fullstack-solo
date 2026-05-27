const knex = require("knex");

require("dotenv").config();
const knexConfig = require("./db/knexfile")[process.env.NODE_ENV];

module.exports = knex(knexConfig);

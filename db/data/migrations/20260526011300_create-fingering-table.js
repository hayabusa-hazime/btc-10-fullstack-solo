/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("fingaring", function (table) {
    table.increments("id").primary();
    table.string("note", 10).notNullable();
    table.integer("octave").notNullable();
    table.integer("hole1").notNullable(); // 親指
    table.boolean("hole2").notNullable();
    table.boolean("hole3").notNullable();
    table.boolean("hole4").notNullable();
    table.boolean("hole5").notNullable();
    table.boolean("hole6").notNullable();
    table.boolean("hole7").notNullable();
    table.boolean("hole8").notNullable();
    table.boolean("hole9").notNullable();
    table.boolean("hole10").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("fingaring");
};

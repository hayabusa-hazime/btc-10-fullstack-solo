/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sheet_music", function (table) {
    table.increments("id").primary();
    table
      .integer("music_id")
      .notNullable()
      .references("music.id")
      .onDelete("CASCADE");
    table.integer("dilay").notNullable();
    table.string("note", 10).notNullable();
    table.integer("octave").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("sheet_music");
};

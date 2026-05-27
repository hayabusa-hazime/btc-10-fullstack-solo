/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("music").del();
  await knex("music").insert([
    { name: "かっこう", BPM: 100 },
    { name: "故郷", BPM: 60 },
  ]);
};

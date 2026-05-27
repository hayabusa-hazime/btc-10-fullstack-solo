const { createSheet_musicRepository } = require("./sheet_music.repository");
const { createSheet_musicService } = require("./sheet_music.service");
const { createSheet_musicController } = require("./sheet_music.controller");

function initSheet_music(knex) {
  const repository = createSheet_musicRepository(knex);
  const service = createSheet_musicService(repository);
  const controller = createSheet_musicController(service);

  return controller;
}

module.exports = { initSheet_music };

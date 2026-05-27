const { createMusicRepository } = require("./music.repository");
const { createMusicService } = require("./music.service");
const { createMusicController } = require("./music.controller");

function initMusic(knex) {
  const repository = createMusicRepository(knex);
  const service = createMusicService(repository);
  const controller = createMusicController(service);

  return controller;
}

module.exports = { initMusic };

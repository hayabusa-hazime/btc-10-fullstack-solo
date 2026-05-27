const express = require("express");
const knex = require("./knex");

const { initMusic } = require("./src/music/index");
const { initFingering } = require("./src/fingering/index");
const { initSheet_music } = require("./src/sheet_music/index");

function buildApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const musicC = initMusic(knex);
  const fingeringC = initFingering(knex);
  const sheet_musicC = initSheet_music(knex);

  app.get("/api/music", musicC.list);
  app.get("/api/fingering", fingeringC.list);
  app.get("/api/sheet_music/:music_id", sheet_musicC.list);

  app.use((req, res) => res.status(404).json({ error: "Not Found" }));

  return app;
}

module.exports = { buildApp };

const { createFingeringRepository } = require("./fingering.repository");
const { createFingeringService } = require("./fingering.service");
const { createFingeringController } = require("./fingering.controller");

function initFingering(knex) {
  const repository = createFingeringRepository(knex);
  const service = createFingeringService(repository);
  const controller = createFingeringController(service);

  return controller;
}

module.exports = { initFingering };

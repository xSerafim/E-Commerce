const adServices = require('../services/ad');

async function findAll(_req, res) {
  const { code, message } = await adServices.findAll();

  return res.status(code).json({ message });
}

async function findById(req, res) {
  const { id } = req.params;
  const { code, message } = await adServices.findById(id);

  return res.status(code).json({ message });
}

async function create(req, res) {
  const { ids } = req.body;
  const { code, message } = await adServices.create(ids);

  return res.status(code).json({ message });
}

module.exports = { findAll, findById, create };

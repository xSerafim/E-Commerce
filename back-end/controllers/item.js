const itemServices = require('../services/item');

async function findAll(_req, res) {
  const { code, message } = await itemServices.findAll();

  return res.status(code).json({ message });
}

async function findById(req, res) {
  const { id } = req.params;
  const { code, message } = await itemServices.findById(id);

  return res.status(code).json({ message });
}

async function create(req, res) {
  const data = req.body;
  const { code, message } = await itemServices.create(data);

  return res.status(code).json({ message });
}

async function destroy(req, res) {
  const { id } = req.params;
  const { code, message } = await itemServices.destroy(id);

  return res.status(code).json({ message });
}

module.exports = { findAll, findById, create, destroy };

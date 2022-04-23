const itemSales = require('../services/sale');

async function create(req, res) {
  const data = req.body;
  const { code, message } = await itemSales.create(data);

  return res.status(code).json(message);
}

async function findAll(_req, res) {
  const { code, message } = await itemSales.findAll();

  return res.status(code).json({ message });
}

async function findById(req, res) {
  const { id } = req.params;
  const { code, message } = await itemSales.findById(id);

  return res.status(code).json({ message });
}

module.exports = { create, findAll, findById };

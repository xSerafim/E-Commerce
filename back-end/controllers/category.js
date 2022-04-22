const categoryServices = require('../services/category');

async function create(req, res) {
  const data = req.body;
  const { code, message } = await categoryServices.create(data);

  return res.status(code).json({ message });
}

async function findAll(_req, res) {
  const { code, categories } = await categoryServices.findAll();

  return res.status(code).json({ categories });
}

async function findAllItemsByCategory(req, res) {
  const { name } = req.params;
  const { code, message } = await categoryServices.findAllItemsByCategory(name);

  return res.status(code).json({ message });
}

module.exports = { create, findAll, findAllItemsByCategory };

const supplyServices = require('../services/supply');

async function update(req, res) {
  const { id } = req.params;
  const { quantity, sum } = req.body;
  const { code, message } = await supplyServices.update(id, quantity, sum);

  return res.status(code).json({ message });
}

async function findAll(_req, res) {
  const { code, message } = await supplyServices.findAll();

  return res.status(code).json({ message });
}

async function findById(req, res) {
  const { id } = req.params;
  const { code, message } = await supplyServices.findById(id);

  return res.status(code).json({ message });
}

module.exports = { update, findAll, findById };

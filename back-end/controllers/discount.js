const discountServices = require('../services/discount');

async function create(req, res) {
  const data = req.body;
  const { code, message } = await discountServices.create(data);

  return res.status(code).json({ message });
}

async function findAll(_req, res) {
  const { code, message } = await discountServices.findAll();

  return res.status(code).json({ message });
}

async function findByCoupon(req, res) {
  const { coupon } = req.params;
  const { code, message } = await discountServices.findByCoupon(coupon);

  return res.status(code).json({ message });
}

async function update(req, res) {
  const { coupon } = req.params;
  const data = req.body;
  const { code, message } = await discountServices.update(data, coupon);

  return res.status(code).json({ message });
}

module.exports = { create, findAll, findByCoupon, update };

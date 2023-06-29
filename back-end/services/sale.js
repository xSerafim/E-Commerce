const { Sale } = require('../models');
const supplyServices = require('./supply');
const status = require('../utils/requestStatus');
const server = require('../utils/serverErrorHandler');

function hasSupplies(sales, items) {
  return sales.map(({ quantity }, i) =>
    supplyServices.calculateNewQuantity(
      false,
      items[i].message.quantity,
      quantity
    )
  );
}

async function create({ sales, totalPrice }, userId) {
  const items = await Promise.all(
    sales.map(({ itemId }) => supplyServices.findById(itemId))
  );

  if (items.some(({ code }) => code === status.BAD_REQUEST))
    return { code: status.BAD_REQUEST, message: 'Item doesn"t exists' };

  if (hasSupplies(sales, items).some((supply) => supply < 0))
    return { code: status.BAD_REQUEST, message: hasSupplies(sales, items) };

  await Promise.all(
    sales.map(({ itemId, quantity }) =>
      supplyServices.update(itemId, quantity, false)
    )
  );

  await Sale.create({ userId, sale: sales, totalPrice });

  return { code: status.CREATED, message: 'New sale registered' };
}

async function findAll() {
  try {
    const sales = await Sale.findAll();

    return { code: status.OK, message: sales };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findById(id) {
  try {
    const sale = await Sale.findOne({ where: { id } });

    if (sale) return { code: status.OK, message: sale };

    return { code: status.BAD_REQUEST, message: 'Sale doesn"t exists' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { create, findAll, findById };

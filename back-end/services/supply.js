const { Supply, Item } = require('../models');
const status = require('../utils/requestStatus');
const server = require('../utils/serverErrorHandler');

function calculateNewQuantity(sum, prevQuantity, newQuantity) {
  if (sum) return prevQuantity + newQuantity;
  return prevQuantity - newQuantity;
}

async function update(id, quantity, sum) {
  try {
    const item = await Supply.findOne({
      where: { item_id: id },
    });

    if (!item) {
      return {
        code: status.BAD_REQUEST,
        message: 'Item doesn"t exist',
      };
    }
    const newQuantity = calculateNewQuantity(sum, item.quantity, quantity);

    if (newQuantity < 0)
      return { code: status.CREATED, message: 'Quantity can"t be updated' };

    await Supply.update({ quantity: newQuantity }, { where: { item_id: id } });
    return { code: status.CREATED, message: 'Quantity was updated' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findAll() {
  try {
    const supplies = await Supply.findAll();
    return { code: status.OK, message: supplies };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findById(id) {
  try {
    const supply = await Supply.findOne({
      where: { id },
      include: [
        {
          model: Item,
          as: 'item',
          attributes: { exclude: ['id'] },
        },
      ],
    });

    if (supply) return { code: status.OK, message: supply };
    return { code: status.BAD_REQUEST, message: 'Item doesn"t exist' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { update, findAll, findById };

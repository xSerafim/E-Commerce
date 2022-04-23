const { Item, Supply } = require('../models');
const categoryServices = require('./category');
const server = require('../utils/serverErrorHandler');
const status = require('../utils/requestStatus');

async function findAll() {
  try {
    const items = await Item.findAll({
      include: [
        {
          model: Supply,
          as: 'supply',
          attributes: { exclude: ['item_id'] },
        },
      ],
    });
    return { code: status.OK, message: items };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findById(id) {
  try {
    const item = await Item.findOne({
      where: { id },
      include: [
        {
          model: Supply,
          as: 'supply',
          attributes: { exclude: ['item_id'] },
        },
      ],
    });

    if (item) return { code: status.OK, message: item };

    return { code: status.NOT_FOUND, message: 'Item not found' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

// ---Admin funcs--- //
async function create(data) {
  try {
    const category = await categoryServices.findById(data.categoryId);
    if (category.code === status.BAD_REQUEST) return category;

    const itemExist = await Item.findOne({ where: data });

    if (itemExist)
      return { code: status.BAD_REQUEST, message: 'Item already exist' };

    await Item.create(data);

    return { code: status.CREATED, message: 'Created new item succesfully' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function destroy(id) {
  try {
    const itemExist = await Item.findOne({ where: { id } });

    if (!itemExist)
      return { code: status.BAD_REQUEST, message: 'Item doesn"t exist' };

    await Item.destroy({ where: { id } });
    return { code: status.OK, message: 'Deleted item succesfully' };
  } catch (err) {
    return server.errorHandler(err);
  }
}
// ----------------- //

module.exports = { findAll, findById, create, destroy };

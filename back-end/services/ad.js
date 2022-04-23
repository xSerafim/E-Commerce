const { Ad, Item } = require('../models');
const status = require('../utils/requestStatus');
const server = require('../utils/serverErrorHandler');

async function findAll() {
  try {
    const ads = await Ad.findAll();
    return { code: status.OK, message: ads };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findById(id) {
  try {
    const ad = await Ad.findAll({
      where: { ad_id: id },
      include: [{ model: Item, as: 'item', attributes: { exclude: ['id'] } }],
    });

    if (ad.length === 0)
      return { code: status.BAD_REQUEST, message: 'Ad not found' };
    return { code: status.OK, message: ad };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { findAll, findById };

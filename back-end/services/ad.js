const { Ad, Item } = require('../models');
const itemServices = require('./item');
const status = require('../utils/requestStatus');
const server = require('../utils/serverErrorHandler');
const findLastAd = require('../utils/findLastAd');
const removeDuplicates = require('../utils/removeDuplicates');

async function findAll() {
  try {
    const ads = await Ad.findAll();
    const adsWithoutDuplicate = removeDuplicates.removeDuplicateAllAds(ads);
    return { code: status.OK, message: adsWithoutDuplicate };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findById(id) {
  try {
    const ad = await Ad.findAll({
      where: { ad_id: id },
      attributes: { exclude: ['itemId'] },
      include: [{ model: Item, as: 'item' }],
    });

    if (ad.length === 0)
      return { code: status.BAD_REQUEST, message: 'Ad not found' };

    const adWithoutDuplicate = removeDuplicates.removeAdDuplicateById(ad);
    return { code: status.OK, message: adWithoutDuplicate };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function create(ids) {
  try {
    const items = await Promise.all(ids.map((id) => itemServices.findById(id)));

    if (items.some((item) => item.code !== status.OK))
      return { code: status.BAD_REQUEST, message: 'Invalid items' };

    const ads = await Ad.findAll();
    const adId = findLastAd.lastAdId(ads);
    items.forEach(({ message: { id: itemId } }) => Ad.create({ adId, itemId }));

    return { code: status.OK, message: 'Created new ad succesfully' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { findAll, findById, create };

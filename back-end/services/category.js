const { Op } = require('sequelize');
const { Category, Item } = require('../models');
const status = require('../utils/requestStatus');
const server = require('../utils/serverErrorHandler');

async function create({ categoryName, subCategory }) {
  try {
    const subCategoryExists = await Category.findOne({
      where: { subCategory },
    });

    if (subCategoryExists)
      return { code: status.BAD_REQUEST, message: 'Category already exist' };

    await Category.create({ categoryName, subCategory });

    return { code: status.CREATED, message: 'Created new category' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findAll() {
  try {
    const categories = await Category.findAll();

    return { code: status.OK, categories };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findAllItemsByCategory(category) {
  try {
    const categoryExists = await Category.findOne({
      where: {
        [Op.or]: [{ categoryName: category }, { subCategory: category }],
      },
    });

    if (!categoryExists)
      return { code: status.BAD_REQUEST, message: 'Category not found' };

    const categories = await Category.findAll({
      where: {
        [Op.or]: [{ categoryName: category }, { subCategory: category }],
      },
      include: [
        { model: Item, as: 'item', attributes: { exclude: ['category_id'] } },
      ],
    });

    return { code: status.OK, message: { categories } };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = {
  create,
  findAll,
  findAllItemsByCategory,
};

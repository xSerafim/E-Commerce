const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/categoryValidation');

categoryRouter
  .route('/')
  .get(categoryController.findAll)
  .post(auth.tokenValidation, joi.createValidation, categoryController.create);

categoryRouter.route('/:name').get(categoryController.findAllItemsByCategory);

categoryRouter
  .route('/:id')
  .delete(auth.tokenValidation, categoryController.destroy);

module.exports = { categoryRouter };

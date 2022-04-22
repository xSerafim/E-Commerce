const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/categoryValidation');

categoryRouter
  .route('/')
  .get(auth.tokenValidation, categoryController.findAll)
  .post(auth.tokenValidation, joi.createValidation, categoryController.create);

categoryRouter
  .route('/:name')
  .get(auth.tokenValidation, categoryController.findAllItemsByCategory);

module.exports = { categoryRouter };

const itemRouter = require('express').Router();
const itemController = require('../controllers/item');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/itemValidation');

itemRouter
  .route('/')
  .get(itemController.findAll)
  .post(auth.tokenValidation, joi.createValidation, itemController.create);

itemRouter
  .route('/:id')
  .get(auth.tokenValidation, itemController.findById)
  .delete(auth.tokenValidation, itemController.destroy);

module.exports = { itemRouter };

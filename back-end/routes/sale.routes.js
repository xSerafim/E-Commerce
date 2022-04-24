const saleRouter = require('express').Router();
const saleController = require('../controllers/sale');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/saleValidation');

saleRouter
  .route('/')
  .post(auth.tokenValidation, joi.createValidation, saleController.create)
  .get(auth.tokenValidation, saleController.findAll);

saleRouter.route('/:id').get(auth.tokenValidation, saleController.findById);

module.exports = { saleRouter };

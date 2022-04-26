const discountRouter = require('express').Router();
const discountController = require('../controllers/discount');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/discountValidation');

discountRouter
  .route('/')
  .get(auth.tokenValidation, discountController.findAll)
  .post(auth.tokenValidation, discountController.create);

discountRouter
  .route('/:coupon')
  .get(discountController.findByCoupon)
  .put(auth.tokenValidation, joi.updateValidation, discountController.update);

module.exports = { discountRouter };

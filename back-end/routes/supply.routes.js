const supplyRouter = require('express').Router();
const supplyController = require('../controllers/supply');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/supplyValidation');

supplyRouter
  .route('/:id')
  .put(auth.tokenValidation, joi.updateValidation, supplyController.update)
  .get(auth.tokenValidation, supplyController.findById);

supplyRouter.route('/').get(auth.tokenValidation, supplyController.findAll);

module.exports = { supplyRouter };

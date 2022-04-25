const adRouter = require('express').Router();
const adController = require('../controllers/ad');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/adValidation');

adRouter
  .route('/')
  .get(adController.findAll)
  .post(auth.tokenValidation, joi.createValidation, adController.create);

adRouter.route('/:id').get(auth.tokenValidation, adController.findById);

module.exports = { adRouter };

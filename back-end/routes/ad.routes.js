const adRouter = require('express').Router();
const adController = require('../controllers/ad');
const auth = require('../middlewares/tokenValidation');
// const joi = require('../middlewares/userValidation');

adRouter.route('/').get(auth.tokenValidation, adController.findAll);
adRouter.route('/:id').get(auth.tokenValidation, adController.findById);
module.exports = { adRouter };

const supplyRouter = require('express').Router();
const supplyController = require('../controllers/supply');
const auth = require('../middlewares/tokenValidation');
// const joi = require('../middlewares/userValidation');

supplyRouter.route('/:id').put(auth.tokenValidation, supplyController.update);

module.exports = { supplyRouter };

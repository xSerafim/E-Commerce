const userRouter = require('express').Router();
const userController = require('../controllers/user');
const auth = require('../middlewares/tokenValidation');
const joi = require('../middlewares/userValidation');

userRouter
  .route('/')
  .post(joi.createValidation, userController.create)
  .delete(auth.tokenValidation, userController.destroy);

userRouter.route('/login').post(joi.loginValidation, userController.login);

module.exports = { userRouter };

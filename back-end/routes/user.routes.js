const userRouter = require('express').Router();
const controller = require('../controllers/user');
const { tokenValidation } = require('../middlewares/tokenValidation');
const joi = require('../middlewares/userValidation');

userRouter
  .route('/')
  .post(joi.createUserValidation, controller.createUser)
  .delete(tokenValidation, controller.deleteUser);

userRouter.route('/login').get(controller.userLogin);

module.exports = { userRouter };

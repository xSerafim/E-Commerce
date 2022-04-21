const userRouter = require('express').Router();
const controller = require('../controllers/user');
const { tokenValidation } = require('../middlewares/tokenValidation');
const { userValidation } = require('../middlewares/userValidation');

userRouter
  .route('/')
  .post(userValidation, controller.createUser)
  .delete(tokenValidation, controller.deleteUser);

module.exports = { userRouter };

const loginRouter = require('express').Router();

loginRouter.route('/').get();

module.exports = { loginRouter };

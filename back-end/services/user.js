const { User } = require('../models');
const status = require('../utils/requestStatus');
const jwt = require('../helpers/jwt');
const server = require('../utils/serverErrorHandler');

async function create(data) {
  try {
    const emailIsAlreadyRegistered = await User.findOne({
      where: { email: data.email },
    });

    if (emailIsAlreadyRegistered) {
      return {
        code: status.BAD_REQUEST,
        message: 'Email is already registered',
      };
    }

    await User.create(data);

    return { code: status.CREATED, message: 'User registered' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function destroy(id) {
  try {
    await User.destroy({ where: { id } });
    return { code: status.NO_CONTENT };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function login(data) {
  try {
    const userExist = await User.findOne({
      where: { email: data.email, password: data.password },
    });

    if (!userExist)
      return { code: status.NOT_FOUND, message: 'User not found' };

    const { id, email } = userExist;
    const token = jwt.createToken({ id, email });

    return { code: status.CREATED, message: token };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { create, destroy, login };

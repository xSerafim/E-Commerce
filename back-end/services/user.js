const { User } = require('../models');
const status = require('../utils/requestStatus');
const jwt = require('../helpers/jwt');
const server = require('../utils/serverErrorHandler');

async function createUser(data) {
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

    const { id, email } = await User.create(data);
    const token = jwt.createToken({ id, email });

    return { code: status.CREATED_STATUS, message: token };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function deleteUser(id) {
  try {
    await User.destroy({ where: { id } });
    return { code: status.NO_CONTENT };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { createUser, deleteUser };

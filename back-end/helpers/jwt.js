const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);

  return token;
};

const validateToken = (token) => {
  try {
    const validToken = jwt.verify(token, process.env.JWT_SECRET);
    return validToken.id;
  } catch (error) {
    return false;
  }
};

module.exports = { createToken, validateToken };

const jwt = require('../helpers/jwt');
const status = require('../utils/requestStatus');

function tokenValidation(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(status.UNAUTHORIZED).json({ message: 'Token not found' });

  const validToken = jwt.validateToken(authorization);

  if (!validToken)
    return res
      .status(status.UNAUTHORIZED)
      .json({ message: 'Expired or invalid token' });

  req.userId = validToken;

  return next();
}

module.exports = { tokenValidation };

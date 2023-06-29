const userService = require('../services/user');

async function create(req, res) {
  const data = req.body;
  const { code, message } = await userService.create(data);

  return res.status(code).json({ message });
}

async function destroy(req, res) {
  const { userId } = req;
  const { code } = await userService.destroy(userId);

  return res.status(code).end();
}

async function login(req, res) {
  const data = req.body;
  const { code, message, role } = await userService.login(data);

  return res.status(code).json({ message, role });
}

module.exports = { create, destroy, login };

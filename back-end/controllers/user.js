const service = require('../services/user');

async function createUser(req, res) {
  const data = req.body;
  const { code, message } = await service.createUser(data);

  return res.status(code).json({ message });
}

async function deleteUser(req, res) {
  const { userId } = req;
  const { code } = await service.deleteUser(userId);

  return res.status(code).end();
}

module.exports = { createUser, deleteUser };

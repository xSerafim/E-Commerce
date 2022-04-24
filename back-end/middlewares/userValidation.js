const JOI = require('joi');

const createSchema = JOI.object({
  firstName: JOI.string().required(),
  lastName: JOI.string().required(),
  email: JOI.string().email().required(),
  password: JOI.string().min(6).required(),
});

const loginSchema = JOI.object({
  email: JOI.string().email().required(),
  password: JOI.string().min(6).required(),
});

function createValidation(req, _res, next) {
  const { error } = createSchema.validate(req.body);
  if (error) throw error;

  next();
}

function loginValidation(req, _res, next) {
  const { error } = loginSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createValidation, loginValidation };

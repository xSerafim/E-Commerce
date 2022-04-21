const JOI = require('joi');

const createUserSchema = JOI.object({
  firstName: JOI.string().required(),
  lastName: JOI.string().required(),
  email: JOI.string().email().required(),
  password: JOI.string().min(6).required(),
});

const userLoginSchema = JOI.object({
  email: JOI.string().email().required(),
  password: JOI.string().min(6).required(),
});

function createUserValidation(req, _res, next) {
  const { error } = createUserSchema.validate(req.body);
  if (error) throw error;

  next();
}

function userLoginValidation(req, _res, next) {
  const { error } = userLoginSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createUserValidation, userLoginValidation };

const JOI = require('joi');

const userSchema = JOI.object({
  firstName: JOI.string().required(),
  lastName: JOI.string().required(),
  email: JOI.string().email().required(),
  password: JOI.string().min(6).required(),
});

function userValidation(req, _res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { userValidation };

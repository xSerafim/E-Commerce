const JOI = require('joi');

const createSchema = JOI.object({
  ids: JOI.array().items(JOI.number().required()).strict().required(),
});

function createValidation(req, _res, next) {
  const { error } = createSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createValidation };

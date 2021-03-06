const JOI = require('joi');

const createSchema = JOI.object({
  mainCategory: JOI.string().required(),
  subCategory: JOI.string().required(),
});

function createValidation(req, _res, next) {
  const { error } = createSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createValidation };

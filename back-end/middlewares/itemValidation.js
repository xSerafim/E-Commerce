const JOI = require('joi');

const createSchema = JOI.object({
  brand: JOI.string().required(),
  name: JOI.string().required(),
  image: JOI.string().required(),
  gender: JOI.string().required(),
  color: JOI.string().required(),
  size: JOI.string().required(),
  price: JOI.number().required(),
  categoryId: JOI.number().required(),
});

function createValidation(req, _res, next) {
  const { error } = createSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createValidation };

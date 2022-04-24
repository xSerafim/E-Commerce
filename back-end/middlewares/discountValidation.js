const JOI = require('joi');

const createSchema = JOI.object({
  coupon: JOI.string().min(3).required(),
  discount: JOI.number().required(),
  active: JOI.boolean().required(),
});

function createValidation(req, _res, next) {
  const { error } = createSchema.validate(req.body);
  if (error) throw error;

  next();
}

const updateSchema = JOI.object({
  coupon: JOI.string().min(3),
  discount: JOI.number(),
  active: JOI.boolean(),
}).or('discount', 'active', 'coupon');

function updateValidation(req, _res, next) {
  const { error } = updateSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createValidation, updateValidation };

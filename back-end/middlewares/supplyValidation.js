const JOI = require('joi');

const updateSchema = JOI.object({
  quantity: JOI.number().min(1).required(),
  sum: JOI.bool().required(),
});

function updateValidation(req, _res, next) {
  const { error } = updateSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { updateValidation };

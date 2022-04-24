const JOI = require('joi');

const createSchema = JOI.object({
  sales: JOI.array()
    .items(
      JOI.object().keys({
        itemId: JOI.number().required(),
        quantity: JOI.number().required(),
      })
    )
    .strict()
    .required(),
  totalPrice: JOI.number().required(),
});

function createValidation(req, _res, next) {
  const { error } = createSchema.validate(req.body);
  if (error) throw error;

  next();
}

module.exports = { createValidation };

const { Discount } = require('../models');
const status = require('../utils/requestStatus');
const server = require('../utils/serverErrorHandler');

function couponIsActive(discount) {
  const isActive = discount.active;

  return isActive;
}

async function findAll() {
  try {
    const discounts = await Discount.findAll();

    return { code: status.OK, message: discounts };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function findByCoupon(coupon) {
  try {
    const discount = await Discount.findOne({ where: { coupon } });

    if (!discount)
      return { code: status.BAD_REQUEST, message: 'Coupon doesn"t exists' };

    if (!couponIsActive(discount))
      return { code: status.BAD_REQUEST, message: 'Coupon is expired' };

    return { code: status.OK, message: discount };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function create(data) {
  try {
    const discount = await Discount.findOne({ where: { coupon: data.coupon } });

    if (discount)
      return { code: status.BAD_REQUEST, message: 'Coupon already exists' };
    await Discount.create(data);

    return { code: status.CREATED, message: 'New discount registered' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

async function update(data, coupon) {
  try {
    const discount = await Discount.findOne({ where: { coupon } });

    if (!discount)
      return { code: status.BAD_REQUEST, message: 'Coupon doesn"t exist' };

    await Discount.update(data, { where: { coupon } });

    return { code: status.CREATED, message: 'Discount updated' };
  } catch (err) {
    return server.errorHandler(err);
  }
}

module.exports = { findAll, findByCoupon, create, update };

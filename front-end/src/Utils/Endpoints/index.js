export const url = {
  user: 'https://concept-back-end.onrender.com/user',
  userLogin: 'https://concept-back-end.onrender.com/user/login',

  categories: 'https://concept-back-end.onrender.com/category',
  categoryByName: (name) =>
    `https://concept-back-end.onrender.com/user/${name}`,
  categoryById: (id) => `https://concept-back-end.onrender.com/user/${id}`,

  items: 'https://concept-back-end.onrender.com/item',
  itemById: (id) => `https://concept-back-end.onrender.com/item/${id}`,

  supplies: 'https://concept-back-end.onrender.com/supply',
  supplyById: (id) => `https://concept-back-end.onrender.com/supply/${id}`,

  ads: 'https://concept-back-end.onrender.com/ad',
  adById: (id) => `https://concept-back-end.onrender.com/ad/${id}`,

  sales: 'https://concept-back-end.onrender.com/sale',
  saleById: (id) => `https://concept-back-end.onrender.com/sale/${id}`,

  discounts: 'https://concept-back-end.onrender.com/discount',
  discountByCoupon: (coupon) =>
    `https://concept-back-end.onrender.com/discount/${coupon}`,
};

export const url = {
  user: 'http://localhost:3100/user',
  userLogin: 'http://localhost:3100/user/login',

  categories: 'http://localhost:3100/category',
  categoryByName: (name) => `http://localhost:3100/user/${name}`,
  categoryById: (id) => `http://localhost:3100/user/${id}`,

  items: 'http://localhost:3100/item',
  itemById: (id) => `http://localhost:3100/item/${id}`,

  supplies: 'http://localhost:3100/supply',
  supplyById: (id) => `http://localhost:3100/supply/${id}`,

  ads: 'http://localhost:3100/ad',
  adById: (id) => `http://localhost:3100/ad/${id}`,

  sales: 'http://localhost:3100/sale',
  saleById: (id) => `http://localhost:3100/sale/${id}`,

  discounts: 'http://localhost:3100/discount',
  discountByCoupon: (coupon) => `http://localhost:3100/discount/${coupon}`,
};

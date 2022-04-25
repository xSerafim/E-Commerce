export const url = {
  user: 'http://localhost:3001/user',
  userLogin: 'http://localhost:3001/user/login',

  categories: 'http://localhost:3001/category',
  categoryByName: (name) => `http://localhost:3001/user/${name}`,
  categoryById: (id) => `http://localhost:3001/user/${id}`,

  items: 'http://localhost:3001/item',
  itemById: (id) => `http://localhost:3001/item/${id}`,

  supplies: 'http://localhost:3001/supply',
  supplyById: (id) => `http://localhost:3001/supply/${id}`,

  ads: 'http://localhost:3001/ad',
  adById: (id) => `http://localhost:3001/ad/${id}`,

  sales: 'http://localhost:3001/sale',
  saleById: (id) => `http://localhost:3001/sale/${id}`,

  discounts: 'http://localhost:3001/discount',
  discountByCoupon: (coupon) => `http://localhost:3001/discount/${coupon}`,
};

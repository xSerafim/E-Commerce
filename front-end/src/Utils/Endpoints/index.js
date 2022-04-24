export const user = 'http://localhost:3001/user';

export const login = 'http://localhost:3001/login';

export const categories = 'http://localhost:3001/category';
export const categoryByName = (name) => `http://localhost:3001/user/${name}`;
export const categoryById = (id) => `http://localhost:3001/user/${id}`;

export const items = 'http://localhost:3001/item';
export const itemById = (id) => `http://localhost:3001/item/${id}`;

export const supplies = 'http://localhost:3001/supply';
export const supplyById = (id) => `http://localhost:3001/supply/${id}`;

export const ads = 'http://localhost:3001/ad';
export const adById = (id) => `http://localhost:3001/ad/${id}`;

export const sales = 'http://localhost:3001/sale';
export const saleById = (id) => `http://localhost:3001/sale/${id}`;

export const discounts = 'http://localhost:3001/discount';
export const discountByCoupon = (coupon) =>
  `http://localhost:3001/discount/${coupon}`;

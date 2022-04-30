export default function subQuantityOfItems(value, savedProducts) {
  const productIndex = savedProducts.findIndex(({ id }) => id === value[0].id);

  const products = savedProducts;
  const { quantity } = savedProducts[productIndex];

  if (quantity === 1) {
    products.splice(productIndex, 1);
    return products;
  }

  products[productIndex].quantity = quantity - 1;

  return products;
}

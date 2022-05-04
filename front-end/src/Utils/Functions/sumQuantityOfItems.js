export default function sumQuantityOfItems(value, savedProducts) {
  if (!value.length) return savedProducts;

  if (!savedProducts.length) {
    const product = value[0];
    product.quantity = 1;

    return [product];
  }

  const productIndex = savedProducts.findIndex(({ id }) => id === value[0].id);

  if (productIndex >= 0) {
    const teste = savedProducts;
    const { quantity } = savedProducts[productIndex];
    teste[productIndex].quantity = quantity + 1;

    return teste;
  }

  const product = value[0];
  product.quantity = 1;

  return [product, ...savedProducts];
}

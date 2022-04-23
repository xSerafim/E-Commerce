function item(data) {
  return {
    brand: data.brand,
    name: data.name,
    image: data.image,
    gender: data.gender,
    color: data.color,
    size: data.size,
    price: data.price,
    category_id: data.categoryId,
  };
}

module.exports = { item };

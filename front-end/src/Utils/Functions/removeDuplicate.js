export function removeDuplicate(colors, items) {
  const colorSizes = (color, arrOfItems) => {
    const size = [];
    arrOfItems.forEach((e) => {
      if (e.color === color) size.push(e.size);
    });
    return size;
  };

  const uniqueColors = colors.map((color) => ({
    color,
    sizes: colorSizes(color, items),
  }));

  return uniqueColors;
}

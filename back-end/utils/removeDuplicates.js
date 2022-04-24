function newAllAdsObject(adId, array) {
  const arrOfItems = [];
  array.forEach((e) => {
    if (e.adId === adId) arrOfItems.push(e.itemId);
  });
  return arrOfItems;
}

function removeDuplicateAllAds(arr) {
  const adIds = arr.map((e) => Object.values(e.dataValues)[1]);
  const arrWithoutDuplicate = [...new Set(adIds)].map((adId) => ({
    adId,
    itemsId: newAllAdsObject(adId, arr),
  }));

  return arrWithoutDuplicate;
}

function newAdByIdObject(adId, array) {
  const arrOfItems = [];
  array.forEach((e) => {
    if (e.adId === adId) arrOfItems.push(e.item);
  });
  return arrOfItems;
}

function removeAdDuplicateById(arr) {
  const adIds = arr.map((e) => Object.values(e.dataValues)[1]);
  const arrWithoutDuplicate = [...new Set(adIds)].map((adId) => ({
    adId,
    items: newAdByIdObject(adId, arr),
  }));

  return arrWithoutDuplicate;
}

module.exports = { removeDuplicateAllAds, removeAdDuplicateById };

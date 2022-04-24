function lastAdId(ads) {
  return Number(
    ads.sort((a, b) => Number(b.adId) - Number(a.adId)).map((e) => e.adId)[0] +
      1
  );
}

module.exports = { lastAdId };

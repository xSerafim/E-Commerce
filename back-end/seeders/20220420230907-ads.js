module.exports = {
  up: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Ads',
      [
        {
          ad_id: 1,
          item_id: 1,
        },
        {
          ad_id: 1,
          item_id: 2,
        },
        {
          ad_id: 1,
          item_id: 3,
        },
        {
          ad_id: 2,
          item_id: 4,
        },
        {
          ad_id: 2,
          item_id: 5,
        },
        {
          ad_id: 2,
          item_id: 6,
        },
        {
          ad_id: 2,
          item_id: 7,
        },
        {
          ad_id: 3,
          item_id: 8,
        },
        {
          ad_id: 3,
          item_id: 9,
        },
        {
          ad_id: 4,
          item_id: 10,
        },
        {
          ad_id: 4,
          item_id: 11,
        },
        {
          ad_id: 5,
          item_id: 12,
        },
        {
          ad_id: 5,
          item_id: 13,
        },
        {
          ad_id: 6,
          item_id: 14,
        },
        {
          ad_id: 6,
          item_id: 15,
        },
        {
          ad_id: 6,
          item_id: 16,
        },
        {
          ad_id: 7,
          item_id: 17,
        },
        {
          ad_id: 7,
          item_id: 18,
        },
        {
          ad_id: 8,
          item_id: 19,
        },
        {
          ad_id: 9,
          item_id: 20,
        },
        {
          ad_id: 10,
          item_id: 21,
        },
        {
          ad_id: 11,
          item_id: 22,
        },
        {
          ad_id: 12,
          item_id: 23,
        },
        {
          ad_id: 13,
          item_id: 24,
        },
        {
          ad_id: 14,
          item_id: 25,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Ads', null, {});
  },
};

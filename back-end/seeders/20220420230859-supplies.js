module.exports = {
  up: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Supplies',
      [
        {
          quantity: 10,
          item_id: 1,
        },
        {
          quantity: 20,
          item_id: 2,
        },
        {
          quantity: 15,
          item_id: 3,
        },
        {
          quantity: 13,
          item_id: 4,
        },
        {
          quantity: 11,
          item_id: 5,
        },
        {
          quantity: 11,
          item_id: 6,
        },
        {
          quantity: 11,
          item_id: 7,
        },
        {
          quantity: 11,
          item_id: 8,
        },
        {
          quantity: 11,
          item_id: 9,
        },
        {
          quantity: 11,
          item_id: 10,
        },
        {
          quantity: 11,
          item_id: 11,
        },
        {
          quantity: 11,
          item_id: 12,
        },
        {
          quantity: 11,
          item_id: 13,
        },
        {
          quantity: 11,
          item_id: 14,
        },
        {
          quantity: 11,
          item_id: 15,
        },
        {
          quantity: 11,
          item_id: 16,
        },
        {
          quantity: 11,
          item_id: 17,
        },
        {
          quantity: 11,
          item_id: 18,
        },
        {
          quantity: 11,
          item_id: 19,
        },
        {
          quantity: 11,
          item_id: 20,
        },
        {
          quantity: 11,
          item_id: 21,
        },
        {
          quantity: 11,
          item_id: 22,
        },
        {
          quantity: 11,
          item_id: 23,
        },
        {
          quantity: 11,
          item_id: 24,
        },
        {
          quantity: 11,
          item_id: 25,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Supplies', null, {});
  },
};

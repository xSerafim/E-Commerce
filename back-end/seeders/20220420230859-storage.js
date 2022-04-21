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
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Supplies', null, {});
  },
};

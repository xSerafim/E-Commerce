module.exports = {
  up: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Sales',
      [
        {
          user_id: 1,
          sale: JSON.stringify([
            {
              itemId: 1,
              quantity: 5,
            },
            {
              itemId: 2,
              quantity: 5,
            },
            {
              itemId: 3,
              quantity: 5,
            },
          ]),
          total_price: 1500,
          created_at: new Date(),
        },
        {
          user_id: 2,
          sale: JSON.stringify([
            {
              itemId: 1,
              quantity: 2,
            },
            {
              itemId: 2,
              quantity: 1,
            },
            {
              itemId: 3,
              quantity: 3,
            },
          ]),
          total_price: 1600,
          created_at: new Date(),
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Sales', null, {});
  },
};

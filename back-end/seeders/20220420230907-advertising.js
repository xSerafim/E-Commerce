module.exports = {
  up: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Advertising',
      [
        {
          anuncio_id: 1,
          item_id: 1,
        },
        {
          anuncio_id: 1,
          item_id: 2,
        },
        {
          anuncio_id: 1,
          item_id: 3,
        },
        {
          anuncio_id: 2,
          item_id: 4,
        },
        {
          anuncio_id: 2,
          item_id: 5,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Advertising', null, {});
  },
};

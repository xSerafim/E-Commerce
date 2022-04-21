'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Advertising',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        anuncioId: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'anuncio_id',
        },
        itemId: {
          type: Sequelize.INTEGER,
          field: 'item_id',
          allowNull: false,
          unique: true,
          references: {
            model: 'Items',
            key: 'id',
          },
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.dropTable('Advertising');
  },
};

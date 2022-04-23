'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ads', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'ad_id',
      },
      itemId: {
        type: Sequelize.INTEGER,
        field: 'item_id',
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.dropTable('Ads');
  },
};

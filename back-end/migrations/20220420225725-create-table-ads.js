'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Ads',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        adId: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'ad_id',
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
    await queryInterface.dropTable('Ads');
  },
};

'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Supplies',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        itemId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'item_id',
          references: {
            model: 'Items',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.dropTable('Supplies');
  },
};

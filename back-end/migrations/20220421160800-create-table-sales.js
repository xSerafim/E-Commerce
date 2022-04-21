'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Sales',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        itemId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'item_id',
          references: {
            model: 'Items',
            key: 'id',
          },
        },
        userId: {
          field: 'user_id',
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        totalPrice: {
          field: 'total_price',
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
      },
      {
        timestamps: true,
        createdAt: 'created_date',
        updatedAt: 'updated_date',
      }
    );
  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.dropTable('Sales');
  },
};

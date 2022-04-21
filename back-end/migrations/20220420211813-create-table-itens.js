'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Items',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        size: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.dropTable('Items');
  },
};

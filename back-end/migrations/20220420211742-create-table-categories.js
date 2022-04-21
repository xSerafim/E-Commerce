'use strict'; // eslint-disable-line

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Categories',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        categoryName: {
          field: 'category_name',
          type: Sequelize.STRING,
          allowNull: false,
        },
        subCategory: {
          field: 'sub_category',
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.dropTable('Categories');
  },
};

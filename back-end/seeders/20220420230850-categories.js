module.exports = {
  up: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          category_name: 'Roupas',
          sub_category: 'Camisetas',
        },
        {
          category_name: 'Roupas',
          sub_category: 'Calças',
        },
        {
          category_name: 'Roupas',
          sub_category: 'Bermudas',
        },
        {
          category_name: 'Roupas',
          sub_category: 'Vestidos',
        },
        {
          category_name: 'Calçados',
          sub_category: 'Chinelos',
        },
        {
          category_name: 'Calçados',
          sub_category: 'Tênis',
        },
        {
          category_name: 'Calçados',
          sub_category: 'Chuteiras',
        },
        {
          category_name: 'Acessórios',
          sub_category: 'Óculos',
        },
        {
          category_name: 'Acessórios',
          sub_category: 'Boné',
        },
        {
          category_name: 'Acessórios',
          sub_category: 'Relógios',
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

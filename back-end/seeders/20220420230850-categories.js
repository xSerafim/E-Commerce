module.exports = {
  up: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          main_category: 'Roupas',
          sub_category: 'Camisetas',
        },
        {
          main_category: 'Roupas',
          sub_category: 'Calças',
        },
        {
          main_category: 'Roupas',
          sub_category: 'Bermudas',
        },
        {
          main_category: 'Roupas',
          sub_category: 'Vestidos',
        },
        {
          main_category: 'Calçados',
          sub_category: 'Chinelos',
        },
        {
          main_category: 'Calçados',
          sub_category: 'Tênis',
        },
        {
          main_category: 'Calçados',
          sub_category: 'Chuteiras',
        },
        {
          main_category: 'Acessórios',
          sub_category: 'Óculos',
        },
        {
          main_category: 'Acessórios',
          sub_category: 'Boné',
        },
        {
          main_category: 'Acessórios',
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

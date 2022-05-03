module.exports = {
  up: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Admin',
          last_name: 'Admin',
          email: 'admin@admin.com',
          password: 'admin123',
          role: 'admin',
        },
        {
          first_name: 'Joao',
          last_name: 'Zinho',
          email: 'joazinho@hotmail.com',
          password: '123456',
          role: 'user',
        },
        {
          first_name: 'Maria',
          last_name: 'Zinha',
          email: 'mariazinha@hotmail.com',
          password: '123456',
          role: 'user',
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Users', null, {});
  },
};

module.exports = {
  up: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          type: 'T-Shirt',
          name: 'Camisa Street Surf',
          brand: 'nike',
          image: 'linkimagem',
          gender: 'male',
          color: 'blue',
          size: 'S',
        },
        {
          type: 'T-Shirt',
          name: 'Camisa Street Surf',
          brand: 'nike',
          image: 'linkimagem',
          gender: 'male',
          color: 'blue',
          size: 'M',
        },
        {
          type: 'T-Shirt',
          name: 'Camisa Street Surf',
          brand: 'nike',
          image: 'linkimagem',
          gender: 'male',
          color: 'blue',
          size: 'L',
        },
        {
          type: 'Pant',
          name: 'Calça Moletom',
          brand: 'adidas',
          image: 'linkimagem',
          gender: 'female',
          color: 'black',
          size: '42',
        },
        {
          type: 'Pant',
          name: 'Calça Moletom',
          brand: 'adidas',
          image: 'linkimagem',
          gender: 'female',
          color: 'black',
          size: '36',
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Items', null, {});
  },
};

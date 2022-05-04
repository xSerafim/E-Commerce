module.exports = {
  up: async (queryInterface, Sequelize) => { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Jordan DNA 85',
          image: 'https://images.lojanike.com.br/1024x1024/produto/camiseta-jordan-dna-85-masculina-DM1454-501-1-11648574118.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'purple',
          size: 'P',
          price: 250.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Jordan DNA 85',
          image: 'https://images.lojanike.com.br/1024x1024/produto/camiseta-jordan-dna-85-masculina-DM1454-501-1-11648574118.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'purple',
          size: 'M',
          price: 250.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Jordan DNA 85',
          image: 'https://images.lojanike.com.br/1024x1024/produto/camiseta-jordan-dna-85-masculina-DM1454-501-1-11648574118.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'purple',
          size: 'G',
          price: 230.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Nike Sportswear',
          image: 'https://images.lojanike.com.br/860x860/produto/camiseta-manga-curta-asbury-w-ss-crew-DN2393-215-1-11645629595.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'brown',
          size: 'P',
          price: 59.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Nike Sportswear',
          image: 'https://images.lojanike.com.br/860x860/produto/camiseta-manga-curta-asbury-w-ss-crew-DN2393-215-1-11645629595.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'brown',
          size: 'G',
          price: 59.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Nike Sportswear',
          image: 'https://images.lojanike.com.br/860x860/produto/camiseta-manga-curta-asbury-w-ss-crew-DN2393-611-1-11638986035.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'pink',
          size: 'G',
          price: 59.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Nike Sportswear',
          image: 'https://images.lojanike.com.br/860x860/produto/camiseta-manga-curta-asbury-w-ss-crew-DN2393-611-1-11638986035.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'pink',
          size: 'M',
          price: 59.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Nike Dri-FIT Miler',
          image: 'https://images.lojanike.com.br/500x500/produto/camiseta-manga-curta-m-nk-df-miler-top-s-CU5992-494-1-11646344425.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'pink',
          size: 'P',
          price: 99.99,
        },
        {
          category_id: 1,
          brand: 'Nike',
          name: 'Camiseta Nike Dri-FIT Miler',
          image: 'https://images.lojanike.com.br/500x500/produto/camiseta-manga-curta-m-nk-df-miler-top-s-CU5992-494-1-11646344425.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'pink',
          size: 'GG',
          price: 99.99,
        },
        {
          category_id: 2,
          brand: 'Nike',
          name: 'Calça Nike Sportswear',
          image: 'https://images.lojanike.com.br/500x500/produto/calca-m-nsw-spe-wvn-ul-utility-pant-DD5207-072-1-11645798650.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'white',
          size: 'P',
          price: 129.99,
        },
        {
          category_id: 2,
          brand: 'Nike',
          name: 'Calça Nike Sportswear',
          image: 'https://images.lojanike.com.br/500x500/produto/calca-m-nsw-spe-wvn-ul-utility-pant-DD5207-072-1-11645798650.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'white',
          size: 'G',
          price: 99.99,
        },
        {
          category_id: 2,
          brand: 'Nike',
          name: 'Legging Nke Sportswear Essential',
          image: 'https://images.lojanike.com.br/500x500/produto/calca-w-nsw-essntl-lggng-swoosh-mr-CZ8530-010-1-11645797988.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'black',
          size: 'M',
          price: 149.99,
        },
        {
          category_id: 2,
          brand: 'Nike',
          name: 'Legging Nke Sportswear Essential',
          image: 'https://images.lojanike.com.br/500x500/produto/calca-w-nsw-essntl-lggng-swoosh-mr-CZ8530-063-1-11645797993.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'grey',
          size: 'GG',
          price: 149.99,
        },
        {
          category_id: 6,
          brand: 'Adidas',
          name: 'Tênis Grand Court',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddc011b1b1a94e5b83d1ac6f00d98f83_9366/Tenis_Grand_Court_Branco_EX9565_01_standard.jpg', // eslint-disable-line
          gender: 'Unissex',
          color: 'white',
          size: '38',
          price: 149.99,
        },
        {
          category_id: 6,
          brand: 'Adidas',
          name: 'Tênis Grand Court',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddc011b1b1a94e5b83d1ac6f00d98f83_9366/Tenis_Grand_Court_Branco_EX9565_01_standard.jpg', // eslint-disable-line
          gender: 'Unissex',
          color: 'white',
          size: '40',
          price: 149.99,
        },
        {
          category_id: 6,
          brand: 'Adidas',
          name: 'Tênis Grand Court',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddc011b1b1a94e5b83d1ac6f00d98f83_9366/Tenis_Grand_Court_Branco_EX9565_01_standard.jpg', // eslint-disable-line
          gender: 'Unissex',
          color: 'white',
          size: '42',
          price: 149.99,
        },
        {
          category_id: 6,
          brand: 'Adidas',
          name: 'Tênis Run Falcon 2.0',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c24f60f4ab9d4314ae4dac33015787d0_9366/Tenis_Run_Falcon_2.0_Cinza_FY8741_01_standard.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'grey',
          size: '40',
          price: 449.99,
        },
        {
          category_id: 6,
          brand: 'Adidas',
          name: 'Tênis Run Falcon 2.0',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c24f60f4ab9d4314ae4dac33015787d0_9366/Tenis_Run_Falcon_2.0_Cinza_FY8741_01_standard.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'grey',
          size: '42',
          price: 449.99,
        },
        {
          category_id: 5,
          brand: 'Adidas',
          name: 'Chinelo JABBA Throne Room Adilette',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be3bfd45605544069ca6ac6a0134160f_9366/Chinelo_Adilette_Shower_Preto_EV7185_01_standard.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'black',
          size: '44',
          price: 249.99,
        },
        {
          category_id: 3,
          brand: 'Adidas',
          name: 'Shorts Cargo Tiro',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fcf70266c634a1db9c6adcf00c79734_9366/Shorts_Cargo_Tiro_Azul_H56617_21_model.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'blue',
          size: 'M',
          price: 89.99,
        },
        {
          category_id: 4,
          brand: 'Adidas',
          name: 'Vestido Summer',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/55fa6058a4474453a2d3ae1a00a9f54c_9366/Vestido_Summer_Branco_HC3016_21_model.jpg', // eslint-disable-line
          gender: 'Feminino',
          color: 'white',
          size: 'M',
          price: 190.0,
        },
        {
          category_id: 7,
          brand: 'Adidas',
          name: 'Chuteira Copa Sense.1 Campo',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/541ea67c4f074c91a073ae0400f48472_9366/Chuteira_Copa_Sense.1_Campo_Branco_GW4942_01_standard.jpg', // eslint-disable-line
          gender: 'Masculino',
          color: 'white',
          size: '42',
          price: 1199.0,
        },
        {
          category_id: 10,
          brand: 'Casio',
          name: 'G-Shock',
          image: 'https://static.netshoes.com.br/produtos/relogio-casio-g-shock-masculino/06/112-1107-006/112-1107-006_zoom1.jpg?ts=1621108817&ims=544x', // eslint-disable-line
          gender: 'Masculino',
          color: 'black',
          size: 'Padrão',
          price: 899.0,
        },
        {
          category_id: 9,
          brand: 'New Era',
          name: 'Boné New Era 59Fifty Los Angeles Lakers',
          image: 'https://t-static.dafiti.com.br/1f_qXIKNzCfro--GfgAkqMZxCPM=/fit-in/60x87/static.dafiti.com.br/p/new-era-bon%c3%a9-new-era-59fifty-los-angeles-lakers-amarelo-5151-59895111-1-feed.jpg', // eslint-disable-line
          gender: 'Unissex',
          color: 'yellow',
          size: '7',
          price: 249.0,
        },
        {
          category_id: 8,
          brand: 'Ray-Ban',
          name: 'RB4184',
          image: 'https://images.ray-ban.com/is/image/RayBan/8053672897074__002.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2', // eslint-disable-line
          gender: 'Unissex',
          color: 'black',
          size: 'Padrão',
          price: 370.0,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => { // eslint-disable-line
    await queryInterface.bulkDelete('Items', null, {});
  },
};

module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define(
    'Ad',
    {
      adId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Ads',
    }
  );

  Ad.associate = (models) => {
    Ad.belongsTo(models.Item, {
      foreignKey: 'itemId',
      as: 'item',
    });
  };

  return Ad;
};

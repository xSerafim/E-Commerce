module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define(
    'Ad',
    {
      adId: {
        type: DataTypes.STRING,
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
      foreignKey: 'item_id',
      as: 'item',
    });
  };

  return Ad;
};

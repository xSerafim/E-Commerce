module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Items',
    }
  );

  Item.associate = (models) => {
    Item.hasOne(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  };

  return Item;
};

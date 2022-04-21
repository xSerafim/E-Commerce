module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_date',
      updatedAt: 'updated_date',
      underscored: true,
      tableName: 'Sales',
    }
  );

  Sale.associate = (models) => {
    Sale.hasMany(models.Item, {
      foreignKey: 'item_id',
      as: 'items',
    });
    Sale.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return Sale;
};

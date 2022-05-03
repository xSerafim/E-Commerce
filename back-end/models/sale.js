module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      sale: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Sales',
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Sale;
};

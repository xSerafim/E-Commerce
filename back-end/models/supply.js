module.exports = (sequelize, DataTypes) => {
  const Supply = sequelize.define(
    'Supply',
    {
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Supplies',
    }
  );

  Supply.associate = (models) => {
    Supply.belongsTo(models.Item, {
      foreignKey: 'itemId',
      as: 'item',
    });
  };

  return Supply;
};

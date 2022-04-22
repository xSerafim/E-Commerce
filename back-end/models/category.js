module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      mainCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Categories',
    }
  );

  Category.associate = (models) => {
    Category.hasOne(models.Item, {
      foreignKey: 'category_id',
      as: 'item',
    });
  };

  return Category;
};

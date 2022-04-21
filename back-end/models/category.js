module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      categoryName: {
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
    Category.belongsToMany(models.Item, {
      foreignKey: 'category_id',
      as: 'items',
    });
  };

  return Category;
};

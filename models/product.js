'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'category_id'
      });

      Product.belongsTo(models.Supplier, {
        as: 'supplier',
        foreignKey: 'supplier_id'
      });

      Product.hasMany(models.Transaction, {
        as: 'transactions',
        foreignKey: 'product_id'
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    category_id: DataTypes.NUMBER,
    supplier_id: DataTypes.NUMBER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
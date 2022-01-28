'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'product_id'
      });
    }
  };
  Transaction.init({
    product_id: DataTypes.NUMBER,
    customer_name: DataTypes.STRING,
    total_price: DataTypes.NUMBER,
    qty: DataTypes.NUMBER,
    status: DataTypes.ENUM('Pending', 'Success', 'Failed')
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
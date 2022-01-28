const Transaction = require('../models').Transaction;
const Product = require('../models').Product;

exports.findAll = async () => {
    return await Transaction.findAll({
        include: {
            model: Product,
            as: 'product',
            attributes: [['id', 'product_id'], ['name', 'product_name']]
        }
    });
};

exports.findOne = async (transactionId) => {
    return await Transaction.findOne({
        where: { id: transactionId },
        include: {
            model: Product,
            as: 'product',
            attributes: [['id', 'product_id'], ['name', 'product_name']]
        }
    });
};

exports.count = async() => {
    return await Transaction.count();
};

exports.create = async (data) => {
    return await Transaction.create(data);
};

exports.update = async (transactionId, data) => {
    return await Transaction.update(data, { where: { id: transactionId } });
};

exports.destroy = async (transactionId) => {
    return await Transaction.destroy({ where: { id: transactionId } });
};
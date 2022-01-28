const Supplier = require('../models').Supplier;

exports.findAll = async () => {
    return await Supplier.findAll();
};

exports.count = async() => {
    return await Supplier.count();
};

exports.findOne = async (supplierId) => {
    return await Supplier.findOne({ where: { id: supplierId } });
};

exports.create = async (data) => {
    return await Supplier.create(data);
};

exports.update = async (supplierId, data) => {
    return await Supplier.update(data, { where: { id: supplierId } });
};

exports.destroy = async (supplierId) => {
    return await Supplier.destroy({ where: { id: supplierId } });
};
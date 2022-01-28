const Category = require('../models').Category;

exports.findAll = async () => {
    return await Category.findAll();
};

exports.findOne = async (categoryId) => {
    return await Category.findOne({ where: { id: categoryId } });
};

exports.create = async (data) => {
    return await Category.create(data);
};

exports.update = async (categoryId, data) => {
    return await Category.update(data, { where: { id: categoryId } });
};

exports.destroy = async (categoryId) => {
    return await Category.destroy({ where: { id: categoryId } });
};
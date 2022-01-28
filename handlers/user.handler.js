const User = require('../models').User;

exports.findAll = async () => {
    return await User.findAll();
};

exports.findOne = async (userId) => {
    return await User.findOne({ where: { id: userId } });
};

exports.create = async (data) => {
    return await User.create(data);
};

exports.update = async (userId, data) => {
    return await User.update(data, { where: { id: userId } });
};

exports.destroy = async (userId) => {
    return await User.destroy({ where: { id: userId } });
};
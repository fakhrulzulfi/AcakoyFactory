const Product = require('../models/index').Product;
const Category = require('../models/index').Category;
const Supplier = require('../models/index').Supplier;

exports.findAll = async () => {
    return await Product.findAll({
        include: [
            {
                model: Category,
                as: 'category',
                attributes: [['id', 'category_id'], ['name', 'category_name']],
            },
            {
                model: Supplier,
                as: 'supplier',
                attributes: [['id', 'supplier_id'], ['name', 'supplier_name'], ['address', 'supplier_address']]
            }
        ]
    });
};

exports.count = async() => {
    return await Product.count();
};

exports.findOne = async (product_id) => {
    return await Product.findOne({
        where: {
            id: product_id
        },
        include: [
            {
                model: Category,
                as: 'category',
                attributes: ['name']
            },
            {
                model: Supplier,
                as: 'supplier',
                attributes: ['name', 'address']         
            }
        ]
    });
};

exports.create = async (data) => {
    return await Product.create(data);
};

exports.update = async (product_id, data) => {
    return await Product.update(data, { where: { id: product_id } });
};

exports.destroy = async (product_id) => {
    return await Product.destroy({ where: { id: product_id } });
};
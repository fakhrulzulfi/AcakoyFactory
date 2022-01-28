const {Product,Category, Supplier} = require('../handlers/index');
const path = require('path');
const fs = require('fs')

exports.getAll = async (req, res) => {
    try {
        const allProduct = await Product.findAll();
        const getAllCategory = await Category.findAll();
        const getAllSupplier = await Supplier.findAll();

        const data = {
            products: allProduct, 
            categories: getAllCategory,
            suppliers: getAllSupplier
        };

        return res.render('../views/admin/product.ejs', { data });    
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.insert = async (req, res) => {
    try {
        const body = req.body;

        const getFormat = req.file.originalname.split('.')[1];
        const nameOfImage = `${req.file.filename}.${getFormat}`;

        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, `../public/images/product/${nameOfImage}`);

        fs.rename(tempPath, targetPath, err => {
            if (err) console.log(err);
        });

        const data = {
            name: body.name,
            stock: body.stock,
            price: body.price,
            category_id: body.category_id,
            supplier_id: body.supplier_id,
            image: nameOfImage
        };

        const insertData = await Product.create(data);

        if( insertData == null ) {
            return res.send({
                message: 'Something error'
            });
        }
        return res.redirect('/admin/products');

    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.change = async (req, res) => {
    try {
        const { product_id } = req.params;
        const body = req.body;

        const data = {
            name: body.name,
            stock: body.stock,
            price: body.price,
            type_product: body.type_product,
            supplier_id: body.supplier_id,
            image: body.image
        };

        const updateData = await Product.update(product_id, data);

        if( updateData == null ) {
            return res.send({
                message: 'Something error'
            });
        }

        return res.redirect('/admin/products');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const { product_id } = req.params;

        const deleteData = await Product.destroy(product_id);

        if( deleteData == null ) {
            return res.send({
                message: 'Something error'
            });
        }

        return res.redirect('/admin/products');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};


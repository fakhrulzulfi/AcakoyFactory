const Supplier = require('../handlers/index').Supplier;

exports.getAll = async (req, res) => {
    try {
        const allData = await Supplier.findAll();

        return res.render('../views/admin/supplier.ejs', { data: allData });
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.insert = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            address: req.body.address
        };

        const insertData = await Supplier.create(data);

        if( insertData == null ) {
            return res.send({
                message: 'Something error'
            });
        }

        return res.redirect('/admin/suppliers');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.change = async (req, res) => {
    try {
        const { supplier_id } = req.params;

        const data = req.body;

        const changeData = await Supplier.update(supplier_id, data);

        if( changeData == null ) {
            return res.send({
                message: 'Something error'
            });
        }
        return res.redirect('/admin/suppliers');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};
 
exports.delete = async (req, res) => {
    try {
        const { supplier_id } = req.params;

        const deleteData = await Supplier.destroy(supplier_id);

        if( deleteData == null ) {
            return res.send({
                message: 'Something error'
            });
        }

        return res.redirect('/admin/suppliers');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};
const {Transaction} = require('../handlers/index');


exports.getAll = async (req, res) => {
    try {
        const allDataTransactions = await Transaction.findAll();

        return res.render('../views/admin/transaction.ejs', { data: allDataTransactions })
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.insert = async (req, res) => {
    try {

        const data = {
            product_id: req.body.product_id,
            customer_name: req.body.customer_name,
            total_price: req.body.price,
            qty: req.body.qty,
            status: 'Pending'
        };

        const insertData = await Transaction.create(data);

        if( insertData == null ) {
            return res.send({
                message: 'Something error'
            });
        }
        return res.render('/admin/transactions');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.change = async (req, res) => {
    try {
        const { transaction_id } = req.params;
        const data = req.body;

        const changeData = await Transaction.update(transaction_id, data);

        if( changeData == null ) {
            return res.send({
                message: 'Something error'
            });
        }

        return res.redirect('/admin/transactions');
    } catch (error) {
        return res.send({
            message: error.message
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const { transaction_id } = req.params;

        const deleteData = await Transaction.destroy(transaction_id);

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
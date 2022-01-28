const {Product,Transaction, Supplier} = require('../handlers/index');

exports.login = (req, res) => {
    return res.render('../views/login.ejs');
};

exports.adminPage = async (req, res) => {
    const totalProduct = await Product.count();
    const totalSupplier = await Supplier.count();
    const totalTransaction = await Transaction.count();

    const data = {
        product: totalProduct,
        supplier: totalSupplier,
        transaction: totalTransaction
    };

    return res.render('../views/admin/home.ejs', { data });
};

exports.loginProcess = (req, res) => {
    const { username, password } = req.body;

    if( username === 'root' && password === 'root' ) {
        return res.redirect('/admin');
    }
    return res.redirect('/admin/login');
};

exports.home = async (req, res) => {
    const products = await Product.findAll();

    return res.render('../views/home.ejs', { data: products });
};

exports.checkout = async (req, res) => {
    const {qty, product_id} = req.body;

    const product = await Product.findOne(product_id);

    const {id, name, price} = product;

    const getTotalPrice = price * qty;

    const data = {
        qty,
        product_name: name,
        product_id: id,
        price: getTotalPrice
    };

    return res.render('../views/checkout.ejs', {data});
};

exports.checkout_success = async (req, res) => {
    const data_pesanan = req.query;

    const data_user = req.body;

    // save to transaction
    const dataToSave = {
        product_id: data_pesanan.product_id,
        customer_name: data_user.customer_name,
        total_price: data_pesanan.price,
        qty: data_pesanan.qty
    };

    const insertToTransaction = await Transaction.create(dataToSave);

    const text = "Halo,+Saya+"+data_user.customer_name+".+Saya+sudah+melakukan+pembayaran+pada+pembelian+"+data_pesanan.product_name+"+sebanyak+"+data_pesanan.qty+"+PCS.+%0ABerikut+saya+lampirkan+foto+bukti+pembayaran:"
    const data = {
        text,
        price: data_pesanan.price
    };
    
    return res.render('../views/checkout-success.ejs', {data});
};

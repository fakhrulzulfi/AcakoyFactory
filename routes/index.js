const { Product, Supplier, User, Transaction } = require('../controllers');

var router = require('express').Router();

const multer = require('multer');

const upload = multer({
    dest: "./public/images/upload"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
  });

//// Admin Page
// Admin Login
router.get('/admin/login', User.login);
router.post('/login_proccess', User.loginProcess);

// Admin Page
router.get('/admin', User.adminPage);

// Product Page
router.get('/admin/products', Product.getAll);
router.post('/admin/products', upload.single("image"), Product.insert);
router.post('/admin/products/:product_id', Product.change);
router.get('/admin/products/:product_id/delete', Product.delete);

// Supplier Page
router.get('/admin/suppliers', Supplier.getAll);
router.post('/admin/suppliers', Supplier.insert);
router.post('/admin/suppliers/:supplier_id', Supplier.change);
router.get('/admin/suppliers/:supplier_id/delete', Supplier.delete);

// Transaction Page
router.get('/admin/transactions', Transaction.getAll);
router.post('/admin/transactions', Transaction.insert);
router.post('/admin/transactions/:transaction_id', Transaction.change);
router.get('/admin/transactions/:transaction_id/delete', Transaction.delete);


// For User Routes 
router.get('/', User.home);
router.post('/checkout', User.checkout);
router.post('/success_checkout', User.checkout_success);



module.exports = router;

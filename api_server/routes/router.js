var express = require('express');
var router = express.Router();
var fs = require('fs');

var categoryController = require('../controllers/category');
var userController = require('../controllers/user');
var productController = require('../controllers/product');
var addressController = require('../controllers/address');
var polineConstroller = require('../controllers/poline');
var poController = require('../controllers/po');

router.use(function(req, res, next) {
    console.log('Something is happening...');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

router.get('/', function(req, res) {
    fs.readFile( __dirname + "/" + "router.js", 'utf8', function (err, data) {
        res.end( data );
    });
});

// API begin

router.route('/category').post(categoryController.category_create);

router.route('/categories').get(categoryController.category_list);

router.route('/category/:categoryID').get(categoryController.category_detail);

router.route('/category/:categoryID').patch(categoryController.category_update);

router.route('/category/:categoryID').delete(categoryController.category_delete);



router.route('/user').post(userController.user_create);

router.route('/users').get(userController.user_list);

router.route('/user/:userID').get(userController.user_detail);

router.route('/user/:userID').patch(userController.user_update);

router.route('/user/:userID').delete(userController.user_delete);



router.route('/product').post(productController.product_create);

router.route('/products').post(productController.products_create);

router.route('/products').get(productController.product_list);

router.route('/products').delete(productController.product_delete_all);

router.route('/product/:productID').get(productController.product_detail);

router.route('/product/:productID').patch(productController.product_update);

router.route('/product/:productID').delete(productController.product_delete);

router.route('/products/promo').post(productController.product_promo_add);

router.route('/products/promo_del').post(productController.product_promo_del);



router.route('/addresses').get(addressController.address_list)
router.route('/address').post(addressController.address_create);



router.route('/polines').get(polineConstroller.poline_list);
router.route('/poline').post(polineConstroller.poline_create);
router.route('/polines').post(polineConstroller.polines_create);
router.route('/polines/po/:poID').get(polineConstroller.poline_po_list);



router.route('/pos').get(poController.po_list);
router.route('/po').post(poController.po_create);



router.route('/authenticate').post(userController.user_authenticate);

// API end

module.exports = router;
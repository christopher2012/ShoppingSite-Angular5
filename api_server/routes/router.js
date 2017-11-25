var express = require('express');
var router = express.Router();
var fs = require('fs');

var categoryController = require('../constrollers/category');
var userController = require('../constrollers/user');
var productController = require('../constrollers/product');
var addressController = require('../constrollers/address');
var polineConstroller = require('../constrollers/poline');
var poController = require('../constrollers/po');

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

router.route('/category/:category_id').get(categoryController.category_detail);

router.route('/category/:category_id').patch(categoryController.category_update);

router.route('/category/:category_id').delete(categoryController.category_delete);



router.route('/user').post(userController.user_create);

router.route('/users').get(userController.user_list);

router.route('/user/:user_id').get(userController.user_detail);

router.route('/user/:user_id').patch(userController.user_update);

router.route('/user/:user_id').delete(userController.user_delete);



router.route('/product').post(productController.product_create);

router.route('/products').post(productController.products_create);

router.route('/products').get(productController.product_list);

router.route('/product/:product_id').get(productController.product_detail);

router.route('/product/:product_id').patch(productController.product_update);

router.route('/product/:product_id').delete(productController.product_delete);



router.route('/addresses').get(addressController.address_list)
router.route('/address').post(addressController.address_create);



router.route('/polines').get(polineConstroller.poline_list);
router.route('/poline').post(polineConstroller.poline_create);



router.route('/pos').get(poController.po_list);
router.route('/po').post(poController.po_create);



router.route('/authenticate').post(userController.user_authenticate);

// API end

module.exports = router;
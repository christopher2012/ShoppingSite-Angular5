
var Product = require('../models/product');
var Category = require('../models/category');

exports.product_list = function(req, res, next) {
    
    Product.find().populate("category").exec( function(err, products) {
        if (err)
            res.send(err);

        console.log(products.length);
        products.rsCount = products.length;
        products.rsStart = 0;
        products.rsMax = products.length;
        res.status(200).send(products);
    });
}

exports.product_create = function(req, res, next) {

    var product = new Product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.imagePath = req.body.imagePath;
    product.price = req.body.price;
    product.category = req.body.category;

    product.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'Product created'});
    })
}

exports.products_create = function(req, res, next) {

    for(var item of req.body) {

        var product = new Product();
        product.name = item.name;
        product.description = item.description;
        product.imagePath = item.imagePath;
        product.price = item.price;
        product.category = item.category;
    
        product.save(function(err) {
            if(err)
                res.send(err);
        })
    }    
    res.json({message: 'Products created'});
}

exports.product_update = function(req, res, next) {
    
    Product.findById(req.params.productID, function(err, product) {
        if(err)
            res.send(err);

        product.price = req.body.price;

        product.save( function(err) {
            if(err)
                res.send(err);
            
            res.json({message: "Product updated... "});
        })
    })
}

exports.product_promo_add = function(req, res, next) {
    console.log(req.body);
    callbackCounter = 0;

    for(var promoProduct of req.body) {
        updateProduct(promoProduct);        
    }

    function updateProduct(promoProduct) {
        Product.findById(promoProduct._id, function(err, product) {
            if(err)
                res.send(err);

            if (!product.promotion)
                product.oldPrice = product.price;

            product.price = promoProduct.price;
            product.promotion = true;
            product.save(callbackCounterSave); 
        })
    }
    
    function callbackCounterSave(err) {
        if(err)
            res.send(err);
        
        callbackCounter ++;
        
        if(callbackCounter === req.body.length) {
            res.json({message: "Product updated... "});
        }
    }
}

exports.product_promo_del = function(req, res, next) {

    Product.update({promotion: true}, {promotion: false, }, {multi: true}, function(err, product) {
        if(err)
            res.send(err);
        
        res.json({message: "Product updated... "});
    });
}

exports.product_detail = function(req, res, next) {

    Product.findById(req.params.product_id, function(err, product) {
        if( err )
            res.send(err)

        res.json(product);
    })
}

exports.product_delete = function(req, res, next) {

    console.log(req.params.productID);
    Product.remove({
        _id: req.params.productID
    }, function( err, product) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}

exports.product_delete_all = function(req, res, next) {
    
    Product.remove({}, function( err, product) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}

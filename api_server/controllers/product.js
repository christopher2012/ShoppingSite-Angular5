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
    
    Product.findById(req.params.category_id, function(err, product) {
        if(err)
            res.send(err);

        product.name = req.body.name;

        product.save( function(err) {
            if(err)
                res.send(err);
            
            res.json({message: "Product updated... "});
        })
    })
}

exports.product_detail = function(req, res, next) {

    Product.findById(req.params.product_id, function(err, product) {
        if( err )
            res.send(err)

        res.json(product);
    })
}

exports.product_delete = function(req, res, next) {

    Product.remove({
        _id: req.params.product_id
    }, function( err, product) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}

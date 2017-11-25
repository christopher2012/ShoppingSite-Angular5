var Category = require('../models/category');

exports.category_list = function(req, res, next) {

    Category.find( function(err, categories) {
        if (err)
            res.send(err);

        res.status(200).send(categories);
    });
}

exports.category_create = function(req, res, next) {

    var category = new Category();
    category.name = req.body.name;

    category.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'Category created'});
    })
}

exports.category_update = function(req, res, next) {
    
    Category.findById(req.params.category_id, function(err, category) {
        if(err)
            res.send(err);

        category.name = req.body.name;

        category.save( function(err) {
            if(err)
                res.send(err);
            
            res.status(200).json({message: "Category updated... "});
        })
    })
}

exports.category_detail = function(req, res, next) {

    Category.findById(req.params.category_id, function(err, category) {
        if( err )
            res.send(err)

        res.status(200).json(category);
    })
}

exports.category_delete = function(req, res, next) {

    Category.remove({
        _id: req.params.category_id
    }, function( err, category) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}

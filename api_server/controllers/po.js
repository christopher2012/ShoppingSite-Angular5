var Po = require('../models/po');

exports.po_list = function(req, res, next) {

    Po.find().populate("user").populate("address").exec( function(err, pos) {
        if (err)
            res.send(err);
        
        res.status(200).send(pos);
    });
}

exports.po_with_lines_list = function(req, res, next) {
    
    Po.find().populate("user").populate("address").populate("polines").exec( function(err, pos) {
        if (err)
            res.send(err);
        
        res.status(200).send(pos);
    });
}

exports.po_create = function(req, res, next) {
    
    var po = new Po();
    console.log(req.body);
    po.user = req.body.user;
    po.address = req.body.address;
    po.status = req.body.status;

    po.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'Po created', _id: po._id});
    })
}

exports.product_delete = function(req, res, next) {
    
    Po.remove({
        _id: req.params.poID
    }, function( err, po) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}
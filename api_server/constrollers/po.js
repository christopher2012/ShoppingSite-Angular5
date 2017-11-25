var Po = require('../models/po');

exports.po_list = function(req, res, next) {

    Po.find().populate("user").populate("address").exec( function(err, pos) {
        if (err)
            res.send(err);
        
        res.status(200).send(pos);
    });
}

exports.po_create = function(req, res, next) {
    
    var po = new Po();
    po.user = req.body.user;
    po.address = req.body.address;
    po.status = req.body.status;

    po.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'Po created'});
    })
}
var Poline = require('../models/poline');

exports.poline_list = function(req, res, next) {

    Poline.find().populate("product").populate("po").exec( function(err, polines) {
        if (err)
            res.send(err);
        
        res.status(200).send(polines);
    });
}

exports.poline_create = function(req, res, next) {
    
    var poline = new Poline();
    poline.po = req.body.po;
    poline.product = req.body.product;
    poline.count = req.body.count;
    poline.price = req.body.price;

    poline.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'Poline created'});
    })
}

exports.polines_create = function(req, res, next) {
    
    console.log(req.body);

    for (const poline of req.body){
        let newPoline = new Poline();
        newPoline.po = poline.poid;
        newPoline.product = poline.itemid;
        newPoline.count = poline.count;
        newPoline.price = poline.price;
    
        newPoline.save(function(err) {
            if(err)
                res.send(err);
        
        })
    }
    res.status(200).json({message: 'Polines created'});
}

exports.product_delete = function(req, res, next) {
    
    Poline.remove({
        _id: req.params.polineID
    }, function( err, poline) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}
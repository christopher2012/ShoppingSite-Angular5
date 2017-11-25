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
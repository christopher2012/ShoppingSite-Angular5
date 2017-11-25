var Address = require('../models/address');

exports.address_list = function(req, res, next) {

    Address.find( function(err, address) {
        if (err)
            res.send(err);
        
        res.status(200).send(address);
    });
}

exports.address_create = function(req, res, next) {
    
    var address = new Address();
    address.name = req.body.name;
    address.surname = req.body.surname;
    address.address = req.body.address;

    address.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'Address created'});
    })
}

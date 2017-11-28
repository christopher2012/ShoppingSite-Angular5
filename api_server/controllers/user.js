var User = require('../models/user');

exports.user_list = function(req, res, next) {
    
    User.find().populate("address").exec(function(err, users) {
        if (err)
            res.send(err);

        res.status(200).send(users);
    });
}

exports.user_where_list = function(req, res, next) {
    
    User.find().populate("address").exec(function(err, users) {
        if (err)
            res.send(err);

        res.status(200).send(users);
    });
}

exports.user_create = function(req, res, next) {

    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.address = req.body.address;

    user.save(function(err) {
        if(err)
            res.send(err);
        
        res.status(200).json({message: 'User created'});
    })
}

exports.user_update = function(req, res, next) {
    
    User.findById(req.params.user_id, function(err, user) {
        if(err)
            res.send(err);

        user.name = req.body.name;

        user.save( function(err) {
            if(err)
                res.send(err);
            
            res.status(200).json({message: "User updated... "});
        })
    })
}

exports.user_detail = function(req, res, next) {

    User.findById(req.params.user_id, function(err, user) {
        if( err )
            res.send(err)

        res.status(200).json(user);
    })
}

exports.user_delete = function(req, res, next) {

    console.log(req.params.userID);
    User.remove({
        _id: req.params.userID
    }, function( err, user) {
        if (err)
            res.send(err);

        res.status(200).json({message: 'Successfully deleted'});
    })
}

exports.user_authenticate = function(req, res, next) {


    console.log(req.body);
    User.findOne({username: req.body.username}).populate("address").exec( function(err, user) {
        if (err)
            res.send(err);
            
        
        if(user !== null && user.password === req.body.password) {
            console.log(user);
            res.json({error: false, message: "Dane użytkownika poprawne", user: user});
        } else {
            res.json({error: true, message: "Dane użytkownika niepoprawne"});
        }
    })
}

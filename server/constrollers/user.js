var User = require('../models/user');

exports.user_list = function(req, res) {
    
    User.find( function(err, users) {
        if (err)
            res.send(err);

        res.send(users);
    });
}

exports.user_create = function(req, res) {

    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err) {
        if(err)
            res.send(err);
        
        res.json({message: 'User created'});
    })
}

exports.user_update = function(req, res) {
    
    User.findById(req.params.user_id, function(err, user) {
        if(err)
            res.send(err);

        user.name = req.body.name;

        user.save( function(err) {
            if(err)
                res.send(err);
            
            res.json({message: "User updated... "});
        })
    })
}

exports.user_detail = function(req, res) {

    User.findById(req.params.user_id, function(err, user) {
        if( err )
            res.send(err)

        res.json(user);
    })
}

exports.user_delete = function(req, res) {

    User.remove({
        _id: req.params.user_id
    }, function( err, user) {
        if (err)
            res.send(err);

        res.json({message: 'Successfully deleted'});
    })
}

exports.user_authenticate = function(req, res) {


    console.log(req.body);
    User.findOne({username: req.body.username}, function(err, user) {
        if (err)
            res.send(err);
            
        if(user !== null && user.password === req.body.password) {
            res.json({error: false, message: "Dane użytkownika poprawne", user: user});
        } else {
            res.json({error: true, message: "Dane użytkownika niepoprawne"});
        }
    })
}

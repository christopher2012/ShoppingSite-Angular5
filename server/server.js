var mongoose   = require('mongoose');
var express    = require('express');    
var app        = express();            
var bodyParser = require('body-parser');
var path       = require('path');


var router = require('./routes/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

var mongoDB = 'mongodb://localhost/shop_db';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error...'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', router);


app.listen(port);
console.log('Magic happens op port: ' + port);

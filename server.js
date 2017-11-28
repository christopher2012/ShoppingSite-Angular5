var mongoose   = require('mongoose');
var express    = require('express');   
var bodyParser = require('body-parser');
var path       = require('path');

var swaggerize = require('swaggerize-express');
var swaggerUi  = require('swaggerize-ui'); 

var app        = express();           

var router = require('./api_server/routes/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

var mongoDB = 'mongodb://shop-app:VYai3yzOAO8yWPcxYNuIOF0AayKx39gbHgSONvzPu3E438XrcJVHB2FI5bjUNcEcrWngWHY51oBvptIXGjNx3A==@shop-app.documents.azure.com:10255/?ssl=true';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error...'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', router);

app.use(swaggerize({
    api: path.resolve('./swagger/config/swagger.json'),
    handlers: path.resolve('./swagger/custom_handlers'),
    docspath: '/swagger' 
}));

app.use('/docs', swaggerUi({
    docs: '/swagger'  
}));

app.listen(port);
console.log('Magic happens op port: ' + port);

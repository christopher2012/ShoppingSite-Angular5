var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    name: String,
    surname: String,
    address: String
})


module.exports = mongoose.model( 'Address', AddressSchema );
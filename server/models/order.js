var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    user: Schema.Types.ObjectId, ref: 'User',
    email: String,
    address: String,
    password: String
})


module.exports = mongoose.model( 'Order', OrderSchema );
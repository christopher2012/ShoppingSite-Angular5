var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Poline = new Schema({
    po: { type: Schema.Types.ObjectId, ref: 'Po' },
    product: { type: Schema.Types.ObjectId, ref: 'Product'},
    count: Number, 
    price: Number
})

module.exports = mongoose.model( 'Poline', Poline );
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    price: String,
    category: { type: Schema.Types.ObjectId, ref:'Category' }
})

module.exports = mongoose.model( 'Product', ProductSchema );
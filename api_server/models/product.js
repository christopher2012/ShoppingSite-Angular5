var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    price: String,
    promotion: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref:'Category' },
    oldPrice: String,
    count: { type: Number, default: 0 }
})

module.exports = mongoose.model( 'Product', ProductSchema );
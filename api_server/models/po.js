var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PoSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    address: { type: Schema.Types.ObjectId, ref: 'Address' },
    status: { type: String, enum: ['INPROG', 'COMP'] },
    poline: [ { type: Schema.Types.ObjectId, ref: 'Poline' }]
})

module.exports = mongoose.model( 'Po', PoSchema );
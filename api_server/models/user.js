var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['ADMIN', 'USER'] },
    token: String,
    email: String,
    address: { type: Schema.Types.ObjectId, ref:'Address' }
});

module.exports = mongoose.model( 'User', UserSchema );

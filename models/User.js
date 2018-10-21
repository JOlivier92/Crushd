//Require Mongoose
const mongoose = require('mongoose');
//Define a Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    birthdate: {
        type: Date,
        required: true 
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('user',UserSchema);
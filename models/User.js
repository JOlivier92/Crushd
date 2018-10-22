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
    },
    gender: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    sexual_preference: {
        type: String,
        required: true
    }


})

module.exports = User = mongoose.model('users',UserSchema);


// age range to be defined in search, by default searches own age +/- 3 years

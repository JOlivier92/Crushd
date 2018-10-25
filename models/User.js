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
    },

    // current video posted by user
    posted_video_id: {
        type: Number,
        required: false
    },

    // array of videos that are responses
    // to user video
    video_reply_ids: {
        type: Array,
        "default": []
    },

    // array of individuals
    // who user is trying to match with
    likes: {
        type: Array,
        "default": []
    },

    // array of individuals
    // who user has matched with
    matches: {
        type: Array,
        "default": []
    }


})

module.exports = User = mongoose.model('users',UserSchema);


// age range to be defined in search, by default searches own age +/- 3 years

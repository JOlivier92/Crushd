const mongoose = require('mongoose');
//Define a Schema
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    // URL to video 
    content: {
        type: String,
        required: true
    }

})

module.exports = Video = mongoose.model('videos', VideoSchema);
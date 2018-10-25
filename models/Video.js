const mongoose = require('mongoose');
//Define a Schema
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    user_id: {
        type: Number,
        required: true
    },

    // URL to video 
    videoURL: {
        type: String,
        required: true
    },
    // array if video IDs
    // that have responded to
    // the current video
})

module.exports = Video = mongoose.model('videos', VideoSchema);
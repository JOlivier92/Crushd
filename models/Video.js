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
    },
    // array if video IDs
    // that have responded to
    // the current video
    respondent_ids: {
        type: Array,
        "default": []
    },
    // id of video that current video
    // is replying to
    response_to_id: {
        type: Number,
        required: false
    },
    

})

module.exports = Video = mongoose.model('videos', VideoSchema);
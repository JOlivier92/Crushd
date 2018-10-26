const mongoose = require("mongoose");
//Define a Schema
const Schema = mongoose.Schema;

const ResponseVideoSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },

    // URL to video
    videoURL: {
        type: String,
        required: true
    },

  // gender of poster
    gender: {
        type: String,
        required: true
    },

    // preference of poster
    sexual_preference: {
        type: String,
        required: true
    },

    response_to_id: {
        type: String,
        required: true
    }
});

module.exports = ResponseVideo = mongoose.model("response_videos", ResponseVideoSchema);

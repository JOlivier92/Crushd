const mongoose = require("mongoose");
//Define a Schema
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
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
  preference: {
    type: String,
    required: true
  }
});

module.exports = Video = mongoose.model("videos", VideoSchema);

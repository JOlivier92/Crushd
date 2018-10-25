const mongoose = require("mongoose");
//Define a Schema
const Schema = mongoose.Schema;


// Message object
    // Sender
    // Recipient
    // Message
const MessageSchema = new Schema({
    // who is sending the message
    sender_id: {
        type: Number,
        required: true
    },
    // who is receiving the message
    receiver_id: {
        type: Number,
        required: true
    },
  // string content of message
    content: {
        type: String,
        default: ""
    }
});

module.exports = Video = mongoose.model("messages", MessageSchema);

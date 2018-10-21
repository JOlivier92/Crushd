//Require Mongoose
const mongoose = require('mongoose');
//Define a Schema
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    // The date the chat was created
    createdAt: {
        type: String,
        required: true
    },
    // Array of userIds that belong in the chat
    parties: {
        type: Array,
        required: true
    },
    // Array of objects
        // Message object
            // Sender
            // Recipient
            // Message
    messages: {
        type: Array,
        required: false
    }
});

module.exports = Chat = mongoose.model('chats',ChatSchema);
const Chat = require("../../models/Chat");
// create chat validations TODO
exports.createChat = function (req, res) {
    const newChat = new Chat({
        createdAt: `${Date.now()}`,
        parties: req.body,
        chatroomURL: `${req.body[0]}_${req.body[1]}`
    });
    Chat.findOne({ parties: { $all: [req.body[0], req.body[1]]}}).then(chat => {
        if (chat) {
            console.log("I'm here :)")
            res.json({
                createdAt: chat.createdAt,
                parties: chat.parties,
                chatroomURL: chat.chatroomURL
            });
        } else {
            console.log("I'm here :(")
            newChat.save().then(chat => {
                res.json({
                    createdAt: chat.createdAt,
                    parties: chat.parties,
                    chatroomURL: chat.chatroomURL
                });
            });
        }
    })
};

exports.getIndex = function (req, res) {
    Chat.find({ parties: `${req.params.userid}`}).then(idx => {
        idx = idx.map(chat => chat._doc);
        res.json({
            matches: idx
        });
    });
};
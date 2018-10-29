const Chat = require("../../models/Chat");
// create chat validations TODO
exports.createChat = function (req, res) {
    debugger;
    const newChat = new Chat({
        createdAt: `${Date.now()}`,
        parties: req.body,
        chatroomURL: `${req.body[0]}_${req.body[1]}`
    });
    Chat.findOne({ parties: { $all: [req.params.userid, ]}}).then(chat => {
        if (chat) {
            res.json({
                createdAt: req.body.time,
                parties: req.body.parties,
                chatroomURL: chat.chatroomURL
            });
        } else {
            newChat.save().then(chat => {
                res.json({
                    createdAt: chat.createAt,
                    parties: chat.parties,
                    chatroomURL: chat.chatroomURL
                });
            });
        }
    })
};

exports.getIndex = function (req, res) {
    debugger
    Chat.find({ parties: `${req.params.userid}`}).then(idx => {
        idx = idx.map(chat => chat._doc);
        res.json({
            matches: idx
        });
    });
};
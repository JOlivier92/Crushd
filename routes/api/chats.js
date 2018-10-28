const Chat = require("../../models/Chat");
// create chat validations TODO
exports.createChat = function (req, res) {
    debugger;
    const newChat = new Chat({
        createdAt: "",
        parties: [req.body.videoURL],
        chatroomURL: "figurethisout"
    });
    Chat.findOne({ parties: { $all: [req.params.userid, ]}}).then(chat => {
        if (chat) {
            res.json({
                createdAt: req.body.time,
                parties: req.body.parties,
                chatroomURL: "figurethisout"
            });
        } else {
            newChat.save().then(chat => {
                res.json({
                    createdAt: req.body.time,
                    parties: req.body.parties,
                    chatroomURL: "figurethisout"
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
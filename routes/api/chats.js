// Socket IO - Driven chat messaging
const Chat = require("../../models/Chat");
// create chat validations TODO
exports.createChat = function (req, res) {
    debugger;
    const newChat = new Chat({
        createdAt: ""
        parties: [req.body.videoURL],
        gender: req.body.gender,
        sexual_preference: req.body.sexual_preference
    });

    Video.findOne({ user_id: req.body.user_id }).then(video => {
        if (video) {
            Video.updateOne({ user_id: req.body.user_id },
                { $set: { videoURL: req.body.videoURL } }).then(video => {
                    res.json({
                        user_id: req.body.user_id,
                        videoURL: req.body.videoURL,
                        gender: req.body.gender,
                        sexual_preference: req.body.sexual_preference
                    });
                });
        } else {
            newVideo.save().then(video => {
                res.json({
                    user_id: req.body.user_id,
                    videoURL: req.body.videoURL,
                    gender: req.body.gender,
                    sexual_preference: req.body.sexual_preference
                });
            });
        }
    })

};

exports.getIndex = function (req, res) {
    debugger
    Chat.find({ parties : {$contains : req.params.userid}}).then(idx => {
        idx = idx.map(chat => chat._doc);
        res.json({
            matches: idx
        });
    });
};
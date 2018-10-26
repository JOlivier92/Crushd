const Video = require("../../models/Video");
const ReponseVideo = require("../../models/ResponseVideo")


exports.getIndex = function (req, res) {
    console.log("asd")
    Video.find({}).then(idx => {
        res.json({
            videos: idx
        });
    });
};
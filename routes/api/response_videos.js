const ResponseVideo = require("../../models/ResponseVideo");
const validateResponseVideoUpload = require("../../validations/create-response-video");

exports.upload = function (req, res) {
    debugger;
    const newVideo = new ResponseVideo({
        user_id: req.body.user_id,
        videoURL: req.body.videoURL,
        response_to_id: req.body.response_to_id
    });
    // const { errors, isValid } = validateResponseVideoUpload(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors)
    // };

    ResponseVideo.findOne({ user_id: req.body.user_id, response_to_id: req.body.response_to_id })
        .then(responseVideo => {
        if (responseVideo) {
            responseVideo
              .updateOne(
                {
                  user_id: req.body.user_id,
                  response_to_id: req.body.response_to_id
                },
                {
                    $set: {videoURL: req.body.videoURL } 
                }
              )
              .then(() => {
                res.json({
                  user_id: req.body.user_id,
                  videoURL: req.body.videoURL,
                  response_to_id: req.body.response_to_id
                });
              });
        } else {
            newVideo.save().then(() => {
                res.json({
                  user_id: req.body.user_id,
                  videoURL: req.body.videoURL,
                  response_to_id: req.body.response_to_id
                });
            });
        }
    })

};

exports.getIndex = function (req, res) {
    debugger;
    ResponseVideo.find({ response_to_id: req.params.userid}).then(idx => {
        idx = idx.map(responseVideo => responseVideo._doc);
        debugger;
        res.json({
            responseVideos: idx
        });
    });
};

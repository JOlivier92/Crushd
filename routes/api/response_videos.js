const ResponseVideo = require("../../models/ResponseVideo");
const validateResponseVideoUpload = require("../../validations/create-response-video");

exports.upload = function (req, res) {

    const newVideo = new ResponseVideo({
        user_id: req.body.user_id,
        videoURL: req.body.videoURL,
        gender: req.body.gender,
        sexual_preference: req.body.sexual_preference,
        response_to_id: req.body.response_to_id
    });
    const { errors, isValid } = validateResponseVideoUpload(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    };

    ResponseVideo.findOne({ user_id: req.body.user_id, response_to_id: req.body.response_to_id })
        .then(responseVideo => {
        if (responseVideo) {
            responseVideo
              .update(
                {
                  user_id: req.body.user_id,
                  response_to_id: req.body.response_to_id
                },
                {
                    $set: {
                        videoURL: req.body.videoURL,
                        gender: req.body.gender,
                        sexual_preference: req.body.sexual_preference,
                        response_to_id: req.body.response_to_id } }
              )
              .then(() => {
                res.json({
                  user_id: req.body.user_id,
                  videoURL: req.body.videoURL,
                  gender: req.body.gender,
                  sexual_preference: req.body.sexual_preference,
                  response_to_id: req.body.response_to_id
                });
              });
        } else {
            newVideo.save().then(() => {
                res.json({
                  user_id: req.body.user_id,
                  videoURL: req.body.videoURL,
                  gender: req.body.gender,
                  sexual_preference: req.body.sexual_preference,
                  response_to_id: req.body.response_to_id
                });
            });
        }
    })

};

exports.getIndex = function (req, res) {
    debugger;
    User.findById(req.params.userid).then(user => {
        ResponseVideo.find({ gender: user._doc.sexual_preference, sexual_preference: user._doc.gender }).then(idx => {
            idx = idx.map(video => video._doc);
            res.json({
                videos: idx
            });
        });
    });
};

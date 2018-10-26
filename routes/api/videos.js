const Video = require("../../models/Video");

const validateVideoUpload = require("../../validations/create-video");
const validateVideoDelete = require("../../validations/delete-video");
let errors = {};

exports.upload = function(req, res) {
  console.log("We're in here");

  const newVideo = new Video({
    user_id: req.body.user_id,
    videoURL: req.body.videoURL
  });
  Video.findOne({user_id: req.body.user_id}).then(video => {
    if (video) {
      Video.update({ user_id: req.body.user_id },
        { $set: { videoURL: req.body.videoURL } }).then(video => {
          const payload = { user_id: video.user_id, videoURL: video.videoURL };
          res.json({
            user_id: req.body.user_id,
            videoURL: req.body.videoURL
          });
        });
    } else {
      newVideo.save().then(video => {
        const payload = { user_id: video.user_id, videoURL: video.videoURL };
        res.json({
          user_id: req.body.user_id,
          videoURL: req.body.videoURL
        });
      });
    }
  })
  
};

const Video = require('../../models/Video');


const validateVideoUpload = require('../../validations/create-video');
const validateVideoDelete = require('../../validations/delete-video');
let errors = {};

exports.upload = function(req,res) {
    const { errors, isValid } = validateVideoUpload(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    res.json({
        username: req.user.username,
        content: req.data
    });

    User.findOne({ username: req.body.username }).then(user => {
        // if the user already has a video, must delete video
        // and all associated data
        return nil
    })
};


exports.delete = function (req, res) {
    const { errors, isValid } = validateVideoDelete(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    res.json({
        username: req.user.username,
        content: req.data
    });

    User.findOne({ username: req.body.username }).then(user => {
        // if the user already has a video, must delete video
        // and all associated data
        return nil
    })
};
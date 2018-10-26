const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateResponseVideoCreateRequest(data) {
    let errors = {};
    // sanitize inputs

    data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
    data.videoURL = !isEmpty(data.videoURL) ? data.videoURL : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";
    data.sexual_preference = !isEmpty(data.sexual_preference) ? data.sexual_preference : "";
    data.response_to_id = !isEmpty(data.response_to_id) ? data.response_to_id : "";

    // check to make sure each field is filled in. // // // // // // //
    if (Validator.isEmpty(data.user_id)) {
        errors.username = "User is required to create a video";
    }
    if (Validator.isEmpty(data.videoURL)) {
        errors.content = "You must upload a video";
    }
    if (Validator.isEmpty(data.gender)) {
        errors.content = "Invalid user";
    }
    if (Validator.isEmpty(data.sexual_preference)) {
        errors.content = "Invalid sexual_preferences";
    }
    if (Validator.isEmpty(data.response_to_id)) {
        errors.content = "Must respond to another user";
    }

    // // // // // // // // // // // // // // // // // // // // //
    // more specific validations below.

    // // // // // // // // // // // // // // // // // // // // //
    // custom validations

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

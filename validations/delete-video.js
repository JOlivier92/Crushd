const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDeleteRequest(data) {
    let errors = {};
    // sanitize inputs
    data.username = !isEmpty(data.username) ? data.username : "";
    data.response_to_id = !isEmpty(data.response_to_id) ? data.response_to_id : "";
    data.content = !isEmpty(data.content) ? data.content : "";

    // check to make sure each field is filled in. // // // // // // //
    if (Validator.isEmpty(data.username)) {
        errors.username = "User is required to create a video";
    }
    if (Validator.isEmpty(data.content)) {
        errors.content = "There must be a video";
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

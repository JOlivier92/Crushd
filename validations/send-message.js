const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMessageRequest(data) {
    let errors = {};
    debugger;
    // sanitize inputs
    data.sender_id = !isEmpty(data.sender_id) ? data.sender_id : "";
    data.receiver_id = !isEmpty(data.receiver_id) ? data.receiver_id : "";
    data.content = !isEmpty(data.content) ? data.content : "";

    // check to make sure each field is filled in. // // // // // // //
    if (Validator.isEmpty(data.sender_id)) {
        errors.sender_id = "User is required to send a message";
    }
    if (Validator.isEmpty(data.receiver_id)) {
        errors.receiver_id = "There must be a recipient";
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

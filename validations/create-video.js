const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateVideoCreateRequest(data) {
  let errors = {};
  // sanitize inputs

  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.videoURL = !isEmpty(data.videoURL) ? data.videoURL : "";

  // check to make sure each field is filled in. // // // // // // //
  if (Validator.isEmpty(data.user_id)) {
    errors.username = "User is required to create a video";
  }
  if (Validator.isEmpty(data.videoURL)) {
    errors.content = "You must upload a video";
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

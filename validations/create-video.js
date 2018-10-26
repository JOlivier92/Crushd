const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateVideoCreateRequest(data) {
  let errors = {};
  // sanitize inputs

  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.videoURL = !isEmpty(data.videoURL) ? data.videoURL : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.preference = !isEmpty(data.preference) ? data.preference : "";

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
  if (Validator.isEmpty(data.preference)) {
    errors.content = "Invalid preferences";
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

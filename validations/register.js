const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  debugger;
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isLength(data.username, {min: 2, max: 16})) {
      errors.name = "Name must be between 2 and 16 characters"
  }
  if (!Validator.isLength(data.password, {min: 6, max: 20})) {
      errors.name = "Password must be between 6 and 20 characters"
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.password = "Please confirm your password";
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
      errors.password = "Passwords must match"
  }

  if (!Validator.isMobilePhone(data.phone_number)) {
      errors.phone_number = "Please enter a valid phone number"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

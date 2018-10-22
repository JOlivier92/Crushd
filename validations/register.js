const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};
  // sanitize inputs
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone_number = !isEmpty(data.phone_number) ? data.phone_number : "";
  data.birthdate = !isEmpty(data.birthdate) ? data.birthdate : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : "";
  data.sexual_preference = !isEmpty(data.sexual_preference) ? data.sexual_preference : "";

  // check to make sure each field is filled in. // // // // // // //
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.sexual_preference = "Please enter which gender you most identify with."
  }

  if (Validator.isEmpty(data.sexual_preference)) {
    errors.sexual_preference = "Please enter your sexual preference!"
  }

  if (Validator.isEmpty(data.zipcode)) {
    errors.sexual_preference = "Please enter your zip code!"
  }

  if (Validator.isEmpty(data.zipcode)) {
    errors.sexual_preference = "Please enter yo!";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.password = "Please confirm your password";
  }

  // // // // // // // // // // // // // // // // // // // // //
  // more specific validations below.
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (!Validator.isLength(data.username, {min: 2, max: 16})) {
      errors.name = "Name must be between 2 and 16 characters"
  }
  if (!Validator.isLength(data.password, {min: 6, max: 20})) {
      errors.name = "Password must be between 6 and 20 characters"
  }

  if (!Validator.isMobilePhone(data.phone_number)) {
      errors.phone_number = "Please enter a valid phone number"
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.password = "Passwords must match"
  }

  if (!Validator.isLength(data.zipcode, {min: 5, max: 5})) {
    error.zipcode = "Please enter a valid 5 digit zipcode."
  }

  if (!Validator.isNumeric(data.zipcode)) {
    errors.zipcode = "Zipcode must be must 5 numeric digits.";
  }

  if (!Validator.isIn(data.gender,["M","F","O"])) {
    errors.gender = "A valid gender was not sent from the frontend."
  }
  if (!Validator.isIn(data.sexual_preference,["M","F","O"])) {
    errors.sexual_preference = "A valid sexual preference was not sent from the frontend."
  }

  // // // // // // // // // // // // // // // // // // // // //
  // custom validations
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

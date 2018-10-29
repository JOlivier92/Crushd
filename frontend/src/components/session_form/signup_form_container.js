import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../util/session_api_util";
import SignupForm from "./signup_form";
import { openModal, closeModal } from '../../actions/modal_actions';
import {
  showLogo
} from '../../actions/logo_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: "Sign up",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(registerUser(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    showLogo: () => dispatch(showLogo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

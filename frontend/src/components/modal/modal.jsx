import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import FaqContainer from "../faq/faq_container";

const Modal = props => {
  if (!props.modal) {
    return null;
  }

  let component;

  switch (props.modal.modal) {
    case "ShowSignup":
      component = <SignupFormContainer />;
      break;
    case "ShowLogin":
      component = <LoginFormContainer />;
      break;
    case "faq":
      component = <FaqContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

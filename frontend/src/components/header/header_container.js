import { connect } from "react-redux";

import { logoutUser } from "../../util/session_api_util";
import { openModal, closeModal } from "../../actions/modal_actions";
import Header from "./header";

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

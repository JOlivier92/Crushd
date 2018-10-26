import { connect } from "react-redux";
import Splash from "./splash";
import { hideLogo } from "../../actions/logo_actions";
import { openModal } from "../../actions/modal_actions";

const msp = ({ session, ui }) => {
  return {
    currentUser: session,
    ui: ui.logo
  };
};

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  hideLogo: () => dispatch(hideLogo())
});

export default connect(msp, mdp)(Splash);

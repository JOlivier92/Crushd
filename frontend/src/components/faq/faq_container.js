import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Faq from "./faq";

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(
    null,
    mapDispatchToProps
)(Faq);
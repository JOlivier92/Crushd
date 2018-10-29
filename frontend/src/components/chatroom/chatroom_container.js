import { connect } from "react-redux";
import ChatRoom from "./chatroom";

const mapStateToProps = ({ ui }) => {
  return {
    ui: ui.nav.type
  }
}

export default connect(
  mapStateToProps,
  null
)(ChatRoom);

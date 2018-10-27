import { connect } from "react-redux";

import { logoutUser } from "../../util/session_api_util";
import { createNewVideo } from "../../util/video_api_util";
import Home from "./home";

const mapStateToProps = ({ session, ui }) => {
  return {
    currentUser: session,
    ui: ui.nav.type
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  createNewVideo: video => dispatch(createNewVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

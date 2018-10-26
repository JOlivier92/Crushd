import { connect } from "react-redux";

import { logoutUser } from "../../util/session_api_util";
import { createNewVideo } from "../../util/video_api_util";

import UploadVideo from "./upload_video";

const mSP = ({ session }) => {
  return {
    currentUser: session
  };
};

const mDP = dispatch => ({
  logout: () => dispatch(logoutUser()),
  createNewVideo: video => dispatch(createNewVideo)
});

export default connect(
  mSP,
  mDP
)(UploadVideo);

import { connect } from "react-redux";

import UploadVideo from "./upload_video";

const mSP = ({ session }) => {
  return {
    currentUser: session
  };
};

export default connect(
  mSP,
  null
)(UploadVideo);

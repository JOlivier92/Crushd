import { connect } from "react-redux";
import VideosIndex from "./videos_index";
import { fetchVideos } from "../../util/video_api_util";

const mapStateToProps = ({ videoIndex, session }) => {
  return {
    videos: videoIndex,
    currentUser: session
  };
};

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosIndex);

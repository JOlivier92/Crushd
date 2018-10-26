import { connect } from "react-redux";
import VideosIndex from "./videos_index";
import { fetchVideos } from "../../util/video_api_util";

const mapStateToProps = ({ videoIndex }) => {
  return {
    videos: videoIndex
  };
};

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosIndex);

import { connect } from "react-redux";
import VideosIndex from "./videos_index";
import { fetchVideos } from "../../util/video_api_util";

const mapStateToProps = ({ session, videoIndex }) => {
  return {
    currentUser: session,
    videos: videoIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchVideos: (id) => dispatch(fetchVideos(id))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosIndex);

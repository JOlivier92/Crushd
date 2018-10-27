import { connect } from "react-redux";
import ResponsesIndex from "./responses_index";
import { fetchVideos } from "../../util/response_video_api_util";

const mapStateToProps = ({session, responseIndex}) => {
  return {
    currentUser: session,
    responseVideos: responseIndex 
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchResponseVideos: (id) => dispatch(fetchVideos(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResponsesIndex);
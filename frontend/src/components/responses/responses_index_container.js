import { connect } from "react-redux";
import ResponsesIndex from "./responses_index";
import { fetchResponseVideos } from "../../util/response_video_api_util";
import { createNewChat } from '../../util/chat_api_util';
const mapStateToProps = ({session, responseIndex}) => {
  return {
    currentUser: session,
    responseVideos: responseIndex 
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchResponseVideos: (id) => dispatch(fetchResponseVideos(id)),
    createNewChat: (parties) => dispatch(createNewChat(parties))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResponsesIndex);
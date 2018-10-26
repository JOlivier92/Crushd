import { RECEIVE_POSTED_VIDEO } from "../util/video_api_util";

const videosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTED_VIDEO:
      return action.video;
    default:
      return state;
  }
};

export default videosReducer;

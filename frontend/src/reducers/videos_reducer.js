import { RECEIVE_POSTED_VIDEO, RETRIEVE_POSTED_VIDEOS } from "../util/video_api_util";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTED_VIDEO:
      return action.video;
    case RETRIEVE_POSTED_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};

export default videosReducer;

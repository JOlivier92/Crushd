import { RETRIEVE_RESPONSE_VIDEOS } from "../util/response_video_api_util";

const videoResponseIndexReducer = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_RESPONSE_VIDEOS:
      return action.videos.data.videos;
    default:
      return state;
  }
};

export default videoResponseIndexReducer;

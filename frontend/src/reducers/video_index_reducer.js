import { RETRIEVE_POSTED_VIDEOS } from "../util/video_api_util";

const videoIndexReducer = (state = {}, action) => {
    switch (action.type) {
        case RETRIEVE_POSTED_VIDEOS:
            return action.videos;
        default:
            return state;
    }
};

export default videoIndexReducer;

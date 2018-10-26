import { RETRIEVE_POSTED_VIDEOS } from "../util/video_api_util";

const videoIndexReducer = (state = {}, action) => {
    switch (action.type) {
        case RETRIEVE_POSTED_VIDEOS:
        debugger;
            return action.videos.data.videos;
        default:
            return state;
    }
};

export default videoIndexReducer;

import axios from "axios";
export const RETRIEVE_RESPONSE_VIDEOS = "RETRIEVE_RESPONSE_VIDEOS";
export const GET_ERRORS = "GET_ERRORS";


// logic to set state after retrieving video index
export const setRetrievedVideos = payload => {
    return {
        type: RETRIEVE_RESPONSE_VIDEOS,
        videos: payload
    }
}

// retrieving video index
export const fetchVideos = () => dispatch => {
    axios.get("/api/responsevideos").then(res => dispatch(setRetrievedVideos(res)));
};
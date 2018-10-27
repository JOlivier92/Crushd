import axios from "axios";
export const RETRIEVE_RESPONSE_VIDEOS = "RETRIEVE_RESPONSE_VIDEOS";
export const GET_ERRORS = "GET_ERRORS";


// logic to set state after retrieving video index
export const setRetrievedResponseVideos = payload => {
    return {
        type: RETRIEVE_RESPONSE_VIDEOS,
        videos: payload
    }
}

// retrieving video index
export const fetchVideos = (id) => dispatch => {
    axios
        .get(`/api/responsevideos/${id}`)
        .then(res => dispatch(setRetrievedResponseVideos(res)));
};
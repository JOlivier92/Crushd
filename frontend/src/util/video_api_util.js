import axios from "axios";

export const RECEIVE_POSTED_VIDEO = "RECEIVE_POSTED_VIDEO";
export const RETRIEVE_POSTED_VIDEOS = "RETRIEVE_POSTED_VIDEOS";
export const GET_ERRORS = "GET_ERRORS";

export const createNewVideo = video => {
  axios.post("/api/videos", video).then(res => {
    return res;
  });
};

export const setPostedVideo = video => {
  return {
    type: RECEIVE_POSTED_VIDEO,
    video: video
  };
};


// logic to set state after retrieving video index
export const setRetrievedVideos = payload => {
  return {
    type: RETRIEVE_POSTED_VIDEOS,
    videos: payload
  }
}

// retrieving video index
export const fetchVideos = () => dispatch => {
  axios.get("/api/videos").then(res => dispatch(setRetrievedVideos(res)));
};
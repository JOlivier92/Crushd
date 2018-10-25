import axios from "axios";

export const RECEIVE_POSTED_VIDEO = "RECEIVE_POSTED_VIDEO";
export const GET_ERRORS = "GET_ERRORS";

export const createNewVideo = video => dispatch => {
  axios
    .post("/api/videos", video)
    .then(res => {
      dispatch(setPostedVideo(video));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setPostedVideo = video => {
  return {
    type: RECEIVE_POSTED_VIDEO,
    video: video
  };
};

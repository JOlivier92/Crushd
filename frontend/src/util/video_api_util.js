import axios from "axios";

export const RECEIVE_POSTED_VIDEO = "RECEIVE_POSTED_VIDEO";
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

import axios from "axios";
export const RETRIEVE_CHATS = "RETRIEVE_CHATS";
export const GET_ERRORS = "GET_ERRORS";

// logic to set state after retrieving chat index
export const setRetrievedChats = payload => {
  return {
    type: RETRIEVE_CHATS,
    chats: payload
  };
};

// retrieving chat index
export const fetchChats = id => dispatch => {
  axios
    .get(`/api/chats/${id}`)
    .then(res => dispatch(setRetrievedChats(res)));
};

export const createNewChat = parties => {
  axios.post("/api/chats", parties).then(res => {
    return res;
  });
};

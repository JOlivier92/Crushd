import axios from "axios";
export const RETRIEVE_CHATS = "RETRIEVE_CHATS";
export const ADD_NEW_CHAT = "ADD_NEW_CHAT";
export const GET_ERRORS = "GET_ERRORS";

// logic to set state after retrieving chat index
export const setRetrievedChats = payload => {
  return {
    type: RETRIEVE_CHATS,
    chats: payload
  };
};

export const addNewChat = payload => {
  return {
    type: ADD_NEW_CHAT,
    chats: payload
  };
};

// retrieving chat index
export const fetchChats = id => dispatch => {
  axios
    .get(`/api/chats/${id}`)
    .then(res => dispatch(setRetrievedChats(res)));
};

export const createNewChat = parties => dispatch => {
    axios
        .post("/api/chats", parties)
        .then(res => dispatch(addNewChat(res)));
};

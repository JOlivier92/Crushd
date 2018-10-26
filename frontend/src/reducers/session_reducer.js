import { RECEIVE_CURRENT_USER } from "../util/session_api_util";

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.payload.id,
        name: action.payload.username,
        sexual_preference: action.payload.sexual_preference,
        gender: action.payload.gender
      };
    default:
      return state;
  }
};

export default sessionReducer;

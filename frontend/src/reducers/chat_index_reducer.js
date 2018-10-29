import { RETRIEVE_CHATS, ADD_NEW_CHAT } from "../util/chat_api_util";

const retrieveChatIndexReducer = (state = [], action) => {
    switch (action.type) {
        case RETRIEVE_CHATS:
            return action.chats.data.chats;
        case ADD_NEW_CHAT:
            return [...state, action.chats.data];
        default:
            return state;
    }
};

export default retrieveChatIndexReducer;

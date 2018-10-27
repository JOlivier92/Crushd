import {
    SHOW_MATCHES,
    SHOW_RESPONSES
} from '../actions/nav_actions';

const navReducer = (state = {
    type: true
}, action) => {
    switch (action.type) {
        case SHOW_RESPONSES:
            return {
                type: true
            };
        case SHOW_MATCHES:
            return {
                type: false
            };
        default:
            return state;
    }
};

export default navReducer;
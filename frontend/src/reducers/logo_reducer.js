import {
    SHOW_LOGO,
    HIDE_LOGO
} from '../actions/logo_actions';

const logoReducer = (state = {
    type: false
}, action) => {
    switch (action.type) {
        case SHOW_LOGO:
            return {
                type: true
            };
        case HIDE_LOGO:
            return {
                type: false
            };
        default:
            return state;
    }
};

export default logoReducer;
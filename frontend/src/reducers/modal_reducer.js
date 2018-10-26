import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modal_actions';

const modalsReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                modal: action.modal,
                pin: action.pin
            };
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalsReducer;
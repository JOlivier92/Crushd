import {
    combineReducers
} from 'redux';
import modalsReducer from './modal_reducer';
import logoReducer from './logo_reducer';

const uiReducer = combineReducers({
    modal: modalsReducer,
    logo: logoReducer
});

export default uiReducer;
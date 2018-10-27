import {
    combineReducers
} from 'redux';
import modalsReducer from './modal_reducer';
import logoReducer from './logo_reducer';
import navReducer from './nav_reducer';

const uiReducer = combineReducers({
    modal: modalsReducer,
    logo: logoReducer,
    nav: navReducer
});

export default uiReducer;
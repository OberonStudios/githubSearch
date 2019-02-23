import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userDataReducer';

export default combineReducers({
    form: formReducer,
    userData: userReducer
});
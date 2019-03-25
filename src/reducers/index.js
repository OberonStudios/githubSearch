import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userDataReducer';
import followersReducer from './followersReducer';

export default combineReducers({
    form: formReducer,
    userData: userReducer,
    followersData: followersReducer
});
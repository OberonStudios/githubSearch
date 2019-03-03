import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userDataReducer';
import userRepoReducer from './userRepoReducer';

export default combineReducers({
    form: formReducer,
    userData: userReducer,
    repoData: userRepoReducer
});
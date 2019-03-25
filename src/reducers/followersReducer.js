import { USER_FOLLOWERS } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case USER_FOLLOWERS:
            state = action.payload;
            return action.payload;

        default:
            return state;
    }
}
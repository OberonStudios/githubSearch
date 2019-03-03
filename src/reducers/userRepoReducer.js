import { USER_REPO } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case USER_REPO:
            state = action.payload;
            return action.payload;

        default:
            return state;
    }
}
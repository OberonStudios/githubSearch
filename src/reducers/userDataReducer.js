import { USER_DATA } from '../actions/types';

export default function(state = {}, action){
    console.log(action.payload)
    switch(action.type){
        case USER_DATA:
            state = action.payload;
            return action.payload;

        default:
            return state;
    }
}
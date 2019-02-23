import { USER_DATA } from './types';
import axios from 'axios';

export const fetchGithubUser = (user) => async (dispatch) => {
    console.log("fetching from actions", user);
    try{
        const url = `https://api.github.com/users/${user.username}`;
        const res = await axios.get(url);
        console.log(res.data);
        dispatch({type: USER_DATA, payload: res.data});
    }
    catch(err){
        console.log("Could not find user");
        dispatch({type: USER_DATA, payload: { data: "Could not find" }});
    }
};
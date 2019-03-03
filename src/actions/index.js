import { USER_DATA, USER_REPO } from './types';
import axios from 'axios';

export const fetchGithubUser = (user) => async (dispatch) => {
    console.log("fetching from actions", user);
    const userName = user.username;
    try{
        const url = `https://api.github.com/users/${userName}`;
        const res = await axios.get(url);

        const repoURL = `https://api.github.com/users/${userName}/repos`;
        const repoRes = await axios.get(repoURL);

        //console.log(res.data);
        dispatch({type: USER_DATA, payload: res.data});
        dispatch({type: USER_REPO, payload: repoRes.data });
    }
    catch(err){
        console.log("Could not find user", userName);
        alert(`Could not find user: ${userName}`);
    }
};
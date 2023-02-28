import * as api from '../api';


// Action creators
export const getPosts=()=>async (dispatch)=>{

    try {
        const {data} = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL',playload: data});
    } catch (error) {
        console.error(error.message);
    }
}

export const createPosts=(post)=> async (dispatch)=>{
    try {
        const {data} = await api.createPosts(post);
        dispatch({type: 'CREATE',playload: data});
    } catch (error) {
        console.log(error.message);
    }
}
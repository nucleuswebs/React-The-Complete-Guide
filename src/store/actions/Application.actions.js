import axios from 'axios';
import * as constanst from '../constants';

export const getPosts = () => {
    return ( dispatch ) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(( response ) => {
                dispatch({
                    type: constanst.GET_POSTS,
                    data: response.data
                })
            });
    };
};

export const getUsers = () => {
    return ( dispatch ) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(( response ) => {
                dispatch({
                    type: constanst.GET_USERS,
                    data: response.data
                })
            });
    }
};

export const getComments = () => {
    return ( dispatch ) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(( response ) => {
                dispatch({
                    type: constanst.GET_COMMENTS,
                    data: response.data
                })
            });
    }
};

export const setFilterValue = ( inputValue ) => {
    return ( dispatch ) => {
        dispatch({
            type: constanst.SET_FILTER_VALUE,
            data: inputValue
        })
    }
};

export const setSelectedPost = ( postId ) => {
    return ( dispatch ) => {
        dispatch({
            type: constanst.SET_SELECTED_POST,
            data: postId,
        })
    }
};

export const handleBackButton = () => {
    return ( dispatch ) => {
        dispatch({
            type: 'BACK_BUTTON_EVENT',
        })
    }
};
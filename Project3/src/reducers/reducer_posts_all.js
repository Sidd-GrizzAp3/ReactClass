import React from 'react'; 
import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE = {all: [], active: null};  // all the  blog posts and one active one 

export default  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case FETCH_POSTS: 
            return {...state, all: action.payload.data}; 
            break;
    
        default:
            return state;
            break;
    }
}
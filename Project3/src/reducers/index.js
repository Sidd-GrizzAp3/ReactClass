import {combineReducers} from 'redux'; 
import FetchPostsResponse from './reducer_posts_all'; 
import {reducer as formReducer } from 'redux-form'; 

const rootReducer = combineReducers({
     
        posts : FetchPostsResponse, 
        form:   formReducer // have to keep the key as 'form' 
    
}); 

export default rootReducer; 

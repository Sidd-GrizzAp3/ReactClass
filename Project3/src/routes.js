import React from 'react'; 
import {Router, IndexRoute} from 'react-router'; 

import App from './components/app'; 
import PostsIndex from './components/posts_index'; 


/**
 *  this basically states the following: 
 *  whenever path is "/" (root url) 
 *      => promps react to render the app 
 */
export default (
    <Router path="/" component={App}> 
        <IndexRoute  component={PostsIndex /* still a child of 
                                              the parent App */} /> 
    </Router>  
); 

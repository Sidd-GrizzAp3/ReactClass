import React from 'react'; 
import {Router, IndexRoute} from 'react-router'; 

// compoenents 
import App from './components/app'; 
import PostsIndex from './components/posts_index'; 
import PostsNew   from './components/posts_new';


/**
 *  this basically states the following: 
 *  whenever path is "/" (root url) 
 *      => promps react to render the app 
 */
export default (
    <Router path="/" component={App}> 
        <IndexRoute  component={PostsIndex /* still a child of 
                                              the parent App */} /> 
        <Router path="/posts/new" component={PostsNew} />
    </Router>


); 

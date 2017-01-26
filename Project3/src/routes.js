import React from 'react'; 
import { Route, IndexRoute} from 'react-router'; 

// compoenents 
import App from './components/app'; 
import PostsIndex from './components/posts_index'; 
import PostsNew   from './components/posts_new';
import PostsShow  from './components/posts_show';


/**
 *  this basically states the following: 
 *  whenever path is "/" (root url) 
 *      => promps react to render the app 
 */
export default (
    <Route path="/" component={App}> 
        <IndexRoute  component={PostsIndex /* still a child of 
            the parent App */} /> 
        <Route path="/posts/new"    component={PostsNew} />
        <Route path="/posts/:id"    component={PostsShow} /> 

    </Route>


); 

import React, {Component}       from 'react'; 
import {connect}                  from 'react-redux'; 
import {bindActionCreators}     from 'redux'; 
import {fetchPosts}             from '../actions/index';
import {Link}                   from 'react-router'; 
/**
 *  learning about component lifecycle 
 */
class PostsIndex extends Component {
    
    /**
     * ony is called ONCE right before the DOM 
     *  gets loaded with this visual or functional component 
     */
    componentWillMount() {
        this.props.fetchPosts(); 
    }
    render () {
        return (
            <div>
                <div className="text-md-right">
                    <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                    </Link>
                </div>
                List of Blog Posts
            </div>
        );
    }
};

/*
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({fetchPosts}, dispatch);
}
*/

export default connect (null, {fetchPosts})(PostsIndex); 
                    // above the passing of the object is the same as 
                        // using helper fucntion bindActionCreators
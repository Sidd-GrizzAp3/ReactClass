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

    renderPosts () {
        return this.props.posts.map((post) => {
            return (
                <li className="list-gorup-item" key={post.id}>
                  <Link to={`/posts/${post.id}`}> 
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                  </Link> 
                </li>
            );
        });
    }
    render () {
        return (
            <div>
                <div className="text-md-right">
                    <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group"> 
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
};

/*
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({fetchPosts}, dispatch);
}
*/

const mapStateToProps = (state) => {
    return { posts : state.posts.all }; 
}

export default connect (mapStateToProps, {fetchPosts})(PostsIndex); 
                    // above the passing of the object is the same as 
                        // using helper fucntion bindActionCreators
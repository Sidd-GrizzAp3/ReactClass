import React, { Component } from 'react'; 
import { connect }          from 'react-redux'; 
import { fetchPost, deletePost }        from '../actions/index';
import { Link }             from 'react-router';

class PostsShow extends Component {
    
    componentWillMount() {
        this.props.fetchPost(this.props.params.id); 
    }
    renderPost() {
        const { post } = this.props; 
        return (
            <div> 
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        ); 
    }
    
    onDeleteClick() {
        this.props.deletePost(this.props.params.id);
    }
    // lets use an ajax spinner type "loading!"
    render () {
        return (
            <div>
                <Link to={'/'}> Back To Index </Link>
                <button className= "btn btn-danger"
                 onClick=  {this.onDeleteClick.bind(this)}>
                    <strong>Delete</strong>
                </button>
                {!this.props.post ? <div>Loading... </div> : this.renderPost()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {post: state.posts.post};
}

export default connect (mapStateToProps, { fetchPost, deletePost }) (PostsShow); 
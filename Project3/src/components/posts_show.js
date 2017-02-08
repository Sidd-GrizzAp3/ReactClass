import React, { Component } from 'react'; 
import { connect }          from 'react-redux'; 
import { fetchPost }        from '../actions/index';

class PostsShow extends Component {
    
    componentWillMount() {
        this.props.fetchPost(this.props.params.id); 
    }
    renderPost() {
        return (
            <div> 
                <h3>{this.props.post.title}</h3>
                <h6>Categories: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        ); 
    }
    
    // lets use an ajax spinner type "loading!"
    render () {
        return (
            <div>
                {!this.props.post ? <div>Loading... </div> : this.renderPost()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {post: state.posts.post};
}

export default connect (mapStateToProps, { fetchPost }) (PostsShow); 
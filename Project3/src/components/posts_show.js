import React, { Component } from 'react'; 
import { connect }          from 'react-redux'; 

class PostsShow extends Component {
    
    renderPost() {
        console.log("yo check this out" + this.props.params.id);
        console.log(this.props.posts.all);
        this.props.posts.map((post) => {
           if ( post.id == this.props.params.id ){  
                console.log(post.title);
                return (
                    <div> 
                        {post.title}
                    </div>
                ); 
            }
        }); 
    }
    
    render () {
        return (
            <div>
                <h3>Show Post ID: {this.renderPost()}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts.all}; 
}


export default connect (mapStateToProps, null) (PostsShow); 
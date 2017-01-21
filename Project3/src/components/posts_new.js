import React, {Component}   from 'react'; 
import {bindActionCreators} from 'redux'; 
import {connect}            from 'react-redux'; 
import {reduxForm}          from 'redux-form';
import {createNewPost}      from '../actions/index'; 

class PostsNew extends Component {
    
   
    render () {
         const { fields: { title, categories, content } , handleSubmit} = this.props; 
         // same thing as const handSubmit = this.props.handleSubmit
    
        return(
            <form onSubmit={handleSubmit(this.props.createNewPost)}>
                <h3>Create A New Post </h3>
                
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />   
                    <div className="text-help"> 
                        {title.touched ? title.error : null }
                    </div>             
                </div>
                
                <div className="form-group">
                 <label>Categories</label>
                 <input type="text" className="form-control" {...categories} />                
                </div>
                
                <div className="form-group">
                 <label>Content</label>
                 <textarea type="text" className="form-control" {...content} />                
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        ); 
    }
} 


function validate (values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a title';
    }
    return errors; 
}

// connect: arguments: 1 mapStateToProps 2 mapDispatchToProps 
// reduxForm: 1st is config, mapStateToProps, 3rd is mapDispatchToProps 
export default reduxForm({
    form:   'PostsNewForm', 
    fields: ['title', 'categories', 'content'], 
    validate
    },
    null, 
    {createNewPost} // this it he action creator so yo'ur emapping this funciton's dispatch and props.  
)(PostsNew);



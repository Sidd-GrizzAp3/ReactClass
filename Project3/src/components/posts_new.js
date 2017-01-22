import React, { Component, PropTypes }   from 'react'; 
import { bindActionCreators } from 'redux'; 
import { connect }            from 'react-redux'; 
import { reduxForm }          from 'redux-form';
import { createNewPost }      from '../actions/index'; 
import { Link }             from 'react-router'; 

class PostsNew extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };


    onSubmit(props) {
            this.props.createNewPost(props) // once you get the promise resolved you actually get a resovled proise returned! 
            .then( () => {
                // blog post has been creaed, navitage the user to the index 
                // we navitage by calling this.context.router.push with the 
                // new path of the destination route 
                this.context.router.push('/'); 
            });                      
    }; 
    render () {
         const { fields: { title, categories, content } , handleSubmit} = this.props; 
         // same thing as const handSubmit = this.props.handleSubmit
        
        return(
            <form onSubmit= {handleSubmit( this.onSubmit.bind(this) ) }>
                <h3>Create A New Post </h3>
                
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger': '' }`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />   
                    <div className="text-help"> 
                        {title.touched ? title.error : null }
                    </div>             
                </div>
                
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': '' }`}>
                 <label>Categories</label>
                 <input type="text" className="form-control" {...categories} /> 
                 <div className="text-help"> 
                        {categories.touched ? categories.error : null }
                    </div>                  
                </div>
                
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger': '' }`}>
                 <label>Content</label>
                 <textarea type="text" className="form-control" {...content} /> 
                 <div className="text-help"> 
                        {content.touched ? title.error : null }
                    </div>                  
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className='btn btn-danger'> Cancel </Link> 
            </form>
        ); 
    }
} 


function validate (values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter a category'; 
    }   
    if (!values.content) {
        errors.content = 'Enter some content'; 
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



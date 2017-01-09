import React, { Component }     from 'react' 
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux' 
import { fetchWeather }         from '../actions/index'

class SearchBar extends Component {
    constructor (props) {
        super(props) 

        this.state = {term : ''} 
        //bind context to onInputChange
        //this.onInputChange = this.onInputChange.bind(this) 
    }
    render () {
         //create a controlled component  
        return (
            <div> 
                <form className='input-group'
                    onSubmit={this.onFormSubmit.bind(this)}
                >
                    <input 
                        placeholder='Get a five-day forceast in your favorite cities'
                        className = 'form-control' 
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)} 
                    /> 
                    <span className='input-group-btn'> 
                        <button type='submit' className='btn btn-secondary' > search </button> 
                    </span> 
                </form> 
            </div> 
        )
    }

    onInputChange (event) {
        this.setState( {term: event.target.value } )
    }

    onFormSubmit(event) {
        // stop the the browser from submitting 
        event.preventDefault(); 
        // lets me an actual request to our backend weather search api 
        //      via an action creater that we created 
        this.props.fetchWeather(this.state.term)
        // clear the search input via a setState 
        this.setState({term: ' '})

    }
} 

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({ fetchWeather } , dispatch) 
}

export default connect (null, mapDispatchToProps) (SearchBar)
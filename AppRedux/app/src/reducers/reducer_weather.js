import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action ) {
    switch (action.type) {
        case FETCH_WEATHER:
            // beweare of using mutating state 
            //      doNOT do this: sate.push(action.payload.data) 
            //option 1: return state.concat([ action.payload.data ])
            console.log(state)
            return [ action.payload.data, ... state]
        default:
            return state
    }
    
}
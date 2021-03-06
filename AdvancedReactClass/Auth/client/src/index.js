import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import redux_promise from 'redux-promise'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(redux_promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}> 
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))

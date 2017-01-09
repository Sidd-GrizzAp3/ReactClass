import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; 
import {Router, browserHistory } from 'react-router';

// routes import 
import routes from './routes'; 

/** 
 *  Router => tells the react app which compoents need to change/render 
 *  Browser hsitory => an object that tells react router how 
 *      how to interpret changes to the url 
 *      -   there are other history objects that can be used: i.e. hashHistory or 
 *              memory history 
 * 
 *  Thus not using the app just yet, letting the router define that for us 
 *    in the root url 
 */
    //import App from './components/app';  going to render app in asperate location 
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes={routes} /> 
  </Provider>
  , document.querySelector('.container'));

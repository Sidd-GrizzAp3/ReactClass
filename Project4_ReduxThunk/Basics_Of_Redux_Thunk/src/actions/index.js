import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  // we can return a plain javascript function 
  // via redux-thunk, instaed of a plain javascript object. 
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'FETCH_PROFILES', payload: data});
    });
  };
}

import request from '../../services/http';
import history from '../../history';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './types';

const login = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN });
  return request.auth(username, password)
    .post('/login')
    .send()
    .then((res) => {
      localStorage.setItem('jwt', res.body);
      dispatch({ type: LOGIN_SUCCESS });
      history.push('/');
    })
    .catch(err => dispatch({ type: LOGIN_ERROR, err }));
};

const logout = () => {
  localStorage.removeItem('jwt');
  return ({ type: LOGOUT, isAuthenticated: false });
};

export default {
  login,
  logout,
};


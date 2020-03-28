import request from '../../services/http';
import history from '../../history';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './types';

const login = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN });
  localStorage.removeItem('jwt');
  return request.post('/auth/local')
    .send({ identifier: username, password })
    .then((res) => {
      const { jwt, user } = res.body;
      localStorage.setItem('jwt', jwt);
      dispatch({ type: LOGIN_SUCCESS, value: user });
      history.push('/');
    })
    .catch(error => {
      const { body: err }  = error.response;
      dispatch({ type: LOGIN_ERROR, err })
    });
};

const logout = () => {
  localStorage.removeItem('jwt');
  return ({ type: LOGOUT, isAuthenticated: false });
};

const resetPassword = (code, password, passwordConfirmation) => (dispatch) => {
  dispatch({ type: RESET_PASSWORD });
  return request.post('/auth/reset-password')
    .send({ code, password, passwordConfirmation })
    .then((res) => {
      dispatch({ type: RESET_PASSWORD_SUCCESS });
      history.push('/login');
    })
    .catch(error => {
      const { body: err }  = error.response;
      dispatch({ type: RESET_PASSWORD_ERROR, err })
    });
};

const forgotPassword = (email) => (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD });
  return request.post('/auth/forgot-password')
    .send({ email })
    .then((res) => {
      dispatch({ type: FORGOT_PASSWORD_SUCCESS });
      history.push('/reset-password-infos');
    })
    .catch(error => {
      const { body: err }  = error.response;
      dispatch({ type: FORGOT_PASSWORD_ERROR, err })
    });
};

const register = (email, password) => (dispatch) => {
  dispatch({ type: REGISTER });
  return request.post('/auth/local/register')
    .send({ username: email, email, password })
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS });
      history.push('/register-infos');
    })
    .catch(error => {
      const { body: err }  = error.response;
      dispatch({ type: REGISTER_ERROR, err })
    });
};

export default {
  login,
  logout,
  resetPassword,
  forgotPassword,
  register,
};


import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  FORGOT_PASSWORD_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './types';

const INITIAL_STATE = {
  isAuthenticated: false,
  waiting: false,
  user: {},
};

const authReducer = (state = INITIAL_STATE, { type, err, value }) => {
  switch (type) {
    case LOGOUT:
      return { isAuthenticated: false };
    case LOGIN_ERROR:
    case REGISTER_ERROR:
    case RESET_PASSWORD_ERROR:
    case FORGOT_PASSWORD_ERROR:
      return {
        isAuthenticated: false,
        waiting: false,
        err,
      };
    case REGISTER_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_SUCCESS:
      return { isAuthenticated: false, waiting: false };
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, waiting: false, user: value };
    case LOGIN:
    case REGISTER:
    case RESET_PASSWORD:
    case FORGOT_PASSWORD:
      return {
        ...state,
        waiting: true,
      };
    default:
      return state;
  }
};

export default authReducer;

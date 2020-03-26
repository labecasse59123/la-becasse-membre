import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  RESET_PASSWORD_ERROR,
} from './types';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, { type, err }) => {
  switch (type) {
    case LOGOUT:
      return { isAuthenticated: false };
    case LOGIN_ERROR:
    case RESET_PASSWORD_ERROR:
      return {
        isAuthenticated: false,
        err,
      };
    case LOGIN_SUCCESS:
      return { isAuthenticated: true };
    case LOGIN:
    default:
      return state;
  }
};

export default authReducer;

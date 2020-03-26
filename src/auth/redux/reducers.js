import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD_ERROR,
  FORGOT_PASSWORD_ERROR,
} from './types';

const INITIAL_STATE = {
  isAuthenticated: false,
  waiting: false,
};

const authReducer = (state = INITIAL_STATE, { type, err }) => {
  switch (type) {
    case LOGOUT:
      return { isAuthenticated: false };
    case LOGIN_ERROR:
    case RESET_PASSWORD_ERROR:
    case FORGOT_PASSWORD_ERROR:
      return {
        isAuthenticated: false,
        waiting: false,
        err,
      };
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, waiting: false };
    case LOGIN:
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

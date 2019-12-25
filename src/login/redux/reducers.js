import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './types';

const INITIAL_STATE = {
  isAuthenticated: true,
};

const loginReducer = (state = INITIAL_STATE, { type, err }) => {
  switch (type) {
    case LOGOUT:
      return { isAuthenticated: false };
    case LOGIN_ERROR:
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

export default loginReducer;

import {
  HUNT_REGISTER,
  HUNT_REGISTER_SUCCESS,
  HUNT_REGISTER_ERROR,
  HUNT_UNREGISTER,
  HUNT_UNREGISTER_SUCCESS,
  HUNT_UNREGISTER_ERROR,
  HUNT_FETCH,
  HUNT_FETCH_SUCCESS,
  HUNT_FETCH_ERROR,

} from './types';

const INITIAL_STATE = {
  huntSessions: [],
  registerSuccess: false,
  unregisterSuccess: false,
};

const huntReducer = (state = INITIAL_STATE, { type, err, value }) => {
  switch (type) {
    case HUNT_REGISTER_ERROR:
    case HUNT_UNREGISTER_ERROR:
      return {
        ...state,
        err,
      };
    case HUNT_FETCH_SUCCESS:
      return {
        huntSessions: value,
      };
    case HUNT_FETCH_ERROR:
      return {
        huntSessions: [],
        err,
      };
    case HUNT_REGISTER_SUCCESS:
    case HUNT_UNREGISTER_SUCCESS:
    case HUNT_FETCH:
    case HUNT_REGISTER:
    case HUNT_UNREGISTER:
    default:
      return {
        ...state
      };
  }
};

export default huntReducer;

import {
  HUNT_REGISTER,
  HUNT_REGISTER_SUCCESS,
  HUNT_REGISTER_ERROR,
  HUNT_UNREGISTER,
  HUNT_UNREGISTER_SUCCESS,
  HUNT_UNREGISTER_ERROR,
  HUNT_COUNTER,
  HUNT_COUNTER_SUCCESS,
  HUNT_COUNTER_ERROR,

} from './types';

const INITIAL_STATE = {
  isRegistered: false,
  huntCounter: 2,
};

const huntReducer = (state = INITIAL_STATE, { type, err, value }) => {
  switch (type) {
    case HUNT_REGISTER_SUCCESS:
      return { ...state, isRegistered: true };
    case HUNT_REGISTER_ERROR:
      return {
        ...state,
        isRegistered: false,
        err,
      };
    case HUNT_UNREGISTER_SUCCESS:
      return { ...state, isRegistered: false };
    case HUNT_UNREGISTER_ERROR:
      return {
        ...state,
        isRegistered: true,
        err,
      };
    case HUNT_COUNTER_SUCCESS:
      return {
        ...state,
        huntCounter: value,
      };
    case HUNT_COUNTER_ERROR:
      return {
        ...state,
        huntCounter: 0,
      };
    case HUNT_COUNTER:
    case HUNT_REGISTER:
    case HUNT_UNREGISTER:
    default:
      return state;
  }
};

export default huntReducer;

import request from '../../services/http';
import {
  HUNT_REGISTER,
  HUNT_REGISTER_SUCCESS,
  HUNT_REGISTER_ERROR,
  HUNT_UNREGISTER,
  HUNT_UNREGISTER_SUCCESS,
  HUNT_UNREGISTER_ERROR,
} from './types';

const huntRegister = (duration) => (dispatch) => {
  dispatch({ type: HUNT_REGISTER });
  return request.post('/hunt')
    .send({ duration })
    .then((res) => {
      dispatch({ type: HUNT_REGISTER_SUCCESS });
    })
    .catch(err => dispatch({ type: HUNT_REGISTER_ERROR, err }));
};

const huntUnregister = (duration) => (dispatch) => {
  dispatch({ type: HUNT_UNREGISTER });
  return request.delete('/hunt')
    .send()
    .then((res) => {
      dispatch({ type: HUNT_UNREGISTER_SUCCESS });
    })
    .catch(err => dispatch({ type: HUNT_UNREGISTER_ERROR, err }));
};


export default {
  huntRegister,
  huntUnregister,
};


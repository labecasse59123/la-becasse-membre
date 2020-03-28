import moment from 'moment';
import request from '../../services/http';
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

const huntRegister = (duration) => (dispatch, getState) => {
  dispatch({ type: HUNT_REGISTER });
  const { user } = getState().auth;
  return request.post('/hunting-sessions')
    .send({ duration, user })
    .then((res) => {
      dispatch({ type: HUNT_REGISTER_SUCCESS });
      dispatch(huntFetch());
    })
    .catch(err => dispatch({ type: HUNT_REGISTER_ERROR, err }));
};

const huntUnregister = (duration) => (dispatch) => {
  dispatch({ type: HUNT_UNREGISTER });
  return request.delete('/hunting-sessions')
    .send()
    .then((res) => {
      dispatch({ type: HUNT_UNREGISTER_SUCCESS });
      dispatch(huntFetch());
    })
    .catch(err => dispatch({ type: HUNT_UNREGISTER_ERROR, err }));
};

const huntFetch = () => (dispatch) => {
  dispatch({ type: HUNT_FETCH });

  const todayBeg = moment().format('YYYY-MM-DD[T00:00:00.000Z]');
  const todayEnd = moment().format('YYYY-MM-DD[T23:59:59.999Z]');
  
  return request.get(`/hunting-sessions?createdAt_gte=${todayBeg}&createdAt_lte=${todayEnd}`)
    .then(res => {
      dispatch({ type: HUNT_FETCH_SUCCESS, value: res.body });
    })
    .catch(err => dispatch({ type: HUNT_FETCH_ERROR, err }));
};


export default {
  huntRegister,
  huntUnregister,
  huntFetch,
};


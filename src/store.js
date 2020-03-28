import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth/redux';
import huntReducer from './hunt/redux';
import documentReducer from './documents/redux';

const appReducer = combineReducers({
  auth: authReducer,
  hunt: huntReducer,
  document: documentReducer,
  form: formReducer,
});
const middlewares = [thunk];

const enhancers = compose(applyMiddleware(...middlewares));

const initialState = {};

export default createStore(appReducer, initialState, enhancers);

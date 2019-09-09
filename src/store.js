import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import loginReducer from './login/redux'

const appReducer = combineReducers({
  login: loginReducer,
  form: formReducer,
});
const middlewares = [thunk];

const enhancers = compose(applyMiddleware(...middlewares));

const initialState = {};

export default createStore(appReducer, initialState, enhancers);

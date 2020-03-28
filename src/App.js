import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route } from "react-router-dom";
import './App.css';
import store from './store';
import history from "./history";
import PrivateRoute from './containers/PrivateRoute';
import Home from './Home';
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgotPassword';
import ResetPasswordInfos from './auth/ResetPasswordInfos';
import Register from './auth/Register';
import RegisterInfos from './auth/RegisterInfos';
import Documents from './documents/Documents';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/documents" component={Documents} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/register-infos" component={RegisterInfos} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password-infos" component={ResetPasswordInfos} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

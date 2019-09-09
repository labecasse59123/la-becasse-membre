import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route } from "react-router-dom";
import './App.css';
import store from './store';
import history from "./history";
import PrivateRoute from './containers/PrivateRoute';
import Home from './Home';
import Login from './login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

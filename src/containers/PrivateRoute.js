import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
  }
};

export default connect(mapStateToProps)(PrivateRoute)
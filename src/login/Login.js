import { connect } from 'react-redux';

import { loginActions } from './redux';
import LoginForm from './LoginForm';

const mapStateToProps = state => {
  return {
    loginMessage: state.login.err,
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { username,  password } = values;
      dispatch(loginActions.login(username, password))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

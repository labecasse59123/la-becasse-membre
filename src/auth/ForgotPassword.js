import { connect } from 'react-redux';

import { authActions } from './redux';
import ForgotPasswordForm from './ForgotPasswordForm';

const mapStateToProps = state => {
  const { err, waiting } = state.auth;
  let errorMsg = null;
  if (err) {
    const { id } = err.message[0].messages[0];
    switch (id) {
        case 'Auth.form.error.email.format':
          errorMsg = 'Un email valide est requis';
          break;
        case 'Auth.form.error.user.not-exist':
          errorMsg = 'Email inconnu';
          break;
        default:
          errorMsg = 'Une erreur inconnue est survenue';
          break;
    }
  }
  return {
    errorMsg,
    waiting,
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { email } = values;
      dispatch(authActions.forgotPassword(email))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm);

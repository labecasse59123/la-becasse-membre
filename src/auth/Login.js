import { connect } from 'react-redux';

import { authActions } from './redux';
import LoginForm from './LoginForm';

const mapStateToProps = state => {
  const { err } = state.auth;
  let wrongEmailMsg = null;
  let wrongPasswordMsg = null;
  if (err) {
    const { id } = err.message[0].messages[0];
    switch (id) {
        case 'Auth.form.error.email.provide':
          wrongEmailMsg = 'L\'email est obligatoire';
          break;
        case 'Auth.form.error.password.provide':
          wrongPasswordMsg = 'Le mot de passe est obligatoire';
          break;
        case 'Auth.form.error.invalid':
          wrongEmailMsg = 'Email ou mot de passe incorrect';
          wrongPasswordMsg = 'Email ou mot de passe incorrect';
          break;
        case 'Auth.form.error.confirmed':
          wrongEmailMsg = 'Votre compte n\'a pas encore été validé';
          break;
        case 'Auth.form.error.blocked':
          wrongEmailMsg = 'Votre compte a été suspendu';
          break;
        default:
          wrongEmailMsg = 'Une erreur inconnue est survenue';
          wrongPasswordMsg = 'Une erreur inconnue est survenue';
          break;
    }
  }
  return {
    wrongPasswordMsg,
    wrongEmailMsg,
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { username,  password } = values;
      dispatch(authActions.login(username, password))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

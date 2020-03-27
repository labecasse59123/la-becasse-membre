import { connect } from 'react-redux';

import { authActions } from './redux';
import RegisterForm from './RegisterForm';

const mapStateToProps = state => {
  const { err, waiting } = state.auth;
  let wrongEmailMsg = null;
  let wrongPasswordMsg = null;
  if (err) {
    const { id } = err.message[0].messages[0];
    switch (id) {
        case 'Auth.form.error.email.provide':
          wrongEmailMsg = 'L\'email est obligatoire';
          break;
        case 'Auth.form.error.email.invalid':
          wrongEmailMsg = 'Email invalide';
          break;
        case 'Auth.form.error.password.provide':
          wrongPasswordMsg = 'Le mot de passe est obligatoire';
          break;
        case 'Auth.form.error.username.taken':
          wrongEmailMsg = 'Ce compte existe déjà';
          break;
        case 'Auth.form.error.invalid':
          wrongEmailMsg = 'Email ou mot de passe incorrect';
          wrongPasswordMsg = 'Email ou mot de passe incorrect';
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
    waiting,
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { email,  password } = values;
      dispatch(authActions.register(email, password))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

import { connect } from 'react-redux';

import { authActions } from './redux';
import ResetPasswordForm from './ResetPasswordForm';

const mapStateToProps = state => {
  const { err, waiting } = state.auth;
  let codeProvidedMsg = null;
  let passwordMissmatchMsg = null;
  if (err) {
    const { id } = err.message[0].messages[0];
    switch (id) {
        case 'Auth.form.error.code.provide':
          codeProvidedMsg = 'Le code de réinitialisation fournit est incorrect';
          break;
        case 'Auth.form.error.password.matching':
          passwordMissmatchMsg = 'Les deux mots de passe ne correspondent pas';
          break;
        case 'Auth.form.error.params.provide':
          passwordMissmatchMsg = 'Ce champs est obligatoire';
          break;
        default:
          passwordMissmatchMsg = 'Une erreur inconnue est survenue';
          break;
    }
  }
  return {
    codeProvidedMsg,
    passwordMissmatchMsg,
    waiting,
  }
};

const mapDispatchToProps = dispatch => {
  // onSubmit is given by redux-form HoC
  return {
    onSubmit: (values) => {
      const { code,  password, passwordConfirmation } = values;
      dispatch(authActions.resetPassword(code, password, passwordConfirmation))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordForm);

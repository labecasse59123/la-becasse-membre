import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';

import Link from '../layout/Link';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMsg: {
    color: theme.palette.error.main,
  },
}));

// hook that format query search params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPasswordForm(props) {
  const classes = useStyles();

  // handleSubmit is given by redux-form HoC
  const { handleSubmit, codeProvidedMsg, passwordMissmatchMsg, dispatch, change, waiting } = props;

  // retrieve code from URL
  const code = useQuery().get('code') || -1;
  // Way to had code as a hidden field
  dispatch(change('code', code));

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Réinitialiser son mot de passe
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Field
            name="password"
            component={({
                          input,
                          ...custom
                        }) => (
              <TextField
                error={!!passwordMissmatchMsg}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nouveau mot de Passe"
                type="password"
                id="password"
                helperText={passwordMissmatchMsg}
                {...input}
                {...custom}
              />
              )}
          />
          <Field
            name="passwordConfirmation"
            component={({
                          input,
                          ...custom
                        }) => (
              <TextField
                error={!!passwordMissmatchMsg}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passwordConfirmation"
                label="Confirmer le mot de Passe"
                type="password"
                id="passwordConfirmation"
                helperText={passwordMissmatchMsg}
                {...input}
                {...custom}
              />
              )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={waiting}
          >
            Réinitialiser
          </Button>
        </form>
        <p className={classes.errorMsg}>
          {codeProvidedMsg}
        </p>
      </div>
      <Link to="/login" label="Retour à l'authentification" />
    </Container>
  );
}

export default reduxForm({
  form: 'resetPassword',
})(ResetPasswordForm);

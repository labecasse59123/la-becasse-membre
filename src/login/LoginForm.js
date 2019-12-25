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
}));

function LoginForm(props) {
  const classes = useStyles();

  // handleSubmit is given by redux-form HoC
  const { handleSubmit, loginMessage } = props;
  const errorMessage = loginMessage ? 'Information invalide' : null;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          La Bécasse - Membre
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Field
            name="username"
            component={({
                          input,
                          ...custom
                        }) => (
              <TextField
                error={!!loginMessage}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Mail"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={errorMessage}
                {...input}
                {...custom}
              />
            )}
          />
          <Field
            name="password"
            component={({
                          input,
                          ...custom
                        }) => (
              <TextField
                error={!!loginMessage}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de Passe"
                type="password"
                id="password"
                helperText={errorMessage}
                autoComplete="current-password"
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
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default reduxForm({
  form: 'login',
})(LoginForm);

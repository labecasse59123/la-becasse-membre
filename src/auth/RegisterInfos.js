import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
}));

export default function RegisterInfos(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <InfoOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" paragraph>
          Enregistrement réussi !
        </Typography>
        <Typography variant="body1" paragraph>
          Un email avec un lien pour activer votre compte vous a été envoyé.<br/>
          Votre compte devra également être validé par l'administrateur.<br/>
        </Typography>
        <Typography variant="body1" paragraph>
          Vérifiez bien vos spam car le mail s'y trouve sûrement !
        </Typography>
      </div>
      <Link to="/login" label="Revenir à la page de login" />
    </Container>
  );
}

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './layout/Header';
import Hunt from './hunt/Hunt';
import HuntCounter from './hunt/HunterCounter';

const useStyles = makeStyles(theme => ({
  hunt: {
    marginTop: theme.spacing(12),
    width: '100%',
  },
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="La Bécasse - Espace Membre" />
      <div className={classes.hunt}>
        <HuntCounter {...props} />
        <Hunt {...props} />
      </div>
    </React.Fragment>
  );
}

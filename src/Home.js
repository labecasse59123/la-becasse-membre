import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './layout/Header';
import ResponsiveDrawer from './layout/ReponsiveDrawer';
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
  const [state, setState] = React.useState({
    openDrawer: false,
  });
  const toggleDrawer = () => setState(state => {return {openDrawer: !state.openDrawer}});

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="La Bécasse - Inscription Chasse" toggleDrawer={toggleDrawer} />
      <div className={classes.hunt}>
        <ResponsiveDrawer open={state.openDrawer} toggleDrawer={toggleDrawer} />
        <HuntCounter {...props} />
        <Hunt {...props} />
      </div>
    </React.Fragment>
  );
}

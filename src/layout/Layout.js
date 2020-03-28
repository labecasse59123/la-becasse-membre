import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import ResponsiveDrawer from './ReponsiveDrawer';

const useStyles = makeStyles(theme => ({
  view: {
    marginTop: theme.spacing(12),
    width: '100%',
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    openDrawer: false,
  });
  const { title, children } = props;
  const toggleDrawer = () => setState(state => {return {openDrawer: !state.openDrawer}});

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title={title} toggleDrawer={toggleDrawer} />
      <ResponsiveDrawer open={state.openDrawer} toggleDrawer={toggleDrawer} />
      <div className={classes.view}>
        {children}
      </div>
    </React.Fragment>
  );
}

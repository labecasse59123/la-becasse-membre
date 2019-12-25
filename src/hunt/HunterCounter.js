import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    huntCounter: state.hunt.huntCounter,
  }
};

const useStyles = makeStyles(theme => ({
  badge: {
    marginTop: theme.spacing(12),
  },
}));

function HunterCounter(props) {
  const classes = useStyles();
  const { huntCounter } = props;
  // Declare a new state variable, which we'll call "count"
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <div className={classes.badge}>
      <Chip
        icon={<FaceIcon/>}
        label={`${formattedDate}: ${huntCounter}/13`}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}

export default connect(
  mapStateToProps,
)(HunterCounter);

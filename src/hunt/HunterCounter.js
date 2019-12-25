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

  return (
    <div className={classes.badge}>
      <Chip
        icon={<FaceIcon/>}
        label={`${huntCounter}/13`}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}

export default connect(
  mapStateToProps,
)(HunterCounter);

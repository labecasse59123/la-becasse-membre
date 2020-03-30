import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  badge: {
    marginTop: theme.spacing(12),
  },
}));

export default function HunterCounter(props) {
  const classes = useStyles();
  const { huntCounter } = props;
  const today = moment().format('DD/MM');

  return (
    <div className={classes.badge}>
      <Chip
        icon={<FaceIcon/>}
        label={`${today} - ${huntCounter}/13`}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}

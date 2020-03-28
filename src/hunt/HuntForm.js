import React, { useEffect } from 'react';
import {Field, reduxForm} from 'redux-form'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  badge: {
    marginTop: theme.spacing(12),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function HuntForm(props) {
  // handleSubmit is given by redux-form HoC
  const {handleSubmit, isRegistered, duration, fetchHunt} = props;
  const classes = useStyles();

  // We load the data from the API (componentDidMount equivalent)
  useEffect(() => fetchHunt(), [fetchHunt]);

  if(isRegistered) {
    let slot;
    switch (duration) {
      case 'morning':
        slot = 'Matinée';
        break;
      case 'afternoon':
        slot = 'Après-midi';
        break;
      default:
        slot = 'Journée';
        break;
    }

    return (
      <div className={classes.paper}>
        <Typography gutterBottom>
          Vous êtes enregistré aujourd'hui sur le créneau : {slot}.
        </Typography>
      </div>
    )
  }

  const radioButton = ({input, ...rest}) => (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Dunes du Perroquet</FormLabel>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="morning" control={<Radio/>} label="Matin"/>
        <FormControlLabel value="afternoon" control={<Radio/>} label="Après-midi"/>
        <FormControlLabel value="day" control={<Radio/>} label="Journée"/>
      </RadioGroup>
    </FormControl>
  );

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid item xs={12} sm={8}>
            <Field name="duration" component={radioButton}>
            </Field>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            S'enregistrer
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default reduxForm({
  form: 'hunt',
})(HuntForm);

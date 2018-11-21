import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ResetButton from './reset_button';

const afterformStyle = afterformStyle => ({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#191919',
    width: '100%',
    height: '730px',
    marginTop: '-3%'
  },
  textHeader: {
    marginTop: '15%',
    fontSize: '60px',
    fontFamily: 'Montserrat',
    color: '#005b96'
  },
  textContent: {
    fontSize: '20px',
    fontFamily: 'Montserrat',
    color: '#e5e5e5',
    marginBottom: '10%'
  },
  progress: {
    color: '#005b96',
  },
});

AfterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

function AfterForm(props) {
  const { classes } = props;
  let showButton;
  let showCircle;

  if (props.onReset) {
    showButton = <ResetButton page="/select_details" text="go discover" onReset={props.onReset} />;
  };

  if (props.loading) {
    showCircle = <CircularProgress className={classes.progress} size={100} thickness={5} />
  }


  return (
    <div className={classes.container}>
      <p className={classes.textHeader}>{props.textHeader}</p>
      <p className={classes.textContent}>{props.textContent}</p>
      <div>{showCircle}</div>
      <div>{showButton}</div>
    </div>
  )
}

export default withStyles(afterformStyle)(AfterForm);

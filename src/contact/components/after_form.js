import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const afterformStyle = afterformStyle => ({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#191919',
    width: '100%',
    height: '710px',
  },
  textHeader: {
    marginTop: '8%',
    fontSize: '60px',
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: '#4A7023'
  },
  textContent: {
    fontSize: '20px',
    fontFamily: 'Montserrat',
    color: '#e5e5e5',
    marginBottom: '10%'
  },
  button: {
    height: '50px',
    width: '160px',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#F0FFF0'
  },
  progress: {
    color: '#4A7023',
  },
});

function AfterForm(props) {
  const { classes } = props;
  let showButton;
  let showCircle;

  if (props.onReset) {
    showButton =
      <Button onClick={props.onReset} className={classes.button} size="large" variant="contained">
        <Link className={classes.links} to="/select_details">GO BACK</Link>
      </Button>
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

AfterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(afterformStyle)(AfterForm);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const resetStyle = resetStyle => ({
  button: {
    margin: resetStyle.spacing.unit,
    color: resetStyle.palette.getContrastText('#B6AD5F'),
    backgroundColor: '#03396c',
    '&:hover': {
      backgroundColor: "#011f4b",
    },
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
    textDecoration: 'none',
    color: '#e5e5e5',
  },
});

ResetButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

function ResetButton(props) {
  const { classes } = props;
  return (
    <Grid className={classes.buttonContainer} container spacing={16} justify={props.position}>
      <Button onClick={props.onReset} className={classes.button} size="large" variant="contained">
        <Link className={classes.links} to={props.page}>{props.text}</Link>
      </Button>
    </Grid>
  );
};

export default withStyles(resetStyle)(ResetButton);

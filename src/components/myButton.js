import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const buttonStyle = buttonStyle => ({
  buttonContainer: {
    display: 'flex',
    flexWrap: 'warp'
  },
  button: {
    margin: buttonStyle.spacing.unit,
    backgroundColor: '#7D2C1A',
    '&:hover': {
      backgroundColor: "#7D1C05",
    },
  },
  noVariantButton: {
    margin: buttonStyle.spacing.unit,
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: "black",
    },
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#cccccc'
  },
  linksWithoutVariant: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#cccccc',
    '&:hover': {
      color: "#7D2C1A",
    },
  }
});

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

function MyButton(props) {
  const { classes } = props;

  let button;
  if (props.noVariant === "noVariant") {
    button =
    <Button onClick={props.sendFetch} size="medium" className={classes.noVariantButton}>
      <Link className={classes.linksWithoutVariant} to={props.page}>
        {props.text}
      </Link>
    </Button>
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.buttonContainer} container spacing={8} justify={props.position}>
        {button}
      </Grid>
    </div>
  );
};

export default withStyles(buttonStyle)(MyButton);

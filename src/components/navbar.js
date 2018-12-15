import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const navBarStyle = navBarStyle => ({
  root: {
    flexGrow: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  logoGridHolder: {
    width: '50%',
    minWidth: '50%',
    paddingTop: '1.5%',
    paddingBottom: '1%',
    paddingLeft: '7%'
  },
  logoTitle: {
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: '800',
    color: '#4A7023',
  },
  buttonsGridHolder: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '1%',
    width: '50%',
    minWidth: '50%',
  },
  button: {
    marginLeft: '3%',
    height: '40px',
    width: '140px',
    borderRadius: '8px',
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#C1CDC1',
    '&:hover': {
      color: "#00611C",
    },
  }
});

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.logoGridHolder} item>
        <b className={classes.logoTitle}>Electronify</b>
      </Grid>
      <Grid className={classes.buttonsGridHolder} item>
        <Button position="center" size="medium" className={classes.button}>
          <Link className={classes.links} to={props.pageOne}>{props.textOne}</Link>
        </Button>
        <Button position="center" size="medium" className={classes.button}>
          <Link className={classes.links} to={props.pageTwo}>{props.textTwo}</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default withStyles(navBarStyle)(NavBar)

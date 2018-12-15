import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '705px',
    backgroundColor: '#0c0c0c'
  },
  gridsHolder: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
  },
  electronify: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8%'
  },
  electronifyTitle: {
    fontFamily: 'Roboto',
    fontSize: '160px',
    fontWeight: '800',
    color: '#4A7023',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '25px',
    fontWeight: '400',
    color: '#C1CDC1',
    marginTop: '5%'
  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    height: '50px',
    width: '160px',
    backgroundColor: '#4A7023',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: "#00611C",
    },
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#F0FFF0'
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.gridsHolder} container spacing={24}>
        <Grid className={classes.electronify} item xs={12}>
          <b className={classes.electronifyTitle}>Electronify</b>
          <b className={classes.subTitle}>A playlist generator for electronic music lovers.</b>
        </Grid>
        <Grid className={classes.buttonHolder} item xs={12}>
          <Button position="center" size="medium" className={classes.button}>
            <Link className={classes.links} to="/login">GET STARTED</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);

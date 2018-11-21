import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from './logo';
import MyButton from './myButton';

const navBarStyle = navBarStyle => ({
  root: {
    flexGrow: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor:'black'
  },
  logoGridHolder: {
    width: '75%',
    minWidth: '75%',
    backgroundColor: '#191919',
  },
  logoGrid: {
    paddingTop: '2%',
    paddingBottom: '1%',
    paddingLeft: '10%'
  },
  buttonsGridHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '25%',
    minWidth: '25%',
    backgroundColor: '#191919',
  },
  buttonsGrid: {
    display: 'flex',
    flexWrap: 'wrap'
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
        <Grid className={classes.logoGrid} item >
          <Logo />
        </Grid>
      </Grid>

      <Grid className={classes.buttonsGridHolder} item>
        <Grid className={classes.buttonsGrid} item >
          <MyButton noVariant="noVariant" page={props.pageOne} text={props.textOne} position="center" />
          <MyButton noVariant="noVariant" page={props.pageTwo} text={props.textTwo} position="center" />
        </Grid>
      </Grid>

    </div>
  );
};

export default withStyles(navBarStyle)(NavBar)

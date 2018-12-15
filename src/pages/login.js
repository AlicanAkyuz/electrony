import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavBar from '../components/navbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '705px',
    backgroundColor: '#000'
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  textsHolder: {
    width: '100%',
    textAlign: 'center',
    marginTop: '5%',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: '70px',
    fontWeight: '800',
    color: '#CFDBC5'
  },
  contentText: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '400',
    color: '#CFDBC5'
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#cccccc'
  },
  spotify_logo: {
    width: "245px",
    height: "190px"
  },
});

function Login(props) {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid className={classes.containerGrid} container>

          <Grid className={classes.navBarHolder} item xs={12}>
            <NavBar pageOne="/about" textOne="ABOUT" pageTwo="/contact" textTwo="CONTACT" />
          </Grid>

          <Grid className={classes.textsHolder} item>
            <h1 className={classes.titleText}>
              How it works?
            </h1>
            <h3 className={classes.contentText}>
              We ask you 9 questions to help you specify the kind of vibes you are looking for. <br /> <br />
              We then generate the best playlist depending on your choices. <br /> <br />
              We work with Spotify. So, go ahead and login by clicking the logo below!
            </h3>
          </Grid>

          <IconButton onClick={() => window.location = 'http://localhost:3000/login'} className={classes.iconButton}>
            <img className={classes.spotify_logo} src="./spotify.gif" alt="Spotify Logo" />
          </IconButton>

        </Grid>
      </div>
    );

};

export default withStyles(styles)(Login);

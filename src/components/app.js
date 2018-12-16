import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    marginTop: '7%'
  },
  electronifyTitle: {
    fontFamily: 'Roboto',
    fontSize: '140px',
    fontWeight: '800',
    color: '#4A7023',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '25px',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  explanation: {
    marginTop: '5%',
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '400',
    color: '#CFDBC5'
  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    height: '45px',
    width: '150px',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontWeight: '400',
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
          <b className={classes.explanation}>
            Electronify guides you to specify the kind of electronic tunes you love.
            and creates a playlist based on your choices. <br /> <br />
            Electronify works for Spotify. Go ahead and login to get started.
          </b>
        </Grid>

        <Grid className={classes.buttonHolder} item xs={12}>
          <Button onClick={() => window.location = 'http://localhost:3000/login'} size="medium" className={classes.button}>
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);

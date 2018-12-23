import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '10% 25% 17% 7% 15% 10% 10% 5%',
    gridTemplateColumns: '10% 10% 10% 40% 10% 10% 10%',
    backgroundColor: '#0c0c0c'
  },
  electronyItem: {
    gridRow: '2 / span 1',
    gridColumn: '2 / span 5',
    placeSelf: 'center'
  },
  subtextItem: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 5',
    placeSelf: 'center'
  },
  explanationItem: {
    gridRow: '5 / span 1',
    gridColumn: '2 / span 5',
    placeSelf: 'center',
    textAlign: 'center',
  },
  buttonItem: {
    gridRow: '6 / span 1',
    gridColumn: '3 / span 3',
    placeSelf: 'center'
  },
  copyrightItem: {
    gridRow: '8 / span 1',
    gridColumn: '4 / span 1',
    placeSelf: 'center'
  },
  electronyTitle: {
    fontFamily: 'Roboto',
    fontSize: '11vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '1.8vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  explanation: {
    fontFamily: 'Montserrat',
    fontSize: '1.6vmax',
    fontWeight: '400',
    color: '#838B83'
  },
  button: {
    height: '2.9em',
    width: '9em',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Montserrat',
    fontSize: '1.4vmax',
    fontWeight: '800',
    color: '#C1CDC1'
  },
  copyright: {
    fontFamily: 'Montserrat',
    fontSize: '0.8vmax',
    fontWeight: '400',
    color: '#838B83'
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.electronyItem}>
        <div class="animated fadeInRightBig">
          <p className={classes.electronyTitle}>Electrony</p>
        </div>
      </div>
      <div className={classes.subtextItem}>
        <div class="animated fadeInLeftBig">
          <p className={classes.subTitle}>A playlist creator for electronic music lovers</p>
        </div>
      </div>
      <div className={classes.explanationItem}>
        <div class="animated fadeInUpBig delay-1s">
          <p className={classes.explanation}>To continue, login to Spotify.</p>
        </div>
      </div>
      <div className={classes.buttonItem}>
          <div class="animated fadeInUpBig delay-1s">
            <button onClick={() => window.location = 'http://localhost:3000/login'} size="medium" className={classes.button}>GET STARTED</button>
          </div>
        </div>
      <div className={classes.copyrightItem}>
        <div class="animated flip">
          <p className={classes.copyright}>©Copyright 2018 Alican Akyuz</p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);

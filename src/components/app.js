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
  electronifyItem: {
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
  electronifyTitle: {
    fontFamily: 'Roboto',
    fontSize: '10.7vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '2.3vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  explanation: {
    fontFamily: 'Montserrat',
    fontSize: '1.7vmax',
    fontWeight: '400',
    color: '#838B83'
  },
  button: {
    height: '2.0em',
    width: '5.5em',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    border: 'none',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Roboto',
    fontSize: '1.5vmax',
    fontWeight: '400',
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
      <div className={classes.electronifyItem}>
        <div class="animated fadeInDownBig delay-1s">
          <p className={classes.electronifyTitle}>Electronify</p>
        </div>
      </div>
      <div className={classes.subtextItem}>
        <div class="animated fadeInLeftBig">
          <p className={classes.subTitle}>A trailblazer for electronic music lovers</p>
        </div>
      </div>
      <div className={classes.explanationItem}>
        <div class="animated fadeInRightBig">
          <p className={classes.explanation}>To continue, login to Spotify.</p>
        </div>
      </div>
      <div className={classes.buttonItem}>
        <div class="animated fadeInUpBig delay-1s">
          <button onClick={() => window.location = 'http://localhost:3000/login'} size="medium" className={classes.button}>LOGIN</button>
        </div>
        </div>
      <div className={classes.copyrightItem}>
        <div class="animated tada delay-2s">
          <p className={classes.copyright}>@Created by Alican Akyuz, 2018</p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);

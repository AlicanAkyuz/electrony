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
    gridColumn: '2 / span 5',
    gridRow: '2 / span 1',
    placeSelf: 'center'
  },
  subtextItem: {
    gridColumn: '2 / span 5',
    gridRow: '3 / span 1',
    placeSelf: 'center'
  },
  explanationItem: {
    gridColumn: '2 / span 5',
    gridRow: '5 / span 1',
    placeSelf: 'center',
    textAlign: 'center',
  },
  buttonItem: {
    gridColumn: '4 / span 1',
    gridRow: '6 / span 1',
    placeSelf: 'center'
  },
  copyrightItem: {
    gridColumn: '4 / span 1',
    gridRow: '8 / span 1',
    placeSelf: 'center'
  },
  electronifyTitle: {
    fontFamily: 'Roboto',
    fontSize: '12.5vw',
    fontWeight: '800',
    color: '#4A7023',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '2.5vw',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  explanation: {
    fontFamily: 'Montserrat',
    fontSize: '1.8vw',
    fontWeight: '400',
    color: '#838B83'
  },
  button: {
    height: '2.5em',
    width: '5.5em',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    border: 'none',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Roboto',
    fontSize: '1.5vw',
    fontWeight: '400',
    color: '#C1CDC1'
  },
  copyright: {
    fontFamily: 'Montserrat',
    fontSize: '0.8vw',
    fontWeight: '400',
    color: '#838B83'
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.electronifyItem}>
        <p className={classes.electronifyTitle}>Electronify</p>
      </div>
      <div className={classes.subtextItem}>
        <p className={classes.subTitle}>A trailblazer for electronic music lovers</p>
      </div>
      <div className={classes.explanationItem}>
        <p className={classes.explanation}>To continue, login to Spotify.</p>
      </div>
      <div className={classes.buttonItem}>
        <button onClick={() => window.location = 'http://localhost:3000/login'} size="medium" className={classes.button}>LOGIN</button>
      </div>
      <div className={classes.copyrightItem}>
        <p className={classes.copyright}>@Created by Alican Akyuz, 2018</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);

import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    gridColumn: '2 / span 5',
    placeSelf: 'center'
  },
  ////////////////////////// ITEMs //////////////////////////
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
  margin: {
   margin: theme.spacing.unit,
   borderRadius: '3px',
   backgroundColor: "#00611C",
   '&:hover': {
     backgroundColor: "#4A7023",
   },
   color: '#C1CDC1',
   fontFamily: 'Montserrat',
   fontWeight: '800'
 },
  copyright: {
    fontFamily: 'Montserrat',
    fontSize: '0.8vmax',
    fontWeight: '400',
    color: '#838B83'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontSize: '0.9vmax',
    fontWeight: '400',
    color: '#9ba29b',
    '&:hover': {
      color: "#00611C",
    },
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '0.8vmax',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#9ba29b',
    '&:hover': {
      color: "#00611C",
    },
  },
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.electronyItem}>
        <div class="animated fadeInRightBig">
          <Typography className={classes.electronyTitle}>Electrony</Typography>
        </div>
      </div>
      <div className={classes.subtextItem}>
        <div class="animated fadeInLeftBig">
          <Typography className={classes.subTitle}>A playlist creator for electronic music lovers</Typography>
        </div>
      </div>
      <div className={classes.explanationItem}>
        <div class="animated fadeInUpBig delay-1s">
          <Typography className={classes.explanation}>To continue, login to Spotify.</Typography>
        </div>
      </div>
      <div className={classes.buttonItem}>
          <div class="animated fadeInUpBig delay-1s">
            <Button variant="contained" color="primary" className={classes.margin}
                    onClick={() => window.location = 'https://electrony.herokuapp.com/login'}>
              GET STARTED
            </Button>
          </div>
        </div>
      <div className={classes.copyrightItem}>
        <div class="animated fadeInUpBig delay-1s">
          <Typography className={classes.copyright}>©Copyright 2018,
            <a className={classes.link} href="http://alicanakyuz.tech/" target="_blank" rel="noopener noreferrer">&nbsp; Alican Akyuz</a>
            <Button position="center" size="medium"><Link className={classes.links} to="/about">•&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ABOUT</Link></Button>
            <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">•&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TEAM</Link></Button>
            <Button position="center" size="medium"><Link className={classes.links} to="/contact">•&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CONTACT</Link></Button>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);

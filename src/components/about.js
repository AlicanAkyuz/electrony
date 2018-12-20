import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '10% 5% 8% 1% 2% 60% 14%',
    gridTemplateColumns: '5% 8% 2% 8% 2% 8% 34% 8% 2% 8% 2% 8% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 3',
    placeSelf: 'center',
    paddingTop: '5%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '10 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '12 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  aboutTitleItem: {
    gridRow: '3 / span 1',
    gridColumn: '7 / span 1',
    placeSelf: 'center',
  },
  hr: {
    gridRow: '4 / span 1',
    gridColumn: '7 / span 1',
    placeSelf: 'center'
  },
  aboutItem: {
    gridRow: '6 / span 1',
    gridColumn: '4 / span 7',
    placeSelf: 'center'
  },
//////////////////////////////////////////
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  aboutTitle: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '2.8vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  about: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  }
});

export function About(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.logoItem}>
        <p className={classes.logo}>Electronify</p>
      </div>
      <div className={classes.firstButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
      </div>
      <div className={classes.secondButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
      </div>
      <div className={classes.thirdButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>
      <div className={classes.aboutTitleItem}>
        <p className={classes.aboutTitle}>About</p>
      </div>
      <div className={classes.hr}>
        <hr style={{width: '8.5em'}} />
      </div>
      <div className={classes.aboutItem}>
        <p className={classes.about}>
          Electronify celebrates electronic music. Not only as an aesthetic field, but also 

          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          <br /><br />
          Electronify is an app that curates music according to the complexities that informs human aural perception.
          We believe that classifying music according to genres is archaic.
          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          <br /><br />
          Electronify is an app that curates music according to the complexities that informs human aural perception.
          We believe that classifying music according to genres is archaic.
          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          <br /><br />
          Electronify is an app that curates music according to the complexities that informs human aural perception.
          We believe that classifying music according to genres is archaic.
          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
        </p>
      </div>
    </div>
  )
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

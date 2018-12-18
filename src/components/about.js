import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    height: '170vh',
    gridTemplateRows: '6% 2% 5% 3% 30% 2% 5% 3% 2% 10% 1% 5% 1% 17% 4%',
    gridTemplateColumns: '5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 4',
    placeSelf: 'center',
    paddingTop: '13%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '15 / span 3',
    placeSelf: 'center',
    paddingTop: '13%',
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '18 / span 2',
    placeSelf: 'center',
    paddingTop: '18%'
  },
  aboutTitleItem: {
    gridRow: '3 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center',
  },
  hr: {
    gridRow: '4 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center'
  },
  aboutItem: {
    gridRow: '5 / span 1',
    gridColumn: '4 / span 14',
    placeSelf: 'center'
  },
  teamTitleItem: {
    gridRow: '7 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center',
  },
  secondHr: {
    gridRow: '8 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center'
  },
  firstAvatarItem: {
    gridRow: '10 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondAvatarItem: {
    gridRow: '10 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdAvatarItem: {
    gridRow: '10 / span 1',
    gridColumn: '15 / span 4',
    placeSelf: 'center'
  },
  firstNameItem: {
    gridRow: '12 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondNameItem: {
    gridRow: '12 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdNameItem: {
    gridRow: '12 / span 1',
    gridColumn: '15 / span 4',
    placeSelf: 'center'
  },
  firstBackgroundItem: {
    gridRow: '14 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondBackgroundItem: {
    gridRow: '14 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdBackgroundItem: {
    gridRow: '14 / span 1',
    gridColumn: '15 / span 4',
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
    fontSize: '1.1vmax',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#C1CDC1',
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
  },
  teamTitle: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '2.8vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  avatar: {
    width: '12.5vmax',
    height: 'auto',
    borderRadius: '50%'
  },
  names: {
    fontFamily: 'Roboto',
    fontSize: '1.2vmax',
    fontWeight: '800',
    color: '#C1CDC1',
  },
  github_logo: {
    width: "3vmax",
    height: "auto",
    borderRadius: '25px',
    backgroundColor: '#0c0c0c',
    '&:hover': {
      backgroundColor: "#323232",
    },
  },
  background: {
    fontFamily: 'Montserrat',
    fontSize: '1vmax',
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
        <div class="animated infinite flash">
          <Button position="center" size="medium">
            <Link className={classes.links} to="/select_details">GET STARTED</Link>
          </Button>
        </div>
      </div>
      <div className={classes.secondButtonItem}>
        <Button position="center" size="medium">
          <Link className={classes.links} to="/contact">CONTACT</Link>
        </Button>
      </div>
      <div className={classes.aboutTitleItem}>
        <p className={classes.aboutTitle}>About</p>
      </div>
      <div className={classes.hr}>
        <hr style={{width: '8.5em'}} />
      </div>
      <div className={classes.aboutItem}>
        <p className={classes.about}>
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
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
        </p>
      </div>
      <div className={classes.teamTitleItem}>
        <p className={classes.teamTitle}>Our Team</p>
      </div>
      <div className={classes.secondHr}>
        <hr style={{width: '11.5em'}} />
      </div>
      <div className={classes.firstAvatarItem}>
        <Avatar alt="tansu_pic" src="./tansupic.png" className={classes.avatar} />
      </div>
      <div className={classes.secondAvatarItem}>
        <Avatar alt="alican_pic" src="./alican.jpg" className={classes.avatar} />
      </div>
      <div className={classes.thirdAvatarItem}>
        <Avatar alt="tolga_pic" src="./tolga.jpg" className={classes.avatar} />
      </div>
      <div className={classes.firstNameItem}>
        <p className={classes.names}>Mehmet Tansu Isikli</p>
      </div>
      <div className={classes.secondNameItem}>
        <p className={classes.names}>Alican Akyuz</p>
      </div>
      <div className={classes.thirdNameItem}>
        <p className={classes.names}>Tolga Akyuz</p>
      </div>
      <div className={classes.firstBackgroundItem}>
        <p className={classes.background}>
          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
        </p>
      </div>
      <div className={classes.secondBackgroundItem}>
        <p className={classes.background}>
          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
        </p>
      </div>
      <div className={classes.thirdBackgroundItem}>
        <p className={classes.background}>
          Genres do not address the multifaceted aesthetic connection we establish with sound and music.
          Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
          Make your choices in 10 steps to specify the tunes you love.
          We will curate a playlist that will surprise your ears.
        </p>
      </div>
    </div>
  )
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

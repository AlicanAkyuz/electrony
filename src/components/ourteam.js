import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '10% 5% 8% 1% 3% 25% 5% 2% 35% 6%',
    gridTemplateColumns: '5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 7% 3%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 4',
    placeSelf: 'center',
    paddingTop: '5%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '14 / span 2',
    placeSelf: 'center',
    paddingTop: '13%',
    paddingLeft: '10%',
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '16 / span 2',
    placeSelf: 'center',
    paddingTop: '13%',
    paddingLeft: '10%',
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '18 / span 2',
    placeSelf: 'center',
    paddingTop: '10%',
    paddingLeft: '10%',
  },
  teamTitleItem: {
    gridRow: '3 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center',
  },
  hr: {
    gridRow: '4 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center'
  },



  firstAvatarItem: {
    gridRow: '6 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondAvatarItem: {
    gridRow: '6 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdAvatarItem: {
    gridRow: '6 / span 1',
    gridColumn: '15 / span 4',
    placeSelf: 'center'
  },

  firstNameItem: {
    gridRow: '7 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondNameItem: {
    gridRow: '7 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdNameItem: {
    gridRow: '7 / span 1',
    gridColumn: '15 / span 4',
    placeSelf: 'center'
  },

  firstBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdBackgroundItem: {
    gridRow: '9 / span 1',
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
    fontSize: '1.2vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
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
  background: {
    fontFamily: 'Montserrat',
    fontSize: '1vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  }
});

export function OurTeam(props) {
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
        <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
      </div>
      <div className={classes.thirdButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>

      <div className={classes.teamTitleItem}>
        <p className={classes.teamTitle}>Our Team</p>
      </div>
      <div className={classes.hr}>
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

OurTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurTeam);

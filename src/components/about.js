import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '10% 5% 8% 3% 6% 50% 18%',
    gridTemplateColumns: '5% 8% 2% 8% 2% 8% 34% 8% 2% 8% 2% 8% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 3',
    placeSelf: 'center',
    paddingTop: '10%'
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
    fontSize: '3.2vmax',
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
    fontFamily: 'Montserrat',
    fontSize: '2.8vmax',
    fontWeight: '800',
    color: '#C1CDC1',
  },
  about: {
    fontFamily: 'Roboto',
    fontSize: '1.3vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  }
});

export function About(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.logoItem}>
        <p className={classes.logo}>Electrony</p>
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
        <div class="animated fadeIn">
          <p className={classes.about}>
            Electrony celebrates electronic music. Not only as an aesthetic field, but also as a space for a
            community of people who find an identity in their electronic sonic experience, Electrony is designed
            to extend the reach of electronic music to people from all backgrounds, ages, and lifestyles.
            <br /><br />
            Our service provides a set of musical parameters—genre, danceability, energy, key, loudness, mode,
            tempo, and positiveness—which a user draws upon to specify the kind of electronic music they are seeking.
            In the background, Electrony evaluates the choices of the user to find electronic music tracks that
            closely correspond to the quest of the user. Electrony then curates a list of tracks which can finally
            be uploaded to the user's Spotify account.
            <br /><br />
            Our ears are capable of hearing sound frequencies from approximately 20 to 20,000 Hertz (Hz). Yet,
            historically, the expressions of sounds have been squeezed in by the capacity of acoustic instruments
            such that a piano, for example, could not produce sounds at the frequency of 450 Hz, since its 49th key
            is designed to produce 440 Hz and its 50th key 466.164 Hz. What happens, then, to sounds at 450 or 451 Hz?
            Hence, our aural experience has been limited by the capacity of acoustic instruments when it came to music.
            <br /><br />
            Electronic music is not limited to particular designs of musical instruments and therefore brings
            liberations to sounds by making possible for each of them to vibrate through the air and reach to
            the human ear. With electronic music, the only restriction between the artist and the audience is the
            imagination of both.
            <br /><br />
            “I'm always interested when other musicians are trying to discover new worlds of sound.”
            <br />— Karlheinz Stockhausen
          </p>
      </div>
      </div>
    </div>
  )
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

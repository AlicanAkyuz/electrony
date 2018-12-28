import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '10vmin 10vmin 2vmin 2vmin 35vmin 3vmin',
    gridTemplateColumns: '10% 10% 5% 10% 10% 10% 10% 10% 5% 10% 10% ',
    backgroundColor: '#0c0c0c'
  },
  firstRow: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 11',
    backgroundColor: '#0f0f0f',
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 3',
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '4 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '5 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '6 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fourthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '7 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fifthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  aboutTitleItem: {
    gridRow: '2 / span 1',
    gridColumn: '5 / span 3',
  },
  hr: {
    gridRow: '3 / span 1',
    gridColumn: '5 / span 3',
    placeSelf: 'center'
  },
  aboutItem: {
    gridRow: '5 / span 1',
    gridColumn: '3 / span 7',
  },
//////////////////////////////  ITEMs  ///////////////////////////////////////
  logo: {
    fontFamily: 'Roboto',
    fontSize: '2.4vmax',
    fontWeight: '800',
    marginTop: '4%',
    marginLeft: '15%'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#4A7023',
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '1vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  selectedLink: {
    fontFamily: 'Roboto',
    fontSize: '1vmax',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#00611C',
    '&:hover': {
      color: "#CFDBC5",
    },
  },
  aboutTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.5vmax',
    fontWeight: '800',
    color: '#C1CDC1',
  },
  about: {
    fontFamily: 'Roboto',
    fontSize: '2.2vmin',
    fontWeight: '400',
    color: '#C1CDC1',
  }
});

export function About(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.firstRow}></div>
      <div className={classes.logoItem}>
        <Typography className={classes.logo}>
          <Link className={classes.logoLink} to="/">Electrony</Link>
        </Typography>
      </div>
      <div className={classes.firstButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
      </div>
      <div className={classes.secondButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/steps">PLAYLIST</Link></Button>
      </div>
      <div className={classes.thirdButtonItem}>
        <Button disabled position="center" size="medium"><Link className={classes.selectedLink} to="/about">ABOUT</Link></Button>
      </div>
      <div className={classes.fourthButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
      </div>
      <div className={classes.fifthButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>
      <div className={classes.aboutTitleItem}>
        <p className={classes.aboutTitle}>About</p>
      </div>
      <div className={classes.hr}>
        <hr style={{width: '16vmin'}} />
      </div>
      <div className={classes.aboutItem}>
        <div class="animated fadeIn">
          <Typography className={classes.about}>
            As Stockhausen once said, we are interested when other musicians are trying to
            discover new worlds of sound. We therefore celebrate electronic music due to the vast amount of
            possibilities it brings forward for the aural expression of one's subjectivity.
            <br /><br />
            Electrony is designed to extend the reach of electronic music to people from all backgrounds, ages,
            and lifestyles, not only as an aesthetic field, but also as a space for a community of people who
            find an identity in their electronic sonic experience.
            <br /><br />
            Our ears are capable of hearing sound frequencies from approximately 20 to 20,000 Hertz (Hz). Yet,
            historically, the expressions of sounds have been squeezed in by the capacity of acoustic instruments
            such that a piano, for example, could not produce sounds at the frequency of 450 Hz, since its 49th key
            is designed to produce 440 Hz and its 50th key 466.164 Hz. What happens, then, to sounds at 450 or 451 Hz?
            Hence, our aural experience has been limited by the capacity of acoustic instruments when it came to music.
            <br /><br />
            Electronic music, on the other hand, is not limited to particular designs of musical instruments and therefore brings
            liberation to sounds by making possible for each of them to vibrate through the air and reach to
            the human ear. With electronic music, the only restriction between the artist and the audience is the
            imagination of both.
            <br /><br />
            Our service provides a set of parameters (genre, danceability, energy, loudness,
            tempo, and positiveness) which a user draws upon to specify the kind of electronic music they are seeking.
            In the background, Electrony evaluates the choices of the user to find electronic music tracks that
            closely correspond to the quest of the user. Electrony then curates a list of tracks which can finally
            be uploaded to the user's Spotify account.
          </Typography>
      </div>
      </div>
    </div>
  )
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = successTheme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '10vmin 3vmin 500px 3vmin 7vmin 2vmin',
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
  playlistItem: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 9',
    placeSelf: 'center',
    textAlign: 'center'
  },
  buttonItem: {
    gridRow: '5 / span 1',
    gridColumn: '2 / span 9',
    placeSelf: 'center'
  },
////////////////////////////// ITEMS //////////////////////////////////////////
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
  playlistTitle: {
    fontFamily: 'Montserrat',
    fontSize: '1.7vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  button: {
    marginRight: '1.8%',
    borderRadius: '5px',
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    }
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#C1CDC1'
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
});

export function PlaylistSuccess(props) {
  const { classes } = props;
  const uriParts = props.playlistUri.split(':');
  const embedLink = `https://open.spotify.com/embed/${uriParts[1]}/${uriParts[2]}/${uriParts[3]}/${uriParts[4]}`;

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
        <Button disabled position="center" size="medium"><Link className={classes.selectedLink} to="/steps">PLAYLIST</Link></Button>
      </div>
      <div className={classes.thirdButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
      </div>
      <div className={classes.fourthButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
      </div>
      <div className={classes.fifthButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>
      <div className={classes.playlistItem}>
        <Typography variant="h5" component="h3" className={classes.playlistTitle}>
          Here is your playlist, {props.userName}!
        </Typography>
        <br />
        <div class="animated zoomIn">
          <iframe src={embedLink}
            width="300"
            height="450"
            frameBorder="0"
            title="Spotify Playlist"
            allowtransparency="true"
            allow="encrypted-media">
          </iframe>
        </div>
      </div>
      <div className={classes.buttonItem}>
        <div class="animated flip">
          <Button size="large" variant="contained" className={classes.button}>
            <Link className={classes.link} to="/steps">CREATE ANOTHER ONE</Link>
          </Button>
        </div>
      </div>
    </div>
  )
};

PlaylistSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistSuccess);

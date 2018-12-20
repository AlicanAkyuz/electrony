import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = successTheme => ({
  container: {
    display: 'grid',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '8% 1% 6% 1%  2% 0.5%  2% 0.5%  2% 0.5%  2% 0.5%  2% 0.5%  2% 2.5% 6% 43% 3% 10% 5%',
    gridTemplateColumns: '5% 8% 2% 8% 2% 8% 34% 8% 2% 8% 2% 8% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 3',
    placeSelf: 'center',
    paddingTop: '5%',
    paddingLeft: '20%'
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
  titleItem: {
    gridRow: '3 / span 1',
    gridColumn: '7 / span 1',
    placeSelf: 'center',
  },
  nameItem: {
    gridRow: '5 / span 1',
    gridColumn: '7 / span 6',
    display: 'flex'
  },
  descriptionItem: {
    gridRow: '7 / span 1',
    gridColumn: '7 / span 6',
    display: 'flex'
  },
  privateItem: {
    gridRow: '9 / span 1',
    gridColumn: '7 / span 6',
    display: 'flex'
  },
  notableItem: {
    gridRow: '11 / span 1',
    gridColumn: '7 / span 6',
    display: 'flex'
  },
  genreItem: {
    gridRow: '13 / span 1',
    gridColumn: '7 / span 6',
    display: 'flex'
  },
  uriItem: {
    gridRow: '15 / span 1',
    gridColumn: '7 / span 6',
    display: 'flex'
  },
  arrowItem: {
    gridRow: '17 / span 1',
    gridColumn: '7 / span 1',
    placeSelf: 'center'
  },
  playlistItem: {
    gridRow: '18 / span 1',
    gridColumn: '4 / span 7',
    placeSelf: 'center'
  },
  buttonItem: {
    gridRow: '20 / span 1',
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
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '2vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  texts: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '800',
    color: '#C1CDC1',
  },
  propTexts: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '400',
    color: '#4A7023',
  },
  arrow: {
    width: '2.8vmax',
    height: '2.3vmax'
  },
  button: {
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    height: '70%',
    width: '70%',
    borderRadius: '5px',
    border: 'none'
  },
  link: {
    fontFamily: 'Montserrat',
    fontSize: '1.5vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
});

export function PlaylistSuccess(props) {
  const { classes } = props;
  const linkAddress = `/select_details#access_token=${props.token}`;
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
      <div className={classes.titleItem}>
        <p className={classes.title}>Here is your playlist, {props.userName}!</p>
      </div>
      <div className={classes.nameItem}>
        <p className={classes.texts}>Name:&nbsp; &nbsp; </p>
        <p className={classes.propTexts}>{props.playlistName}</p>
      </div>
      <div className={classes.descriptionItem}>
        <p className={classes.texts}>Description:&nbsp; &nbsp; </p>
        <p className={classes.propTexts}>{props.playlistDescription}</p>
      </div>
      <div className={classes.privateItem}>
        <p className={classes.texts}>Private:&nbsp; &nbsp; </p>
        <p className={classes.propTexts}>{props.private}</p>
      </div>
      <div className={classes.notableItem}>
        <p className={classes.texts}>Notable Artists:&nbsp; &nbsp; </p>
        <p className={classes.propTexts}>{props.artists}</p>
      </div>
      <div className={classes.genreItem}>
        <p className={classes.texts}>Dominant Genre:&nbsp; &nbsp; </p>
        <p className={classes.propTexts}>{props.genre}</p>
      </div>
      <div className={classes.uriItem}>
        <p className={classes.texts}>Spotify Link:&nbsp; &nbsp; </p>
        <p className={classes.propTexts}><a style={{textDecoration: 'none', color: '#4A7023'}} target="_blank" href={props.spotifyUrl}>Click Here!</a></p>
      </div>
      <div className={classes.arrowItem}>
        <img className={classes.arrow} src="./arrow.png" alt="arrow" />
      </div>
      <div className={classes.playlistItem}>
        <div class="animated zoomIn delay-1s">
          <iframe src={props.spotifyUrl}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media">
          </iframe>
        </div>
      </div>
      <div className={classes.buttonItem}>
        <div class="animated zoomInRight" style={{textAlign: 'center', marginTop: '2%'}}>
          <button onClick={console.log("clicked")} className={classes.button}>
            <Link to={linkAddress} className={classes.link}>CREATE ANOTHER PLAYLIST!</Link>
          </button>
        </div>
      </div>
    </div>
  )
};

PlaylistSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistSuccess);

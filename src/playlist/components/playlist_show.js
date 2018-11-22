import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/navbar';
import PlaylistCard from './playlist_card';
import IconButton from '@material-ui/core/IconButton';

const playlistLoadStyle = playlistLoadStyle => ({
  root: {
    width: '100%',
    height: '720px'
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  gridsHolder: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  holderGrids: {
    backgroundColor: 'black',
    marginTop: '1%',
    color: 'white'
  },
  playlistTitleHolder: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    marginTop: '13%',
    marginBottom: '1%'
  },
  playlistTitle: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Montserrat',
    fontSize: '70px',
    fontWeight: '800',
    color: '#7D2C1A'
  },
  diversified: {
    fontFamily: 'Montserrat',
    fontSize: '70px',
    fontWeight: '800',
    color: '#FEF6AF'
  },
  playlistTitleContent: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5'
  },
  playlistHolderGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'black',
    marginTop: '1%',
    marginBottom: '1%'
  },
  uploadTextHolder: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '5%',
    marginBottom: '1%'
  },
  uploadText: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '60px',
    color: '#c5c5c5'
  },
  uploadTextContent: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5'
  },
  uploadOptionsGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: '10%'
  },
  iconButton: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: "transparent",
    },
  },
  logos: {
    width: "210px",
    height: "95px"
  }
});

function PlaylistShow(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.navBarHolder} item xs={12}>
        <NavBar pageOne="/about" textOne="About" pageTwo="/contact" textTwo="Contact" />
      </Grid>

      <Grid className={classes.gridsHolder} container spacing={24}>

        <Grid className={classes.playlistTitleHolder} item>
          <Typography className={classes.playlistTitle}>
            Sound<Typography className={classes.diversified}>iversified!</Typography>
          </Typography>
          <Typography className={classes.playlistTitleContent}>
            The following 10 Songs are specially geared toward your taste in music.
          </Typography>
          <Typography className={classes.playlistTitleContent}>
            Enjoy these tunes that are available to you beyond genres.
          </Typography>
        </Grid>

        <Grid className={classes.playlistHolderGrid} item xs={12}>
            <PlaylistCard number="1" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="2" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="3" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="4" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="5" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="6" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="7" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="8" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="9" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
            <PlaylistCard number="10" artist={props.artist} album={props.album} song={props.song} year={props.year} image={props.image} />
        </Grid>

        <Grid className={classes.uploadTextHolder} item>
          <Typography className={classes.uploadText}>
            Save Your Playlist
          </Typography>
          <Typography className={classes.uploadTextContent}>
            Click on the icons to upload this special playlist to a music stream app of your choice.
          </Typography>
        </Grid>

        <Grid className={classes.uploadOptionsGrid} item>
          <IconButton onClick={() => {props.uploadToSpotify()}} className={classes.iconButton}>
              <img className={classes.logos} src="./spotify.jpg" alt="Spotify Logo" />
          </IconButton>
          <IconButton onClick={() => {props.uploadToApplemusic()}} className={classes.iconButton}>
              <img className={classes.logos} src="./apple.jpg" alt="Apple Music Logo" />
          </IconButton>
          <IconButton onClick={() => {props.uploadToDeezer()}} className={classes.iconButton}>
            <img className={classes.logos} src="./deezer.jpg" alt="Deezer Logo" />
          </IconButton>
        </Grid>

      </Grid>
    </div>
  )
};

PlaylistShow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(playlistLoadStyle)(PlaylistShow);

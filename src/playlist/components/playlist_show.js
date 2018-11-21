import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/navbar';
import PlaylistCard from './playlist_card';

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
    width: '70%',
    backgroundColor: 'black',
    borderRadius: '10px',
    alignItems: 'center',
    marginTop: '10%'
  },
  typographyOne: {
    fontFamily: 'Montserrat',
    fontSize: '40px',
    color: '#A99884'
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
    marginTop: '3%'
  },
  uploadText: {
    fontFamily: 'Montserrat',
    fontSize: '40px',
    color: '#A99884'
  },
  uploadOptionsHolder: {
    marginTop: '3%'
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
          <Typography className={classes.typographyOne}>
            Here is What We Have For you
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
            Upload Your Playlist
          </Typography>
        </Grid>

        <Grid className={classes.uploadOptionsHolder} item>
          <Typography className={classes.uploadText}>
            Spotify, Apple Music, Deezer
          </Typography>
        </Grid>

      </Grid>
    </div>
  )
};

PlaylistShow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(playlistLoadStyle)(PlaylistShow);

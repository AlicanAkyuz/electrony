import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/navbar';
import PlaylistCard from '../components/playlist_card';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

const playlistStyle = playlistStyle => ({
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

class Playlist extends React.Component {
  componentDidMount() {
    const songZero = {
      name: this.props.spotifyData.tracks[0].name,
      api_id: this.props.spotifyData.tracks[0].id,
      api_href: this.props.spotifyData.tracks[0].href,
      album: this.props.spotifyData.tracks[0].album.name,
      artist: this.props.spotifyData.tracks[0].album.artists[0].name,
      image: this.props.spotifyData.tracks[0].album.images[1].url
    };
    const songOne = {
      name: this.props.spotifyData.tracks[1].name,
      api_id: this.props.spotifyData.tracks[1].id,
      api_href: this.props.spotifyData.tracks[1].href,
      album: this.props.spotifyData.tracks[1].album.name,
      artist: this.props.spotifyData.tracks[1].album.artists[0].name,
      image: this.props.spotifyData.tracks[1].album.images[1].url
    };
    const songTwo = {
      name: this.props.spotifyData.tracks[2].name,
      api_id: this.props.spotifyData.tracks[2].id,
      api_href: this.props.spotifyData.tracks[2].href,
      album: this.props.spotifyData.tracks[2].album.name,
      artist: this.props.spotifyData.tracks[2].album.artists[0].name,
      image: this.props.spotifyData.tracks[2].album.images[1].url
    };
    const songThree = {
      name: this.props.spotifyData.tracks[3].name,
      api_id: this.props.spotifyData.tracks[3].id,
      api_href: this.props.spotifyData.tracks[3].href,
      album: this.props.spotifyData.tracks[3].album.name,
      artist: this.props.spotifyData.tracks[3].album.artists[0].name,
      image: this.props.spotifyData.tracks[3].album.images[1].url
    };
    const songFour = {
      name: this.props.spotifyData.tracks[4].name,
      api_id: this.props.spotifyData.tracks[4].id,
      api_href: this.props.spotifyData.tracks[4].href,
      album: this.props.spotifyData.tracks[4].album.name,
      artist: this.props.spotifyData.tracks[4].album.artists[0].name,
      image: this.props.spotifyData.tracks[4].album.images[1].url
    };
    const songFive = {
      name: this.props.spotifyData.tracks[5].name,
      api_id: this.props.spotifyData.tracks[5].id,
      api_href: this.props.spotifyData.tracks[5].href,
      album: this.props.spotifyData.tracks[5].album.name,
      artist: this.props.spotifyData.tracks[5].album.artists[0].name,
      image: this.props.spotifyData.tracks[5].album.images[1].url
    };
    const songSix = {
      name: this.props.spotifyData.tracks[6].name,
      api_id: this.props.spotifyData.tracks[6].id,
      api_href: this.props.spotifyData.tracks[6].href,
      album: this.props.spotifyData.tracks[6].album.name,
      artist: this.props.spotifyData.tracks[6].album.artists[0].name,
      image: this.props.spotifyData.tracks[6].album.images[1].url
    };
    const songSeven = {
      name: this.props.spotifyData.tracks[7].name,
      api_id: this.props.spotifyData.tracks[7].id,
      api_href: this.props.spotifyData.tracks[7].href,
      album: this.props.spotifyData.tracks[7].album.name,
      artist: this.props.spotifyData.tracks[7].album.artists[0].name,
      image: this.props.spotifyData.tracks[7].album.images[1].url
    };
    const songEight = {
      name: this.props.spotifyData.tracks[8].name,
      api_id: this.props.spotifyData.tracks[8].id,
      api_href: this.props.spotifyData.tracks[8].href,
      album: this.props.spotifyData.tracks[8].album.name,
      artist: this.props.spotifyData.tracks[8].album.artists[0].name,
      image: this.props.spotifyData.tracks[8].album.images[1].url
    };
    const songNine = {
      name: this.props.spotifyData.tracks[9].name,
      api_id: this.props.spotifyData.tracks[9].id,
      api_href: this.props.spotifyData.tracks[9].href,
      album: this.props.spotifyData.tracks[9].album.name,
      artist: this.props.spotifyData.tracks[9].album.artists[0].name,
      image: this.props.spotifyData.tracks[9].album.images[1].url
    };
  };

  render() {
    const { classes } = this.props;
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

        </Grid>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    spotifyData: state.SelectionReducer.spotifyData
  };
};

Playlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(playlistStyle)(Playlist);
const playlistConnected = connect(mapStateToProps)(withstyles);
export default playlistConnected;

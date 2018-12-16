import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../../components/navbar';
import PlaylistCard from '../components/playlist_card';
import PlaylistDetailsBox from '../components/playlist_details_box';
import PlaylistUploadLoad from '../components/load';
import PlaylistSuccess from '../components/playlist_success';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { store_playlist_info,
         handleNameChange,
         handleDescriptionChange,
         handleClickBox,
         handleNameSubmit
} from '../../actions/playlist_actions/actions';

const playlistStyle = playlistStyle => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'black'
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  gridsHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  playlistTitleHolder: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '1%'
  },
  playlistTitle: {
    marginTop: '2%',
    fontFamily: 'Roboto',
    fontSize: '70px',
    fontWeight: '800',
    color: '#4A7023'
  },
  playlistTitleContent: {
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '400',
    color: '#C1CDC1'
  },
  uploadText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '50px',
    color: '#00611C'
  },
  spotifyGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3%'
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
  },
  cardsHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  }
});

class Playlist extends React.Component {
  render() {
    const { classes } = this.props;
    const tracks = this.props.tracks;
    const user_token = this.props.userToken;

    let pageContent;
    if (!this.props.playlist_charging) {
      pageContent =
      <Grid className={classes.gridsHolder} container spacing={24}>

        <Grid className={classes.playlistTitleHolder} item>
          <text className={classes.playlistTitle}>
            Good choices!
          </text>
          <text className={classes.playlistTitleContent}>
            Below is the playlist that Electronify thinks you will love.
          </text>
          <hr style={{width: '50px'}} />
          <h1 className={classes.uploadText}>
            Save Your Playlist to Spotify
          </h1>
        </Grid>

        <Grid className={classes.spotifyGrid} item>
          <IconButton onClick={() => {this.props.dispatch(store_playlist_info(tracks, user_token))}} className={classes.iconButton}>
            Save Your Playlist to Spotify <img className={classes.logos} src="./spotify.jpg" alt="Spotify Logo" />
          </IconButton>
        </Grid>

        <Grid className={classes.cardsHolder} item xs={12}>
            <PlaylistCard
              number="1"
              song={tracks[0].name}
              artist={tracks[0].album.artists[0].name}
              album={tracks[0].album.name}
              image={tracks[0].album.images[1].url} />
            <PlaylistCard
              number="2"
              song={tracks[1].name}
              artist={tracks[1].album.artists[0].name}
              album={tracks[1].album.name}
              image={tracks[1].album.images[1].url} />
            <PlaylistCard
              number="3"
              song={tracks[2].name}
              artist={tracks[2].album.artists[0].name}
              album={tracks[2].album.name}
              image={tracks[2].album.images[1].url} />
            <PlaylistCard
              number="4"
              song={tracks[3].name}
              artist={tracks[3].album.artists[0].name}
              album={tracks[3].album.name}
              image={tracks[3].album.images[1].url} />
            <PlaylistCard
              number="5"
              song={tracks[4].name}
              artist={tracks[4].album.artists[0].name}
              album={tracks[4].album.name}
              image={tracks[4].album.images[1].url} />
            <PlaylistCard
              number="6"
              song={tracks[5].name}
              artist={tracks[5].album.artists[0].name}
              album={tracks[5].album.name}
              image={tracks[5].album.images[1].url} />
            <PlaylistCard
              number="7"
              song={tracks[6].name}
              artist={tracks[6].album.artists[0].name}
              album={tracks[6].album.name}
              image={tracks[6].album.images[1].url} />
            <PlaylistCard
              number="8"
              song={tracks[7].name}
              artist={tracks[7].album.artists[0].name}
              album={tracks[7].album.name}
              image={tracks[7].album.images[1].url} />
            <PlaylistCard
              number="9"
              song={tracks[8].name}
              artist={tracks[8].album.artists[0].name}
              album={tracks[8].album.name}
              image={tracks[8].album.images[1].url} />
            <PlaylistCard
              number="10"
              song={tracks[9].name}
              artist={tracks[9].album.artists[0].name}
              album={tracks[9].album.name}
              image={tracks[9].album.images[1].url} />
        </Grid>

      </Grid>
    };

    if (this.props.playlist_charging) {
      pageContent =
        <Grid className={classes.stepperGrid} item>
          <PlaylistUploadLoad
            title={this.props.playlist_charging_content_title}
            content={this.props.playlist_charging_content_content} />
        </Grid>
    }

    if (this.props.name_box) {
      pageContent =
        <Grid className={classes.stepperGrid} item>
          <PlaylistDetailsBox
            userName={this.props.user_name}
            playlistName={this.props.playlist_name}
            playlistDescription={this.props.playlist_description}
            checkBoxState={this.props.check_box_state}
            handleNameChange={(value) => {this.props.dispatch(handleNameChange(value))}}
            handleDescriptionChange={(value) => {this.props.dispatch(handleDescriptionChange(value))}}
            handleClickBox={() => {this.props.dispatch(handleClickBox())}}
            handleNameSubmit={() => {this.props.dispatch(handleNameSubmit())}}
          />
        </Grid>
    }

    if (this.props.playlist_success) {
      pageContent =
        <Grid className={classes.stepperGrid} item>
          <PlaylistSuccess />
        </Grid>
    }

    return (
      <div className={classes.root}>
        <Grid className={classes.containerGrid} container>

          <Grid className={classes.navBarHolder} item xs={12}>
            <NavBar pageOne="/about" textOne="About" pageTwo="/contact" textTwo="Contact" />
          </Grid>

          {pageContent}
        </Grid>
      </div>
    )
  }
};

const mapStateToProps = state => {
  state = state.PlaylistReducer;
  return {
    user_name: state.user_name,
    playlist_charging: state.playlist_charging,
    playlist_charging_content_title: state.playlist_charging_content.title,
    playlist_charging_content_content: state.playlist_charging_content.content,
    name_box: state.name_box,
    playlist_name: state.playlist_name,
    playlist_description: state.playlist_description,
    check_box_state: state.check_box_state,
    playlist_success: state.playlist_success
  };
};

Playlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(playlistStyle)(Playlist);
const playlistConnected = connect(mapStateToProps)(withstyles);
export default playlistConnected;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PlaylistLoad from '../components/playlist_load';
import PlaylistShow from '../components/playlist_show';
import { connect } from 'react-redux';
import { uploadToSpotify,
         uploadToApplemusic,
         uploadToDeezer
         } from '../../actions/playlist_actions/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '720px',
    backgroundColor: 'black'
  }
});

class Playlist extends React.Component {
  render() {
    const { classes } = this.props;
    let renderPlaylist;

    if (this.props.loading_playlist) {
      renderPlaylist =
      <PlaylistLoad
        title={this.props.loading_title}
        content={this.props.loading_content}
      />
    };

    if (this.props.playlist_failure) {
      renderPlaylist =
      <PlaylistLoad
        title={this.props.failure_title}
        content={this.props.failure_content}
      />
    };

    if (this.props.playlist_success) {
      renderPlaylist =
      <PlaylistShow
        uploadToSpotify={() => {this.props.dispatch(uploadToSpotify())}}
        uploadToApplemusic={() => {this.props.dispatch(uploadToApplemusic())}}
        uploadToDeezer={() => {this.props.dispatch(uploadToDeezer())}}
        artist={this.props.artist}
        album={this.props.album}
        song={this.props.song}
        year={this.props.year}
        image={this.props.image} />
    };

    return (
      <div className={classes.root}>
        {renderPlaylist}
      </div>
    );

  };
};

const mapStateToProps = state => {
  state = state.PlaylistReducer;
  return {
    loading_playlist: state.loading_playlist,
    loading_title: state.loading_playlist_content.title,
    loading_content: state.loading_playlist_content.content,
    playlist_success: state.playlist_success,
    playlist_failure: state.playlist_failure,
    failure_title: state.playlist_failure_content.title,
    failure_content: state.playlist_failure_content.content,
    artist: state.song_data.artist,
    album: state.song_data.album,
    song: state.song_data.song,
    year: state.song_data.year,
    image: state.song_data.image,
  };
};

Playlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Playlist);
const playlistConnected = connect(mapStateToProps)(withstyles);
export default playlistConnected;

import {
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE,
  SPOTIFY_UPLOAD,
  APPLE_UPLOAD,
  DEEZER_UPLOAD
} from '../actions/playlist_actions/action_types';

const initialState = {
  loading_playlist: false,
  loading_playlist_content: {
    title: "Creating your tune...",
    content: "This may take a few seconds, please hold on!"
  },
  playlist_success: true,
  playlist_failure: false,
  playlist_failure_content: {
    title: "There has been a problem!",
    content: "Sorry, there has been a server problem. Please try again."
  },
  song_data: {
    artist: '',
    album: '',
    song: '',
    year: '',
    image: ''
  }
};

function PlaylistReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case RENDER_PLAYLIST: {
      const newState = Object.assign({}, state);
      newState.loading_playlist = action.payload
      return newState;
    }
    case PLAYLIST_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.playlist_success = action.payload;
      newState.song_data.artist = action.artist_info.artist;
      newState.song_data.album = action.artist_info.album;
      newState.song_data.song = action.artist_info.song;
      newState.song_data.year = action.artist_info.year;
      newState.song_data.image = action.artist_info.image
      return newState;
    }
    case PLAYLIST_FAILURE: {
      const newState = Object.assign({}, state);
      newState.playlist_failure = action.payload
      return newState;
    }
    case SPOTIFY_UPLOAD: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case APPLE_UPLOAD: {
      const newState = Object.assign({}, state);
      return newState;
    }
    case DEEZER_UPLOAD: {
      const newState = Object.assign({}, state);
      return newState;
    }
    default:
      return state;
  }
}

export default PlaylistReducer;

import {
  SPOTIFY_UPLOAD
} from '../actions/playlist_actions/action_types';

const initialState = {
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
    case SPOTIFY_UPLOAD: {
      const newState = Object.assign({}, state);
      return newState;
    }
    default:
      return state;
  }
}

export default PlaylistReducer;

import {
  STORE_PLAYLIST,
  LOADING,
  USER_INFO,
  PLAYLIST_ID
} from '../actions/playlist_actions/action_types';

const initialState = {
  playlistData: [],
  token: '',
  user_info: {},
  playlist_id : '',
  loading: false,
  loading_content: {
    title: "Loading Your Playlist",
    content: "Just a second..."
  }
};

function PlaylistReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case STORE_PLAYLIST: {
      const newState = Object.assign({}, state);
      newState.playlistData = action.payload
      newState.token = action.token
      return newState;
    }
    case USER_INFO: {
      const newState = Object.assign({}, state);
      newState.user_info = action.payload
      return newState;
    }
    case LOADING: {
      const newState = Object.assign({}, state);
      newState.loading = action.payload
      return newState;
    }
    case PLAYLIST_ID: {
      const newState = Object.assign({}, state);
      newState.playlist_id = action.payload
      return newState;
    }
    default:
      return state;
  }
}

export default PlaylistReducer;

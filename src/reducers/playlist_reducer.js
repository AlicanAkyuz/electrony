import {
  STORE_PLAYLIST,
  USER_INFO,
  LOADING
} from '../actions/playlist_actions/action_types';

const initialState = {
  playlistData: [],
  token: '',
  user_info: {},
  loading: false
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
    default:
      return state;
  }
}

export default PlaylistReducer;

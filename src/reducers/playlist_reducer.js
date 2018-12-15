import {
  STORE_PLAYLIST,
  USER_INFO,
  PLAYLIST_ID,
  LOADING,
  NAME_BOX,
  NAME_CHANGED,
  DESCRIPTION_CHANGED,
  CHECK_BOX,
  NAME_SUBMIT,
  SUCCESS
} from '../actions/playlist_actions/action_types';

const initialState = {
  playlistData: [],
  token: '',
  user_info: {},
  user_name: "",
  name_box: false,
  playlist_name: "",
  playlist_description: "",
  check_box_state: false,
  playlist_id : '',
  playlist_loading: false,
  loading_content: {
    title: "Loading Your Playlist",
    content: "Just a second..."
  },
  playlist_success: false
};

function PlaylistReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case STORE_PLAYLIST: {
      const newState = Object.assign({}, state);
      newState.playlistData = action.payload
      newState.token = action.token
      return newState;
    }
    case LOADING: {
      const newState = Object.assign({}, state);
      newState.playlist_loading = action.payload
      return newState;
    }
    case USER_INFO: {
      const newState = Object.assign({}, state);
      newState.user_info = action.payload
      newState.user_name = action.payloadTwo
      return newState;
    }
    case NAME_BOX: {
      const newState = Object.assign({}, state);
      newState.name_box = action.payload
      return newState;
    }
    case NAME_CHANGED: {
      const newState = Object.assign({}, state);
      newState.playlist_name = action.payload
      return newState;
    }
    case DESCRIPTION_CHANGED: {
      const newState = Object.assign({}, state);
      newState.playlist_description = action.payload
      return newState;
    }
    case CHECK_BOX: {
      const newState = Object.assign({}, state);
      newState.check_box_state = action.payload
      return newState;
    }
    case NAME_SUBMIT: {
      const newState = Object.assign({}, state);
      newState.name_box = action.payload
      return newState;
    }
    case PLAYLIST_ID: {
      const newState = Object.assign({}, state);
      newState.playlist_id = action.payload
      return newState;
    }
    case SUCCESS: {
      const newState = Object.assign({}, state);
      newState.playlist_success = action.payload
      return newState;
    }
    default:
      return state;
  }
}

export default PlaylistReducer;

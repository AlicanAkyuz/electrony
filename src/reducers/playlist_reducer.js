import {
  PLAY_CRE
} from '../actions/playlist_actions/action_types';

const initialState = {
  playlistData: [],
};

function PlaylistReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case PLAY_CRE: {
      console.log(action.payload);
      const newState = Object.assign({}, state);
      newState.playlistData = action.payload
      return newState;
    }
    default:
      return state;
  }
}

export default PlaylistReducer;

import {
  DIALOG_OPEN,
  DIALOG_CLOSE,
  GENRE_SELECTED,
  DANCE_SELECTED,
  ENERGY_SELECTED,
  KEY_SELECTED,
  LOUD_SELECTED,
  MODE_SELECTED,
  TEMPO_SELECTED,
  POS_SELECTED,
  TOKEN,
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE
} from '../actions/selection_actions/action_types';

const initialState = {
  select: {
    activeStep: 0,
    dialogOpen: false
  },
  user_selection: {
    genre: '',
    danceability: '',
    energy: '',
    key: '',
    loudness: '',
    mode: '',
    tempo: '',
    positiveness: ''
  },
  titles: {
    genre: "Select your genre",
    danceability: "Wanna danace?",
    energy: "Need energy?",
    key: "Any key preference?",
    loudness: "How loud can your ears take?",
    mode: "How about mode?",
    tempo: "Keep it down or keep it up!",
    positiveness: "Positive vibes only?",
  },
  loading_playlist: false,
  loading_playlist_content: {
    title: "Finding your electronic tunes...",
    content: "This may take a few seconds, please hold on!"
  },
  playlist_failure: false,
  playlist_failure_content: {
    title: "Ups!",
    content: "Sorry, there has been a server problem. Please try again."
  },
  playlist_success: false,
  spotifyData: {},
  user_token: ''
};

function SelectionReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case DIALOG_OPEN: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload
      return newState;
    }
    case DIALOG_CLOSE: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload;
      newState.select.activeStep = state.select.activeStep + action.stepPayload
      return newState;
    }
    case GENRE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.genre = action.payload;
      return newState;
    }
    case DANCE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.danceability = action.payload;
      return newState;
    }
    case ENERGY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.energy = action.payload;
      return newState;
    }
    case KEY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.key = action.payload;
      return newState;
    }
    case LOUD_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.loudness = action.payload;
      return newState;
    }
    case MODE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.mode = action.payload;
      return newState;
    }
    case TEMPO_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.tempo = action.payload;
      return newState;
    }
    case POS_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.positiveness = action.payload;
      return newState;
    }
    case TOKEN: {
      const newState = Object.assign({}, state);
      newState.user_token = action.payload
      return newState;
    }
    case RENDER_PLAYLIST: {
      const newState = Object.assign({}, state);
      newState.loading_playlist = action.payload
      return newState;
    }
    case PLAYLIST_FAILURE: {
      const newState = Object.assign({}, state);
      newState.playlist_failure = action.payload
      return newState;
    }
    case PLAYLIST_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.playlist_success = action.payload;
      newState.spotifyData = action.spotifyData;
      return newState;
    }
    default:
      return state;
  }
};

export default SelectionReducer;

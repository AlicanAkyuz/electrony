import {
  DIALOG_OPEN,
  DIALOG_CLOSE,
  DANCE_SELECTED,
  ACOUSTIC_SELECTED,
  ENERGY_SELECTED,
  INS_SELECTED,
  KEY_SELECTED,
  LOUD_SELECTED,
  MODE_SELECTED,
  POP_SELECTED,
  TEMPO_SELECTED,
  VAL_SELECTED,
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
      danceability: null,
      acousticness: null,
      energy: null,
      instrumentalness: null,
      key: null,
      loudness: null,
      mode: null,
      popularity: null,
      tempo: null,
      valence: null
    },
    titles: {
      danceability: "Danceability",
      acousticness: "Acousticness",
      energy: "Energy",
      instrumentalness: "Instrumentalness",
      key: "Key",
      loudness: "Loudness",
      mode: "Mode",
      popularity: "Popularity",
      tempo: "Tempo",
      valence: "Valence",
    },
    user_selection_fetch: {
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
    },
    song_data: {
      artist: '',
      album: '',
      song: '',
      year: '',
      image: ''
    }
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
    case DANCE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.danceability = action.payload;
      return newState;
    }
    case ACOUSTIC_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.acousticness = action.payload;
      return newState;
    }
    case ENERGY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.energy = action.payload;
      return newState;
    }
    case INS_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.instrumentalness = action.payload;
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
    case POP_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.popularity = action.payload;
      return newState;
    }
    case TEMPO_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.tempo = action.payload;
      return newState;
    }
    case VAL_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.valence = action.payload;
      return newState;
    }
    case RENDER_PLAYLIST: {
      const newState = Object.assign({}, state);
      newState.user_selection_fetch.loading_playlist = action.payload
      return newState;
    }
    case PLAYLIST_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.user_selection_fetch.playlist_success = action.payload;
      newState.song_data.artist = action.artist_info.artist;
      newState.song_data.album = action.artist_info.album;
      newState.song_data.song = action.artist_info.song;
      newState.song_data.year = action.artist_info.year;
      newState.song_data.image = action.artist_info.image
      return newState;
    }
    case PLAYLIST_FAILURE: {
      const newState = Object.assign({}, state);
      newState.user_selection_fetch.playlist_failure = action.payload
      return newState;
    }
    default:
      return state;
  }
}

export default SelectionReducer;

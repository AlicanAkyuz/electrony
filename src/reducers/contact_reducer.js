import {
  NAME_UPDATE,
  EMAIL_UPDATE,
  MESSAGE_UPDATE,
  SUBMITTED,
  ERROR,
  LOADING,
  FETCH_START_SUCCESS,
  FETCH_START_FAILURE,
  RESET
} from '../actions/contact_actions/action_types';

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
  VAL_SELECTED
} from '../actions/selection_actions/action_types';

import {
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE
} from '../actions/fetch_actions/action_types';

const initialState = {
    form: {
      name: '',
      email: '',
      message: ''
    },
    submitted: false,
    error: false,
    isLoading: false,
    loadingContent: {
      title: "Just a second...",
      content: "Please wait while your message is being processed..."
    },
    isSuccess: false,
    successContent: {
      title: "Thanks!",
      content: "Your message is received. We will contact you shortly."
    },
    isFailure: false,
    failureContent: {
      title: "There has been a problem!",
      content: "Sorry, there has been a server problem. Please try again."
    },
    errorArray: [],
    select: {
      activeStep: 0,
      dialogOpen: false,
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
      valence: null,
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

function ContactReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
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
    case NAME_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.name = action.payload;
      return newState;
    }
    case EMAIL_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.email = action.payload;
      return newState;
    }
    case MESSAGE_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.message = action.payload;
      return newState;
    }
    case SUBMITTED:
      return Object.assign({}, state, {
            submitted: action.payload
        });
    case ERROR:
      return Object.assign({}, state, {
            error: action.payload,
            errorArray: action.foundError
        });
    case LOADING:
      return Object.assign({}, state, {
            isLoading: action.payload
        });
    case FETCH_START_SUCCESS:
      return Object.assign({}, state, {
            isSuccess: action.payload
        });
    case FETCH_START_FAILURE:
      return Object.assign({}, state, {
            isFailure: action.payload
        });
    case RESET:
      return JSON.parse(JSON.stringify(initialState));
    default:
      return state;
  }
}

export default ContactReducer;
